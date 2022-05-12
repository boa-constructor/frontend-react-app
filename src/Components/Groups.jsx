import { useEffect, useState, useContext } from 'react';
import CreateGroup from './CreateGroup';
import { UserContext } from '../contexts/user';
import { getUserProfile, getGroupById } from '../utils/api';
import { Link } from 'react-router-dom';

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setGroups([]);
    getUserProfile(user)
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
  }, []);

  return (
    <div>
      These are your current groups
      <ul className="groupsList">
        {groups.map((group) => {
          return (
            <li key={group.group_id} className="groupsList_item ">
              <Link
                className="groupsList_text Link"
                to={`/groups/${group.group_id}`}
              >
                {group.group_name}
              </Link>
              <img
                className="groupsList_img"
                src={`${group.avatar}`}
                alt="Group Avatar"
              ></img>
            </li>
          );
        })}
      </ul>
      <br></br>
      <CreateGroup setGroups={setGroups} />
    </div>
  );
};

export default Groups;
