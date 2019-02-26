import React, { Component } from 'react';
import './App.css';
import { context } from './stores/Context';
import Todos from './components/Todos';
import Contacts from './components/Contacts';
import service from './services';

class App extends Component {
  constructor(props) {
    super(props);
    service.retrieveTodos();
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <TodoPanel />
          <ContactsPanel />
        </div>
      </div>
    );
  }
}

const TodoPanel = () => (<div>
  <button onClick={() => {
    service.addTodo();
  }}>
    Add Random Todo
  </button>
  <div>
    <Todos />
  </div>
</div>);

const ContactsPanel = () => (<div>
  <button onClick={() => {
    service.loadContacts();
  }}>
    Load Contacts
  </button>
  <div>
    <Contacts />
  </div>
</div>);

export default context(App);
