const reducers = (state, action) => {
  switch (action.type) {
    case 'MOVE_MAP':
      return {
        ...state,
        map: {
          ...action.position
        }
      };
  }
  return state;
};

export default reducers;
