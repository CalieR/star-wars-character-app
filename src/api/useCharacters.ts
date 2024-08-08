import { useCallback, useState } from 'react';
import { type PageInfo, type Character } from '../types/app-types';

interface CharacterState {
  data: Character[];
  isPending: boolean;
  error: string | null;
  pageInfo: PageInfo;
  actions: {
    initialise: () => void;
    nextPage: () => void;
    previousPage: () => void;
  };
}

const characterAPI = 'https://swapi.dev/api/people';

const getPageNumberFromUrl = (url: string) => {
  const searchPrams = url.split('?')[1];
  const params = new URLSearchParams(searchPrams);
  return params.has('page') ? params.get('page') : 1;
};

const useCharacters = (): CharacterState => {
  const [data, setData] = useState<Character[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    count: 0,
    next: null,
    previous: null,
    itemsPerPage: 0,
  });

  const fetchData = useCallback(async (url: string) => {
    try {
      const peopleResponse = await fetch(url);
      const peopleJson = await peopleResponse.json();
      const pageNumber = getPageNumberFromUrl(url);
      const characters = peopleJson.results.map(
        (result: Character, index: number) => {
          const id = `${pageNumber}${index + 1}`;
          return {
            ...result,
            id,
            imageUrl: `https://picsum.photos/200?random=${id}`,
          };
        }
      );
      setData(characters);
      const pageInfo: PageInfo = {
        ...peopleJson,
        itemsPerPage: peopleJson.results.length,
      };
      setPageInfo(pageInfo);
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError('Oops, the Sarlacc has eaten the characters!');
    }
  }, []);

  const initialise = async () => {
    await fetchData(characterAPI);
  };

  const nextPage = async () => {
    if (pageInfo.next) await fetchData(pageInfo.next);
  };

  const previousPage = async () => {
    if (pageInfo.previous) await fetchData(pageInfo.previous);
  };

  return {
    data,
    isPending,
    error,
    pageInfo,
    actions: {
      initialise,
      nextPage,
      previousPage,
    },
  };
};

export default useCharacters;
