import { useEffect, useState } from 'react';
import CreateGroup from './CreateGroup';
import { getUserProfile, getGroupById } from '../utils/api';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const { currentUser } = useAuth();

  const [newGroup, setNewGroup] = useState({
    characters: [],
    dm: currentUser.uid,
    user_id: currentUser.uid,
    group_name: '',
    avatar: '',
    game_type: '',
    game_info: '',
    groups: []
  });

  useEffect(() => {
    setGroups([]);
    getUserProfile(currentUser.uid)
      .then((data) => {
        data.groups.forEach((group_id) => {
          getGroupById(group_id).then((data) => {
            data.group_id = group_id;
            setGroups((currGroups) => {
              return [...currGroups, data];
            });
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newGroup, currentUser.uid]);
  return (
    <div>
      <ul className='groups_list'>
        {groups.map((group) => {
          console.log(group)
          return (
            <li key={group.group_id} className='group_card'>
            <div class="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
              <div class="profile w-full flex m-3 ml-4 text-white">
                <img class="w-28 h-28 p-1 bg-white rounded-full" src={`${group.avatar}`} alt=""/>
                <div class="title mt-11 ml-3 font-bold flex flex-col">
                  <div class="name break-words text-black">{group.group_name}</div>
                  <div class="name break-words text-black">Members: {group.members.length}</div>
                  <div class="add font-semibold text-sm italic dark"></div>
                </div>
              </div>
              <div class="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                <Link to={`/groups/${group.group_id}`}>       
                <div class="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">See More</div>
                </Link>
              </div>
            </div>
            </li>
          );
        })}
      </ul>
      <br></br>
      <CreateGroup newGroup={newGroup} setNewGroup={setNewGroup} />
    </div>
  );
};

export default Groups;

