import React from 'react';
import {todosStore} from '../stores/Stores';
import { observer } from '../stores/Context';

const Todos = (props) => {
    console.log("Todos | render", props);
    return (<ul>
        {
            props.todos.map((todo) => {
                <Todo {...todo} />
            });
        }
    </ul>)
}

const Todo = (props) => (<li>{props.name}</li>);

export default observer(Todos, todosStore);
