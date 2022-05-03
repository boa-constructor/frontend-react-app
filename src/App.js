import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Header from "./Components/Header";
import LogInLogOut from "./Components/Log-in-out";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import NewCharacter from "./Components/NewCharacter";
import NewCharButton from "./Components/NewCharButton";
function App() {
  return (
    <div className="App">
      <Header />
      <LogInLogOut />
      <Signup />
      <Login />
      <NewCharButton />
      <NewCharacter />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
