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
    getUsers()
      .then((data) => {
        setUserList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul id='userlist'>
      {userList.map((user) => {
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
      })}
    </ul>
  );
};

export default UsersList;
