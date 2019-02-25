import { List } from 'immutable';
import { todosStore } from '../stores/Stores';

const retrieveTodos = () => {
    todosStore.todos = List([
        { id: 1, name: "Breakfirst" },
        { id: 2, name: "Meeting" },
    ])
}

const addTodo = () => {
    const now = new Date();
    todosStore.todos = [...todosStore.todos, {id: now.getTime(), name: `A todo created at ${now.getHours()}:${now.getSeconds()}`}];
}


export default { retrieveTodos, addTodo };