import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../utils/api';

const GetCharactersList = () => {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setCharList(data);
        console.table(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul className="charList">
      {charList.map((char) => {
        return (
          <li key={char.character_id} className="char_cards">
            <Link to={`/characters/${char.character_id}`} className="Link">
              Name: {char.character_name}
            </Link>
            <br></br> Class: {char.class}
            <br></br> Race: {char.race}
            <br></br>
            {/* {char.play_online === true && <p>Can play online</p>}
            {char.play_offline === true && <p>Can play offline</p>} */}
            <br></br> Online:{char.play_online === true ? <p>✔️</p> : <p>✖️</p>}
            <br></br> Offline:
            {char.play_offline === true ? <p>✔️</p> : <p>✖️</p>}
            <br></br>
            <img src={`${char.avatar_url}`} alt="Avatar Pic"></img>
          </li>
        );
      })}
    </ul>
  );
};
export default GetCharactersList;
