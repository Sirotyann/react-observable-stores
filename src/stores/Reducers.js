
import { List } from 'immutable';
import createReducer from './ReducerFactory';

const ActionTypes = {
    'LOAD_CONTACTS': Symbol(),
    'REMOVE_CONTACT': Symbol()
}

const contactsReducer = createReducer({
    contacts: new List()
}, (action, state) => {
    console.log("contactsReducer | dispatch", action);
    let data;
    switch (action.type) {
        case ActionTypes.LOAD_CONTACTS:
            data = { ...state, ...{ contacts: List(action.payload) } };
            return data;
        case ActionTypes.REMOVE_CONTACT:
            const index = state.contacts.findIndex((it) => (it.id === action.payload));
            data = { ...state, ...{ contacts: state.contacts.delete(index) } };
            return data;
        default:
            return state;
    }

});

export { contactsReducer, ActionTypes };