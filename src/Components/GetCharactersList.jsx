import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../utils/api';

const GetCharactersList = () => {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul className="charList">
      {charList.map((char) => {
        return (
          <li className="charList_card" key={char.character_id}>
            <Link
              className="charList_link"
              to={`/characters/${char.character_id}`}
            >
              <section className="charList_text">
                Name: {char.character_name}
                <p className="charList_class">Class: {char.class}</p>
              </section>

              <img
                className="charList_img"
                src={`${char.avatar_url}`}
                alt="Avatar Pic"
              ></img>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default GetCharactersList;
