// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState } from 'react';
import { useAuth } from '../contexts/authContext';
// import { admin } from 'firebase';
import { postMessage } from '../utils/api';

// import firebase from 'firebase/compat/app';
const Messaging = () => {
  const { currentUser } = useAuth();
  const [conversationId, setConversationId] = useState('Ro0nddMW5r1lOqISKUP2');

  //   const messagesRef = firebase
  //     .firestore()
  //     .collection('Messages')
  //     .doc(`${conversationId}`)
  //     .collection('Conversation');

  //   const query = messagesRef.orderBy('created_at').limit(10);
  //   const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  const messages = [];
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = currentUser;
    postMessage({
      text: formValue,
      user_id: uid,
      conversation_id: conversationId,
    });

    setFormValue('');
  };

  function ChatMessage(props) {
    const { text, uid } = props.message;

    // This will distinguish between messages sent and received by comparing the user id on the firestore cloud thing
    // current user who logged in and authenticated their stuff in Google
    const messageClass = uid === currentUser.uid ? 'sent' : 'received';

    return (
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    );
  }

  return (
    <div className="messaging_container">
      <div className="view_messages">
        <p>test</p>
      </div>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </main>

      <form onSubmit={sendMessage}>
        <input
          className="text_field"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          Send message
        </button>
      </form>
    </div>
  );
};

export default Messaging;
