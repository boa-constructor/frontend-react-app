import { useEffect, useState } from 'react';
import {
  getUsers,
  getUserProfile,
  getGroupById,
  addUserToGroup,
} from '../utils/api';
import { useAuth } from '../contexts/authContext';
import PopUpGroups from './PopUpGroups';

const UsersList = () => {
  const { currentUser } = useAuth();
  const [userList, setUserList] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [showUserGroupsList, setShowUserGroupsList] = useState(false);
  const [filter, setFilter] = useState(null);

  const changeHandler = (e) => {
    setFilter(e.target.value);
  };

  const addGroupHandler = (group_id, user_id) => {
    addUserToGroup({ group_id, user_id });
  };

  const clickHandler = () => {
    setShowUserGroupsList(true);
  };
  useEffect(() => {
    setUserGroups([]);
    getUserProfile(currentUser.uid).then((user) => {
      user.groups.map((group_id) => {
        return getGroupById(group_id).then((group) => {
          setUserGroups((currentGroups) => {
            return [...currentGroups, group];
          });
        });
      });
    });
  }, [currentUser.uid]);

  useEffect(() => {
    getUsers(filter)
      .then((data) => {
        setUserList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filter]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <label htmlFor='filter'>Filter by</label>
      <select name='filter' id='filter' onChange={changeHandler}>
        <option value='null'>all users</option>
        <option value='online'>online games</option>
        <option valye='offline'>offline games</option>
      </select>

      <ul id='userlist'>
        {userList.length ? (
          userList.map((user) => {
            return (
              <li key={user.user_id}>
                <h2>{user.username}</h2>
                <img src={`${user.avatar}`} alt='user avatar' />
                <button onClick={clickHandler}>add to group</button>
                <PopUpGroups
                  trigger={showUserGroupsList}
                  setTrigger={setShowUserGroupsList}
                >
                  <ul>
                    {userGroups.map((group) => {
                      return (
                        <button
                          onClick={() =>
                            addGroupHandler(group.group_id, user.user_id)
                          }
                        >
                          {group.group_name}
                        </button>
                      );
                    })}
                  </ul>
                </PopUpGroups>
              </li>
            );
          })
        ) : (
          <p>sorry, no users fit your criteria</p>
        )}
      </ul>
    </div>
  );
};

export default UsersList;
