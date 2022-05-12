import { useState, useContext } from 'react';
import { createGroup } from '../utils/api';

const CreateGroup = ({newGroup, setNewGroup}) => {

  const { user } = useContext(UserContext);
  const [inputGroup, setInputGroup] = useState({})
  const submissionHandler = (e) => {
    e.preventDefault();
    createGroup(newGroup).then((group_id) => {

      setNewGroup({...inputGroup, group_id, user_id: user})
    })

  };
  return (
    <div>
      <form onSubmit={submissionHandler} className="create_group_form">
        <label htmlFor="group_name">Group Name:</label>
        <input
          required
          type="text"
          value={inputGroup.group_name}
          name="group_name"
          onChange={(e) =>
            setInputGroup((currInputGroup) => {
              return { ...currInputGroup, group_name: e.target.value };
            })
          }
        />
        <br></br>
        <label htmlFor="group_avatar">Group Avatar:</label>
        <input
          name="group_avatar"
          type="url"
          value={inputGroup.avatar}
          onChange={(e) =>
            setInputGroup((currInputGroup) => {
              return { ...currInputGroup, avatar: e.target.value };
            })
          }
        />
        <br></br>
        <label htmlFor="game_info">Game Information:</label>
        <textarea
          required
          value={inputGroup.game_info}
          name="game_info"
          type="textarea"
          onChange={(e) =>
            setInputGroup((currInputGroup) => {
              return { ...currInputGroup, game_info: e.target.value };
            })
          }
        />
        <div
          value={inputGroup.game_type}
          onChange={(e) =>
            setInputGroup((currInputGroup) => {
              return { ...currInputGroup, game_type: e.target.value };
            })
          }
        >
          <label htmlFor="game_type">Game type:</label>
          <input type="radio" name="game_type" value="Online" required />
          Online
          <input type="radio" name="game_type" value="Offline" required />
          Offline
        </div>
        <button type="submit">Create Group</button>
      </form>
    </div>
  );
};

export default CreateGroup;
