import { GET_AIRCRAFT, SET_PROGRESS_MAPA, SET_REAL_TIME } from './const';

const initialState = {
  aircraf: [],
  loading: false,
  realTime: false,
};

function Mapa(state = initialState, action) {
  switch (action.type) {
    case SET_PROGRESS_MAPA:
      return {
        ...state,
        loading: true,
      };
    case SET_REAL_TIME:
      return {
        ...state,
        realTime: true,
      };
    case GET_AIRCRAFT:
      return {
        ...state,
        aircraf: action.data,
        loading: false,
      };
    default:
      return state;
  }
}

export default Mapa;
