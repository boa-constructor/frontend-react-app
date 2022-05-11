import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/user";
import { getCharacterByID, getGroupById, getUserProfile } from "../utils/api";
import { addCharacterToGroup, removeCharacterFromGroup } from "../utils/api";

const Character = (req, res) => {
  const { character_id } = useParams();
  const [character, setCharacter] = useState({});
  const [newGroup, setNewGroup] = useState({})
  const [currGroup, setCurrGroup] = useState({})
  const [userGroups, setUserGroups] = useState([])

  const user = useContext(UserContext)
  
  useEffect(() => {
    setUserGroups([])
    getUserProfile(user.user).then((data) => {
      data.groups.forEach((group_id) => {
        getGroupById(group_id)
        .then((data) => {
          setUserGroups((currGroups) => {return [...currGroups, data]})
        })
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    getCharacterByID(character_id)
      .then((data) => {
        setCharacter(data);
        return data
      })
      .then((character) => {
        if(character.group) {
          return getGroupById(character.group)
        }})
      .then((data) => {
        setCurrGroup(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [character_id, newGroup]);

  const addHandler = () => {
    setNewGroup({group_id: userGroups[0].group_id, group_name: userGroups[0].group_name})
    const patchData = {character_id, group_id: userGroups[0].group_id}
    addCharacterToGroup(patchData)
    .then(() => {
      setCurrGroup(newGroup)
    })
    .then(() => {
      setNewGroup({})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const removeHandler = () => {
    const patchData = {character_id, group_id: currGroup.group_id}
    removeCharacterFromGroup(patchData)
    .then(() => {
      setCurrGroup({})
      setNewGroup({})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const games_played = character.games_played;
  return (
    <div className="character-box">
      <div className="character-intro">
        <div className="character-img">
          <img src={character.avatar} alt="avatar for character" />
        </div>
        <div className="character-details">
          <h3>{character.character_name}</h3>
          <h4>Class: {character.class}</h4>
          {currGroup ? <><h4>Group: <Link className="Link" to={`/groups/${character.group}`}>{currGroup.group_name}</Link></h4>
          <button onClick={removeHandler}>Remove from Group</button></>: <>
          <button onClick={addHandler}>Add to Group</button><select></select></>}
          <div>
            <ul>
              {games_played &&
                games_played.map((game) => {
                  return <li key={game}> {game}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="character-background">Hey{character.background}</div>
    </div>
  );
};

export default Character;
