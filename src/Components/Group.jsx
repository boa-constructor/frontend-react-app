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
    <div className='pt-8 bg-slate-500 min-h-screen'>
      <div className='relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-xl rounded-lg mt-8 w-1/2 mx-auto'>

      <br></br>
      <h2 className='groupname'>{group.group_name}</h2>
      <img src={group.avatar} alt='group avatar' id='group_avatar' className='groupimg'></img>
      <p>Game type: {group.game_type}</p>
      <p>Group info: {group.game_info}</p>
      {members.length ? (<ul id='memberlist'>
        Group Members:
        {members.map((member) => {
          return <li key={member.user_id} className="member">{member.username}</li>
        })}
      </ul>): (<p>No members in this group yet!</p>)}
        </div>
    </div>
  );
};
export default Group;
