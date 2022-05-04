import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Components/Header";
import NewCharButton from "./Components/NewCharButton";
import SlimCharCards from "./Components/SlimCharCards";
import CharacterProfile from "./Components/CharacterProfile";
import UserProfile from "./Components/Profile";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
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
