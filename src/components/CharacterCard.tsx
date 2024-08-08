import { Character } from '../types/app-types';
import { createPortal } from 'react-dom';
import CharacterDetailsModal from './CharacterDetailsModal';
import { useState } from 'react';

interface CharacterCardProps {
  character: Character;
  key: number;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="character-card" onClick={() => setShowModal(true)}>
      <h2>{character.name}</h2>
      {showModal &&
        createPortal(
          <CharacterDetailsModal
            character={character}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
      <img
        className="character-image"
        src={character.imageUrl}
        alt="randomised image to represent character"
      />
    </div>
  );
};

export default CharacterCard;

