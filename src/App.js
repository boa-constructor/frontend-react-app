import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Components/Header";
import LogInLogOut from "./Components/Log-in-out";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import NewCharacter from "./Components/NewCharacter";
import NewCharButton from "./Components/NewCharButton";
import SlimCharCards from "./Components/SlimCharCards";
import CharacterProfile from "./Components/CharacterProfile";
import UserProfile from "./Components/Profile";
function App() {
  return (
    <div className="App">
      <Header />
      <LogInLogOut />
      <Signup />
      <Login />
      <NewCharButton />
      <NewCharacter />
      <SlimCharCards />
      <CharacterProfile />
      <UserProfile />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
