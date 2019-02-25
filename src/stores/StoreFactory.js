import { StateManagement } from './Context';

const _data = new Map();
let index = 1;

const updatetore = (store) => {
    _data.set(store._id, store);
}

const updateState = () => {
    StateManagement.update(new Map(_data));
}

class Store {
    constructor() {
        this._clazz = `Store_${index}`;
        this._id = Symbol();
        updatetore(this);
        index++;
    }

    _notifyChange() {
        updatetore(this);
        updateState();
    }

    apply(data) {
        console.log('Store | apply', data, this);
        const store = _data.get(this);
        _data.set(this, { ...store, ...data });
        StateManagement.update(new Map(_data));
    }
}

const createStore = props => {
    const store = new Store();
    Object.getOwnPropertyNames(props).forEach(key => {
        if (!store[key]) {
            store[key] = props[key];
        }
    });

    const proxy = new Proxy(store, {
        get(target, key, receiver) {
            // console.log("get ", {target, key, receiver});
            // return _data.get(store)[key];
            return Reflect.get(target, key, receiver);
        },
        set(target, key, value, receiver) {
            console.log("set ", {target, key, receiver});
            const result = Reflect.set(target, key, value, receiver);
            target._notifyChange();
            return result;
        },
    });
    proxy.getTarget = () => store;
    return proxy;
};

export default createStore;
