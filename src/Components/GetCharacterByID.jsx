import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacterByID, getCharacters } from '../utils/api';

const GetCharacterByID = (props) => {
  const [char, setChar] = useState([]);
  useEffect(() => {
    getCharacterByID(props.id)
      .then((data) => {
        setChar(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  return (
    <>
      {' '}
      <ul className="charList">
        <li key={char.character_id}>
          <Link to={`/characters/${props.id}`} className="Link">
            Name: {char.character_name}
          </Link>
          <br></br> Class: {char.class}
          <br></br>
          <img src={`${char.Avatar}`} alt="Avatar Pic"></img>
        </li>
      </ul>
    </>
  );
};

export default GetCharacterByID;
