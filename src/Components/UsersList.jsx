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
  const [filter, setFilter] = useState("null");

  const changeHandler = (e) => {
    setFilter(e.target.value);
  };

  const addGroupHandler = (group_id, user_id) => {
    addUserToGroup({ group_id, user_id });
    setShowUserGroupsList(false)
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
            console.log(user)
            return (
              <li key={user.user_id}>
                <div class="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
              <div class="profile w-full flex m-3 ml-4 text-white">
                <img class="w-28 h-28 p-1 bg-white rounded-full" src={`${user.avatar_url}`} alt=""/>
                <div class="title mt-11 ml-3 font-bold flex flex-col">
                  <div class="name break-words text-black">{user.username}
                  <br></br>
                  Game Type: {user.play_online ? ("online"):("offline")}
                  <br></br>
                  DM: {user.is_dm ? ("yes"):("no")}
                  </div>
                  <div class="add font-semibold text-sm italic dark"></div>
                </div>
              </div>
              <div class="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">   
                <div class="add border rounded-l-2xl rounded-r-sm border-gray-300 px-4 cursor-pointer hover:bg-gray-700 hover:text-white w-[100px] p-1"><button onClick={clickHandler}>add</button></div>
              </div>
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
                          className="bg-gradient-to-r from-pink-600 w-40 bg-red-500 p-2 px-3 text-lg  hover:bg-red-600 duration-300 hover:scale-110 rounded-md"
                        >
                          add to {group.group_name}
                        </button>
                      );
                    })}
                  </ul>
                </PopUpGroups>
            </div>
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
