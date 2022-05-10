import { useState, useEffect } from 'react';

const CreateGroup = () => {
  const [newGroup, setNewGroup] = useState([]);

  return (
    <div>
      <form>
        <label htmlFor="group_name">Group Name:</label>
        <input
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
              return { ...currNewGroup, avatar_url: e.target.value };
            })
          }
        />
        <label htmlFor="game_info">Game Information:</label>
        <textarea
          name="game_information"
          type="textarea"
          onChange={(e) =>
            setNewGroup((currNewGroup) => {
              return { ...currNewGroup, game_information: e.target.value };
            })
          }
        />
        <button>Create Group</button>
      </form>
    </div>
  );
};

export default CreateGroup;
