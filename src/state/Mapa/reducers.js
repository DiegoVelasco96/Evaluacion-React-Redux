import { GET_AIRCRAFT } from './const';

const initialState = {
  aircraf: [],
};

function Mapa(state = initialState, action) {
  switch (action.type) {
    case GET_AIRCRAFT:
      return {
        ...state,
        aircraf: action.data,
      };
    default:
      return state;
  }
}

export default Mapa;
