import CharacterCard from './CharacterCard';
import { Character } from '../types/app-types';

interface CharacterCardsListProps {
  characters: Character[];
}

const CharacterCardsList = ({ characters }: CharacterCardsListProps) => {
  return (
    <div className="character-cards-list">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterCardsList;


