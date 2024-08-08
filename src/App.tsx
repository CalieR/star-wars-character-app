import './App.scss';
import { useEffect } from 'react';
import useCharacters from './api/useCharacters';

import CharacterCardsList from './components/CharacterCardsList';
import Pagination from './components/Pagination';

function App() {
  const { data, pageInfo, isPending, error, actions } = useCharacters();

  useEffect(() => {
    const initialiseData = async () => {
      await actions.initialise();
    };

    initialiseData();
  }, []);

  return (
    <>
      <h1>Star Wars Character Cards</h1>
      <section>
        {error && <p>{error}</p>}
        {isPending && <p>Loading characters...</p>}
        {data && (
          <>
            <Pagination
              previousPageHandler={actions.previousPage}
              nextPageHandler={actions.nextPage}
              pageInfo={pageInfo}
            />
            <CharacterCardsList characters={data} />
          </>
        )}
      </section>
    </>
  );
}

export default App;
