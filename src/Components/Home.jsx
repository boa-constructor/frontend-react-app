import GetCharactersList from "./GetCharactersList"
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