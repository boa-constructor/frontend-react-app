import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Components/Header";
import SlimCharCards from "./Components/SlimCharCards";
import CharacterProfile from "./Components/CharacterProfile";
import UserProfile from "./Components/Profile";
import Nav from "./Components/Nav";
import SignUpPage from "./Components/SignUpPage";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <SignUpPage />
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
