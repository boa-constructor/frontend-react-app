import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/user';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { postMessage } from '../utils/api';

const firestore = firebase.firestore();

const ChatRoom = () => {
	// const [messages, setMessages] = useState([]);
	const [formValue, setFormValue] = useState('');
	const { user } = useContext(UserContext);

	const messagesRef = firestore.collection(
		'Groups/KPiPmS2MNGrBO26PQNCb/Messages'
	);
	const group_id = `KPiPmS2MNGrBO26PQNCb`;
	const query = messagesRef.orderBy('created_at').limit(10);
	const [messages] = useCollectionData(query, { idField: 'user_id' });

	const sendMessage = async (e) => {
		e.preventDefault();

		postMessage(
			{
				msg: formValue,
				created_at: firebase.firestore.FieldValue.serverTimestamp(),
				user_id: user,
			},
			group_id
		);
		setFormValue('');
	};

	return (
		<div>
			Messages section
			<main>{messages && messages.map((msg) => msg.msg)}</main>
			<form onSubmit={sendMessage}>
				<input
					type='text'
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
					placeholder='Start saying something...'
				/>
				<button type='submit' disabled={!formValue}>
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatRoom;
