import { useState, useEffect, useContext } from 'react';
import { createGroup } from '../utils/api';
import { UserContext } from '../contexts/user';
const CreateGroup = () => {
  const { user } = useContext(UserContext);

  const [newGroup, setNewGroup] = useState({
    characters: [],
    dm: user,
  });

  const submissionHandler = (e) => {
    e.preventDefault();
    createGroup(newGroup);
  };

  return (
    <div>
      <form onSubmit={(e) => submissionHandler(e)}>
        <label htmlFor="group_name">Group Name:</label>
        <input
          required
          type="text"
          name="group_name"
          onChange={(e) =>
            setNewGroup((currNewGroup) => {
              return { ...currNewGroup, group_name: e.target.value };
            })
          }
        />
        <label htmlFor="group_avatar">Group Avatar:</label>
        <input
          name="group_avatar"
          type="url"
          onChange={(e) =>
            setNewGroup((currNewGroup) => {
              return { ...currNewGroup, avatar: e.target.value };
            })
          }
        />
        <label htmlFor="game_info">Game Information:</label>
        <textarea
          name="game_information"
          type="textarea"
          onChange={(e) =>
            setNewGroup((currNewGroup) => {
              return { ...currNewGroup, game_info: e.target.value };
            })
          }
        />
        <button>Create Group</button>
      </form>
    </div>
  );
};

export default CreateGroup;
