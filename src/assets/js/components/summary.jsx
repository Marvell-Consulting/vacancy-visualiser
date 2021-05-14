import React, { useContext } from 'react';
import { State } from '../state';

const Summary = () => {
  const { state } = useContext(State);
  const { map } = state;

  return <p className="small">{ `${map.lat.toFixed(5)}, ${map.lng.toFixed(5)}` }</p>;
};

export default Summary;
