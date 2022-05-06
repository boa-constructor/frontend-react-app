import GetCharactersList from "./GetCharactersList"
import NavBar from "./NavBar"
const Home = ({user}) => {
    return (
    <div>
        {user ? (
    <GetCharactersList />
        ) : (
          <p></p>
        )}
    </div>
    )
}

export default Home