import createStore from './StoreFactory';

const createReducer = (defaultData, _dispatch) => {
    const data = createStore(defaultData).getTarget();
    data.dispatch = action => {
        // eslint-disable-next-line no-console
        console.log(`%c -- Reducer dispatch action ${action.type.toString()}`, 'color: #999999');
        const newData = _dispatch(action, data);
        data.apply(newData);
    };
    return data;
};

export default createReducer;
