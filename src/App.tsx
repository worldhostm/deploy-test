import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe';
import MenuLayout from './common/menuLayout';
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom';

const App=()=>{
  return (
    <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<AboutMe />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
