// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import {
  getMessagesByConversationId,
  postMessageToConversationId,
} from '../utils/api';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import {
  connectFirestoreEmulator,
  getFirestore,
  useCollectionData,
} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyB69WIWau0OsUGMqTPDA5jJs6NMsEncGR4',
  authDomain: 'dndinder-68dcc.firebaseapp.com',
  databaseURL:
    'https://dndinder-68dcc-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'dndinder-68dcc',
  storageBucket: 'dndinder-68dcc.appspot.com',
  messagingSenderId: '887332428606',
  appId: '1:887332428606:web:fd999c4c18be4c0d106a6f',
  measurementId: 'G-V4QQMW9LBW',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
connectFirestoreEmulator(db, 'localhost', 4002);

// const listener = onSnapshot(doc(db, 'Messages', 'Conversation'), (doc) => {
//   console.log(doc);
//   console.log('Current data:', doc.data());
// });

//  function getUsers(async(req, res, db) => {
//   console.log('clicked');
//   cors(req, res, async () => {
//     const usersCol = collection(db, 'Users');
//     const usersSnapshot = await getDocs(usersCol);
//     const usersList = usersSnapshot.docs.map((doc) => {
//       doc.data();
//       console.log(usersList, '<<<');
//       return usersList;
//   });
//     })
//  }

// const doc = db.collection('Users').doc('9CoUOLOxC4jf1Ug4lsv9');

// const observer = doc.onSnapshot(
//   (docSnapshot) => {
//     console.log(`Received doc snapshot: ${docSnapshot}`);
//   },
//   (err) => {
//     console.log(`${err}`);
//   }
// );

const Messaging = () => {
  const { currentUser } = useAuth();
  const [allMessages, setAllMessages] = useState([]);

  const [conversationId, setConversationId] = useState('0IKPrj30o8giJXvaWi8I');

  //   const messagesRef = firebase
  //     .firestore()
  //     .collection('Messages')
  //     .doc(`${conversationId}`)
  //     .collection('Conversation');

  //   const query = messagesRef.orderBy('created_at').limit(10);
  //   const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  const messages = [];

  const messagesRef = firestore.collection('Messages');
  const query = messagesRef.orderBy('created_at').limit(25);

  const [chatMessages] = useCollectionData(query, { idField: 'id' });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = currentUser;
    postMessageToConversationId(
      {
        text: formValue,
        user_id: uid,
      },
      conversationId
    );

    setFormValue('');
  };

  useEffect(() => {
    getMessagesByConversationId(conversationId)
      .then((data) => {
        setAllMessages(data);
        console.log(data, 'this is data');
      })

      .catch((err) => {
        console.error(err);
      });
  }, []);

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
        <ul className="message_list">
          {allMessages.map((message) => {
            {
              console.log(message, '<<<<');
            }
            return (
              <li className="single_message" key={message.user_id}>
                {message.message_content}
              </li>
            );
          })}
        </ul>
      </div>
      {/* <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </main> */}

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
