import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Tasks from './components/Tasks';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/tasks">Tasks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tasks" element={<Tasks/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
