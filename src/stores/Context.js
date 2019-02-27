import React, { useState } from 'react';

const StateManagement = {update: null};
const _data = new Map();

const context = WrappedComponent => {
    return props => {
        const [data, setData] = useState(_data);
        if (!StateManagement.update) {
            StateManagement.update = state => {
                const nextState = {...data, ...state};
                setData(nextState);
            };
        }
        return <WrappedComponent {...{...props, ...data}} />;
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
