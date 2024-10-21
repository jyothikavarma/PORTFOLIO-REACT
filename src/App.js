import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/contact';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import Game from './components/game';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
       
          <Route path="/" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/game" element={<Game />} />
        
        </Routes>
      </div>
    </Router>

  );
}

export default App;
