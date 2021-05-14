import React, { useReducer } from 'react'
import Actions from './actions';
import reducers from './reducers';

const Context = React.createContext();

const StateWrapper = ({ state: initial, children }) => {
  const [state, dispatch] = useReducer(reducers, initial);
  const actions = Actions(dispatch);
  return <Context.Provider value={{ state, actions }}>
    { children }
  </Context.Provider>;
};

const State = Context.Consumer;

export { StateWrapper, State };
