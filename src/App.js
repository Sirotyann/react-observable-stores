import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { context } from './stores/Context';
import Todos from './components/Todos';
import { retrieveTodos } from './services';

class App extends Component {
  constructor(props) {
    super(props);
    retrieveTodos.retrieveTodos();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <Todos />
        </div>
      </div>
    );
  }
}

export default context(App);
