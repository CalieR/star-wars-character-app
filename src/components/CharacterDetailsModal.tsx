import { type Character } from '../types/app-types';

interface CharacterDetailsModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterDetailsModal = ({
  character,
  onClose,
}: CharacterDetailsModalProps) => {
  const formatDateAdded = (date: string) => {
    const dateAdded = new Date(date);
    const dd = dateAdded.getDate();
    const MM = (dateAdded.getMonth() + 1.0).toString().padStart(2, '0');
    const yyyy = dateAdded.getFullYear();
    return `${dd}-${MM}-${yyyy}`;
  };

  const heightInMeters = (height: string) => {
    return parseInt(height) / 100;
  };

  return (
    <div
      className="character-details-modal-backdrop"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="character-details-modal">
        <h2 className="modal-title">{character.name}</h2>
        <table>
          <tbody>
            <tr>
              <td>Height:</td>
              <td>{heightInMeters(character.height)} meters</td>
            </tr>
            <tr>
              <td>Mass</td>
              <td>{character.mass} kg</td>
            </tr>
            <tr>
              <td>Date added:</td>
              <td>{formatDateAdded(character.created)}</td>
            </tr>
            <tr>
              <td>Number of films:</td>
              <td>{character.films.length}</td>
            </tr>
            <tr>
              <td>Birth year:</td>
              <td>{character.birth_year}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CharacterDetailsModal;
