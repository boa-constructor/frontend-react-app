import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/user';
import { getGroupById, getCharacterByID, getUserProfile } from '../utils/api';

const Group = () => {
  const userContext = useContext(UserContext);
  const [group, setGroup] = useState({});
  const [characters, setCharacters] = useState([]);
  const { group_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    getGroupById(group_id)
      .then((group) => {
        setGroup(group);
        setLoading(false);
        group.characters.forEach((character_id) => {
          getCharacterByID(character_id).then((character) => {
            character.character_id = character_id;
            setCharacters((currCharacters) => {
              return [...currCharacters, character];
            });
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    getUserProfile(userContext.user)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  if (loading) return <p> Loading...</p>;
  return (
    <div>
      <h2>{group.group_name}</h2>
      <img id="group_img" src={group.avatar} alt="group avatar"></img>
      <p>Contact Info: {user.email}</p>
      <p>Group info: {group.game_info}</p>
      {characters.length && (
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
      )}
    </div>
  );
};
export default Group;
