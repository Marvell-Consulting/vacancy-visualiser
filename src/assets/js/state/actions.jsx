const Actions = dispatch => {
  return {
    map: {
      move: (position) => {
        return dispatch({
          type: 'MOVE_MAP',
          position
        });
      }
    }
  };
};

export default Actions;
