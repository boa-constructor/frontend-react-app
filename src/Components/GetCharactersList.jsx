import React, { useEffect } from "react";
import {useState} from "react"
import {Link} from "react-router-dom"
import { getCharList } from "../utils/api";

const GetCharactersList = () => {
  const [charList, setCharList] = useState([])

  useEffect(() => {
    getCharList().then((data) => {
      console.log(data)
      setCharList(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <ul className="charList">
      {charList.map((char) => {
        return <li key={char.character_id}><Link to={`/characters/${char.character_id}`} className="Link">Name: {char.character_name}</Link><br></br> Class: {char.class}<br></br><img src={`${char.Avatar}`} alt="Avatar Pic"></img></li>
      })}
    </ul>

  );
};
export default GetCharactersList;
