import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacterByID } from '../utils/api';

const GetCharacterByID = (props) => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    getCharacterByID(props.id)
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  return (
    <>
      {' '}
      <ul className="charList">
        <li key={character.character_id}>
          <Link to={`/characters/${props.id}`} className="Link">
            Name: {character.character_name}
          </Link>
          <br></br> Class: {character.class}
          <br></br>
          <img src={`${character.avatar_url}`} alt="Avatar Pic"></img>
        </li>
      </ul>
    </>
  );
};

export default GetCharacterByID;
