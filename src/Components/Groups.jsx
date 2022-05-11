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
			<ul className='groups_list'>
				{groups.map((group) => {
					console.log(group, '<< group');
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
			<CreateGroup />
		</div>
	);
};

export default Groups;
