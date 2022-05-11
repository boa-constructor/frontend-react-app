import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	getGroupById,
	getCharactersFromGroup,
	getCharacterByID,
} from '../utils/api';

const Group = () => {
	const [group, setGroup] = useState({});
	const [characters, setCharacters] = useState([]);
	const { group_id } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getGroupById(group_id)
			.then((group) => {
				setGroup(group);
				setLoading(false);
				group.characters.forEach((character_id) => {
					getCharacterByID(character_id).then((character) => {
						character.character_id = character_id;
						setCharacters((currCharacters) => {
							return [...currCharacters, character];
						});
					});
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	if (loading) return <p> Loading...</p>;

	return (
		<div>
			Group Section
			<h2>{group.group_name}</h2>
			<img src={group.avatar_url} alt='group avatar'></img>
			<h3>Dungeon Master: {group.dm}</h3>
			<p>Group info: {group.game_info}</p>
			{characters.length && (
				<ul>
					{characters.map((character) => {
						return (
							<li key={character.character_id}>
								<p>{character.character_name}</p>
								<img src={character.avatar_url} alt='character avatar'></img>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
export default Group;
