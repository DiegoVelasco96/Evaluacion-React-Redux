import {
  GET_AIRCRAFT,
  SET_PROGRESS_MAPA,
  SET_REAL_TIME,
  SHOW_AIR,
} from './const';

const initialState = {
  aircraf: [],
  enVuelo: 0,
  loading: false,
  realTime: false,
  showAir: 100,
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
        realTime: action.realTime,
      };
    case GET_AIRCRAFT:
      return {
        ...state,
        aircraf: action.data,
        enVuelo: action.enVuelo,
        loading: false,
      };
    default:
      return state;
  }
}

export default Mapa;
