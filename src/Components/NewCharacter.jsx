import React from "react";

const NewCharacter = () => {
  return (
    <div className="NewCharacter">
      <form input="charactercreate">
        <label htmlFor="CharName" value="charname">
          Character Name:
        </label>
        <input type="text" required></input>

        <label htmlFor="CharClass" value="class">
          Password (8 characters minimum):
        </label>
        <input type="password" minLength="8" required></input>
        <label htmlFor="class">Pick your class:</label>
        <select name="classes" id="class">
          <option value="Barbarin">Barbarin 😡</option>
          <option value="Bard">Bard 🎼</option>
          <option value="Cleric">Cleric 📿</option>
          <option value="Druid">Druid 🌱</option>
          <option value="Fighter">Fighter ⚔️</option>
          <option value="Monk">Monk ☯</option>
          <option value="Paladin">Paladin 🛡️</option>
          <option value="Ranger">Ranger 🏹</option>
          <option value="Rouge">Rouge 🥷</option>
          <option value="Sorcerer">Sorcerer ✨</option>
          <option value="Warlock">Warlock 👹</option>
          <option value="Wizard">Wizard 🧙‍♂️</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewCharacter;
