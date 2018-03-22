import {
  GET_AIRCRAFT,
  SET_PROGRESS_MAPA,
  SET_REAL_TIME,
  SHOW_AIR,
  SET_FILTER_COUNTRY,
} from './const';

const initialState = {
  aircraf: [],
  aircrafTemp: [],
  enVuelo: 0,
  loading: false,
  realTime: false,
  showAir: 1000,
  filterCountry: '',
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
        aircrafTemp: action.dataTemp,
        enVuelo: action.enVuelo,
        loading: false,
      };
    case SHOW_AIR:
      return {
        ...state,
        aircraf: action.data,
        aircrafTemp: action.dataTemp,
        showAir: action.showAir,
      };
    case SET_FILTER_COUNTRY:
      return {
        ...state,
        filterCountry: action.filterCountry,
      };
    default:
      return state;
  }
}

export default Mapa;
