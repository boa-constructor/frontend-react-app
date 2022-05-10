import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupById, getCharactersFromGroup } from '../utils/api';

const Group = () => {
  const [group, setGroup] = useState();
  const [characters, setCharacters] = useState([]);
  const { group_id } = useParams();

  useEffect(() => {
    getGroupById(group_id)
      .then((group) => {
        setGroup(group);
        return group.characters;
      })
      .then((characters) => {
        getCharactersFromGroup(characters).then((characters) => {
          setCharacters(characters);
        });
      });
  }).catch(
    (err) => {
      console.log(err);
    },
    [group_id]
  );

  const { group_name, avatar_url, game_info, dm } = group;

  return (
    <div>
      Group Section
      <h2>{group_name}</h2>
      <img src={avatar_url} alt="group avatar"></img>
      <h3>{dm}</h3>
      <p>{game_info}</p>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.character_id}>
              <p>{character.character_name}</p>
              <img src={character.avatar_url} alt="character avatar"></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Group;
