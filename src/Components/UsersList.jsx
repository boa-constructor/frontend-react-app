import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

const UsersList = () => {
  const [userList, setUserList] = useState([]);

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
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
