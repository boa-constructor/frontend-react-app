import React, { useEffect } from "react";
import {useState} from "react"
import {Link} from "react-router-dom"
const GetCharactersList = () => {
  const [charList, getCharList] = useState([{name: "Ghank", class: "Barbarin 😡", username: "Will Mason"},
  {name: "Nivuth", class: "Ranger 🏹", username: "Ali Combes"},
  {name: "Hrirr", class: "Barbarin 😡", username: "Nick Wooton"},
  {name: "Thamkk", class: "Monk ☯", username: "James Barlow"},
  {name: "Goth", class: "Druid 🌱", username: "Sheroze Mohammed"},
  {name:"Thazulk", class: "Warlock 👹", username: "Sam P"}])
  useEffect(() => {
    //space for get char list endpoint
  })
  return (
    <ul className="charList">
      {charList.map((char) => {
        return <li><Link to="/" className="Link">Name: {char.name}</Link><br></br> Class: {char.class}, Username: {char.username}</li>
      })}
    </ul>

  );
};
export default GetCharactersList;
