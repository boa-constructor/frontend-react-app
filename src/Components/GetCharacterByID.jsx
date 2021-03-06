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
      <Link to={`/characters/${props.id}`} className='Link'>
        {character.character_name}
      </Link>
      <p>test</p>
      <br></br> Class: {character.class}
      <br></br>
      <img
        src={`${character.avatar_url}`}
        alt='Avatar Pic'
        className='character_images_by_id'
      ></img>
    </>
  );
};

export default GetCharacterByID;
