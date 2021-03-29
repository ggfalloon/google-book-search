import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <h4>Search for and Save Books of Interest</h4>
      </Jumbotron>

    </Router>
  );
}

export default App;

