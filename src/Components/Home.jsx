import GetCharactersList from './GetCharactersList';
import { useAuth } from '../contexts/authContext';
const Home = () => {
  const { currentUser } = useAuth();
  return <div>{currentUser ? <GetCharactersList /> : <p></p>}</div>;
};

export default Home;
