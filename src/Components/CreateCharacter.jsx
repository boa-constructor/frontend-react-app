import { useContext, useState } from 'react';
import { UserContext } from '../contexts/user';
import { postCharacter } from '../utils/api';

const CreateCharacter = () => {
  const user = useContext(UserContext);
  const [character, setCharacter] = useState({
    class: 'Barbarian',
    user_id: `${user.user}`,
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
    <div>
      <form id="addchar" onSubmit={submitHandler}>
        <label htmlFor="character_name">Character Name: </label>
        <input
          type="text"
          required
          id="character_name"
          onChange={(e) => changeHandler(e)}
        ></input>
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
        <label htmlFor="avatar_url">Avatar URL: </label>
        <input
          type="url"
          id="avatar_url"
          onChange={(e) => changeHandler(e)}
        ></input>
        <br></br>
        <textarea
          form="addchar"
          defaultValue="About your character..."
          id="About"
          onChange={(e) => changeHandler(e)}
        ></textarea>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateCharacter;
