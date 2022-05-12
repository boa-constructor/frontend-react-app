import { useContext, useState } from 'react';
import { UserContext } from '../contexts/user';
import { postCharacter } from '../utils/api';

const CreateCharacter = () => {
  const user = useContext(UserContext);
  const [character, setCharacter] = useState({
    class: 'Barbarian',
    user_id: `${user.user}`,
    race: 'Dragonborn',
    play_online: false,
    play_offline: false,
  });
  const changeHandler = (e) => {
    setCharacter((currCharacter) => {
      return { ...currCharacter, [e.target.id]: e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    postCharacter(character);
  };

  return (
    <div className="create_char">
      <form id="addchar" onSubmit={submitHandler} className="create_char_form">
        <label htmlFor="character_name" className="char_name">
          Character Name:{' '}
        </label>

        <input
          className="char_name"
          type="text"
          required
          id="character_name"
          onChange={(e) => changeHandler(e)}
        ></input>
        <br></br>
        <br></br>
        <label htmlFor="class">Pick your class: </label>
        <select id="class" onChange={(e) => changeHandler(e)}>
          <option value="Barbarin">Barbarian 😡</option>
          <option value="Bard">Bard 🎼</option>
          <option value="Cleric">Cleric 📿</option>
          <option value="Druid">Druid 🌱</option>
          <option value="Fighter">Fighter ⚔️</option>
          <option value="Monk">Monk ☯</option>
          <option value="Paladin">Paladin 🛡️</option>
          <option value="Ranger">Ranger 🏹</option>
          <option value="Rogue">Rogue 🥷</option>
          <option value="Sorcerer">Sorcerer ✨</option>
          <option value="Warlock">Warlock 👹</option>
          <option value="Wizard">Wizard 🧙‍♂️</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="avatar_url">Avatar URL: </label>
        <input
          type="url"
          id="avatar_url"
          onChange={(e) => changeHandler(e)}
        ></input>
        <br></br>
        <br></br>
        <textarea
          form="addchar"
          defaultValue="About your character..."
          id="About"
          onChange={(e) => changeHandler(e)}
        ></textarea>
        <br></br>
        <br></br>
        <label htmlFor="race">Pick your race: </label>
        <select id="race" onChange={(e) => changeHandler(e)}>
          <option value="Dragonborn">Dragonborn 🐲</option>
          <option value="Dwarf">Dwarf ⛏️</option>
          <option value="Elf">Elf 🧝</option>
          <option value="Gnome">Gnome 🤏</option>
          <option value="Half-Elf">Half-Elf 🧝‍♂️</option>
          <option value="Halfling">Halfling 🍽️</option>
          <option value="Half-Orc">Half-Orc 👹</option>
          <option value="Human">Human 🙋🏻‍♂️</option>
          <option value="Tiefling">Tiefling 😈</option>
        </select>

        <br></br>
        <br></br>
        <fieldset>
          <legend>
            <h3>Online or Face to face games?</h3>
          </legend>
          <div>
            <label htmlFor="GameType">Online</label>

            <input
              type="checkbox"
              id="Online"
              name="about_me"
              onChange={(e) =>
                setCharacter((currCharacter) => {
                  return { ...currCharacter, play_online: e.target.checked };
                })
              }
            ></input>
          </div>
          <div>
            <label htmlFor="GameType">Face to face</label>
            <input
              type="checkbox"
              id="Face_to_face"
              name="face_to_face"
              onChange={(e) =>
                setCharacter((currCharacter) => {
                  return { ...currCharacter, play_offline: e.target.checked };
                })
              }
            ></input>
          </div>
        </fieldset>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateCharacter;
