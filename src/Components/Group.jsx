import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGroupById, getUserProfile } from '../utils/api';

const Group = () => {
  const [group, setGroup] = useState({});
  const [members, setMembers] = useState([]);
  const { group_id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setMembers([])
    getGroupById(group_id)
      .then((group) => {
        setGroup(group);
        setLoading(false)
        group.members.map((member) => {
          return getUserProfile(member).then((profile) => {
            setMembers((currProfiles) => {return [...currProfiles, profile]})
          })
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, [group_id]);
  
  if (loading) return <p> Loading...</p>;
  return (
    <div>
      <h2>{group.group_name}</h2>
      <img src={group.avatar} alt='group avatar' id='group_avatar'></img>
      <p>Group info: {group.game_info}</p>
      {members.length ? (<ul>
        {members.map((member) => {
          return <li key={member.user_id}>{member.username} <img src={`${member.avatar}`} alt="member avatar"></img></li>
        })}
      </ul>): (<p>No members in this group yet!</p>)}
    </div>
  );
};
export default Group;
