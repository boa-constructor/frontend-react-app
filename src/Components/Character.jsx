import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCharacterByID } from "../utils/api";
const Character = (req, res) => {
  const { character_id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    getCharacterByID(character_id)
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [character_id]);

  const games_played = character.games_played;

  return (
    <div className="character-box">
      <div className="character-intro">
        <div className="character-img">
          <img src={character.avatar} alt="avatar for character" />
        </div>

        <div className="character-details">
          <div>{character.character_name}</div>
          <div>Class: {character.class}</div>
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
      <div className="character-background">{character.background}</div>
    </div>
  );
};

export default Character;
