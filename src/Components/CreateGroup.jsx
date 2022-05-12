import { useState, useContext } from 'react';
import { createGroup } from '../utils/api';
import { UserContext } from '../contexts/user';

const CreateGroup = ({ setGroups }) => {

  const { user } = useContext(UserContext);

  const [newGroup, setNewGroup] = useState({
    characters: [],
    dm: user,
    user_id: user,
    group_name: '',
    avatar: '',
    game_type: '',
    game_info: '',
  });

  const submissionHandler = (e) => {
    e.preventDefault();
    createGroup(newGroup).then((group_id) => {
      newGroup.group_id = group_id;
      setGroups((currGroups) => {
        return [...currGroups, newGroup];
      });
    });

    setNewGroup({
      characters: [],
      dm: user,
      user_id: user,
      group_name: '',
      avatar: '',
      game_type: '',
      game_info: '',
    });
  };

  return (
    <div>
      <form onSubmit={submissionHandler} className="create_group_form">
        <label htmlFor="group_name">Group Name:</label>
        <input
          required
          type="text"
          value={newGroup.group_name}
          name="group_name"
          onChange={(e) =>
            setNewGroup((currNewGroup) => {
              return { ...currNewGroup, group_name: e.target.value };
            })
          }
        />
        <br></br>
        <label htmlFor="group_avatar">Group Avatar:</label>
        <input
          name="group_avatar"
          type="url"
          value={newGroup.avatar}
          onChange={(e) =>
            setNewGroup((currNewGroup) => {
              return { ...currNewGroup, avatar: e.target.value };
            })
          }
        />
        <br></br>
        <label htmlFor="game_info">Game Information:</label>
        <textarea
          required
          value={newGroup.game_info}
          name="game_info"
          type="textarea"
          onChange={(e) =>
            setNewGroup((currNewGroup) => {
              return { ...currNewGroup, game_info: e.target.value };
            })
          }
        />
        <div
          value={newGroup.game_type}
          onChange={(e) =>
            setNewGroup((currNewGroup) => {
              return { ...currNewGroup, game_type: e.target.value };
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
