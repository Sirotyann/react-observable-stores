import React, { useState } from 'react';

const StateManagement = { update: null };
const _data = new Map();

const context = WrappedComponent => {
    return props => {
        const [data, setData] = useState(_data);
        if (!StateManagement.update) {
            StateManagement.update = state => {
                const nextState = { ...data, ...state };
                setData(nextState);
            };
        }
        return <WrappedComponent {...{ ...props, ...data }} />;
    };
};

const observer = (WrappedComponent, stores) => {
    class Pure extends React.PureComponent {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    return (stores instanceof Array) ?
        props => <Pure {...{ ...props, ...Object.assign.apply(null, [{}, ...stores]) }} /> :
        props => <Pure {...{ ...props, ...stores }} />;
};

export { context, observer, StateManagement };
