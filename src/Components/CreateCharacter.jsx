const CreateCharacter = () => {
    const submitHandler = () => {}
    return (
        <div>
    <form id="addchar">
        <label htmlFor="CharName">Character Name: </label>
        <input type="text" required id="CharName"></input>
        <label htmlFor="class">Pick your class: </label>
        <select id="class">
          <option value="Barbarin">Barbarian 😡</option>
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
        <label htmlFor="url">Avatar URL: </label>
        <input type="url" id="url"></input>
        <br></br>
        <textarea form="addchar" defaultValue="About your character..."></textarea>
        <br></br>
        <button>Submit</button>
    </form>
    </div>
    )
}

export default CreateCharacter