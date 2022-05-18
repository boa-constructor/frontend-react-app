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
      These are your current groups
      <ul className='groups_list'>
        {groups.map((group) => {
          return (
            <li key={group.group_id} className='group_card'>
              <Link to={`/groups/${group.group_id}`} className='Link'>
                {group.group_name}
              </Link>
              <img src={`${group.avatar_url}`} alt='Group Avatar'></img>
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
