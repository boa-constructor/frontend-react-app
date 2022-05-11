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
            <br></br> Online: {char.play_online}
            <br></br> Offline: {char.play_offline}
            <img src={`${char.avatar_url}`} alt="Avatar Pic"></img>
          </li>
        );
      })}
    </ul>
  );
};
export default GetCharactersList;
