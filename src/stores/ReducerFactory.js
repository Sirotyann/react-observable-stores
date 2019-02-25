import createStore from './StoreFactory';

let index = 1;
const createReducer = (defaultData, _dispatch) => {
    const data = createStore(defaultData).getTarget();
    data._clazz = `Reducer_${index}`;
    index++;
    data.dispatch = (action) => {
        const newData = _dispatch(action, data);
        console.log("reducer dispatch", data, newData);
        data.apply(newData);
    }

    return data;
};

export default createReducer;
