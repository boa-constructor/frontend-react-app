import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  const [userGroups, setUserGroups] = useState([]);
  const [showUserGroupsList, setShowUserGroupsList] = useState(false);
  const clickHandler = () => {
    setShowUserGroupsList(true);
  };
  useEffect(() => {});
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
    <ul>
      {userList.map((user) => {
        return (
          <li key={user.user_id}>
            <h2>{user.username}</h2>
            <img src={`${user.avatar}`} />
            <button onClick={clickHandler}>add to group</button>
            <ul>
              {showUserGroupsList &&
                userGroups.map((group) => {
                  return <li>{group}</li>;
                })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
