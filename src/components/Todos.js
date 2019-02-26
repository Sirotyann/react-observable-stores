import React from 'react';
import { todosStore } from '../stores/Stores';
import { observer } from '../stores/Context';

const Todos = (props) => {
    console.log("[Todos].render");
    const todos = props ? props.todos : [];
    return (<ul className="todos">
        {
            todos.map((todo) => <Todo key={todo.id} {...todo} />)
        }
    </ul>);
}

// class Todos extends React.PureComponent {
//     // shouldComponentUpdate(nextProps, nextState) {
//     //     console.log(`[Todos] nextProps==props :: ${nextProps == this.props}`);
//     //     return nextProps != this.props;
//     // }
//     render() {
//         console.log(`[Todos].render`);
//         const todos = this.props.todos ? this.props.todos : [];
//         return (<ul className="todos">
//             {
//                 todos.map((todo) => <Todo key={todo.id} {...todo} />)
//             }
//         </ul>);
//     }
// }

const Todo = (props) => (<li>{props.name}</li>);

export default observer(Todos, todosStore);
