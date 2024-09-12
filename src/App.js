import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import { useState } from 'react';
import {signOut} from 'firebase/auth';
import { auth } from './firebase-config';


function App() {

  const [isAuth, setIsAuth]=useState(localStorage.getItem("isAuth"));
  
  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.removeItem("isAuth");
      setIsAuth(false);
      window.location.pathname="/login"
      


    
    })

  }

  


  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          
          {!isAuth ? <Link to="/Login">Login</Link>:<><Link to="/create-post">Create Post</Link>
          <button onClick={signUserOut}>Log Out </button></>}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/create-post" element={<CreatePost isAuth={isAuth} />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
