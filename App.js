import {useState} from "react";
import Login from "./login.js";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import TestPage from './testpage.js';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <Routes>
          <Route path ="/" element = {user ? <Navigate to="/testpage"/>:<Login setUser={setUser}/>}/>
          <Route path="/testpage" element = {user ? <TestPage /> : <Navigate to="/login" />}/>
          <Route path="/login" element = {user ? <TestPage /> : <Navigate to="/" />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
