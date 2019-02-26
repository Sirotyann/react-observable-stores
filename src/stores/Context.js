import React, { useState } from 'react';

const StateManagement = { update: () => { } };
const _data = new Map();

// const AppContext = React.createContext({});

const context = WrappedComponent => {
    return props => {
        const [data, setData] = useState(_data);
        StateManagement.update = state => {
            setData(state);
        };
        return <WrappedComponent {...props} />;
    };
};

const observer = (WrappedComponent, store) => {
    class Pure extends React.PureComponent {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    return props => <Pure {...{ ...props, ...store }} />;
};

export { context, observer, StateManagement };
