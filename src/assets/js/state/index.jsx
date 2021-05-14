import React, { useReducer } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_MAP':
      return {
        ...state,
        mapbox: {
          ...state.mapbox,
          ...action.position
        }
      };
  }

  return state;
};

const StateWrapper = ({ state: initial, children }) => {
  const [state, dispatch] = useReducer(reducer, initial);
  const actions = {
    map: {
      move: (position) => {
        return dispatch({
          type: 'MOVE_MAP',
          position
        });
      }
    }
  };
  return <Context.Provider value={{ state, actions }}>
    { children }
  </Context.Provider>;
}
const State = Context.Consumer;

export { StateWrapper, State };
