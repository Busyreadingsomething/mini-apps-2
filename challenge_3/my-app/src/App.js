import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoardContainer from './components/containers/BoardContainer';
import MessageContainer from './components/containers/MessageContainer';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="game-container">
      <BoardContainer />
      <MessageContainer />
    </div>
  </div>
);

export default App;
