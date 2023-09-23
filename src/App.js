import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">

      <Router>

        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-in">SignIn</Link>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
