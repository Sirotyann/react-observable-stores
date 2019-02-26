import { List } from 'immutable';
import { todosStore } from '../stores/Stores';
import { contactsReducer, ActionTypes } from '../stores/Reducers';

const retrieveTodos = () => {
    todosStore.todos = List([
        { id: 1, name: "Breakfirst" },
        { id: 2, name: "Meeting" },
    ])
}

const addTodo = () => {
    const now = new Date();
    todosStore.todos = [...todosStore.todos, { id: now.getTime(), name: `A todo created at ${now.getHours()}:${now.getSeconds()}` }];
}

const defaultContacts = [
    { id: 1, name: "Cheng", num: "567890" },
    { id: 2, name: "Kiran", num: "234567" },
    { id: 3, name: "Giovanni", num: "98765" },
]
const loadContacts = () => {
    console.log("service | loadContacts", defaultContacts);
    contactsReducer.dispatch({ type: ActionTypes.LOAD_CONTACTS, payload: defaultContacts });
}

const removeContact = (id) => {
    console.log("service | removeContact", id);
    contactsReducer.dispatch({ type: ActionTypes.REMOVE_CONTACT, payload: id });
}

export default { retrieveTodos, addTodo, loadContacts, removeContact };