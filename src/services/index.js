import { todosStore } from '../stores/Stores';

const retrieveTodos = () => {
    todosStore.todos = List([
        { id: 1, name: "Breakfirst" },
        { id: 2, name: "Meeting" },
    ])
}

export { retrieveTodos };