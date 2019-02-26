import React, { useState } from 'react';

const StateManagement = { update: () => { } };
const _data = new Map();

const AppContext = React.createContext({});

const context = WrappedComponent => {
    const Content = props => <WrappedComponent {...props} />;
    return props => {
        const [data, setData] = useState(_data);
        StateManagement.update = state => {
            setData(state);
        };
        return (
            <AppContext.Provider value={data}>
                <Content {...props} />
            </AppContext.Provider>
        );
    };
};

const observer = (WrappedComponent, store) => {
    class Pure extends React.PureComponent {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    return props => (
        <AppContext.Consumer>
            {() => (<Pure {...{ ...props, ...store }} />)}
        </AppContext.Consumer>
    );
};

export { context, observer, StateManagement };
