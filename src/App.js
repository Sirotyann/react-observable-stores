import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { context } from './stores/Context';
import Todos from './components/Todos';
import service from './services';

class App extends Component {
  constructor(props) {
    super(props);
    service.retrieveTodos();
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => {
          service.addTodo();
        }}>Add Random Todo</button>
        <div>
          <Todos />
        </div>
      </div>
    );
  }
}

export default context(App);
