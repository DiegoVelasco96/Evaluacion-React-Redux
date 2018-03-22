import {
  GET_AIRCRAFT,
  SET_PROGRESS_MAPA,
  SET_REAL_TIME,
  SHOW_AIR,
} from './const';
import { getAllAircraftApi } from '../../api/mapa';

const setProgressMapa = () => ({
  type: SET_PROGRESS_MAPA,
});

const getAllAircraftSuccess = (data, enVuelo) => ({
  type: GET_AIRCRAFT,
  data,
  enVuelo,
});

const getAllAircraft = () => (dispatch, getActualState) => {
  dispatch(setProgressMapa());
  getAllAircraftApi().then(response => {
    const showAir = getActualState().mapa.showAir;
    const enVuelo = response.data.acList.length;
    const arrAcList = response.data.acList.filter(vuelo => {
      return vuelo.Lat && vuelo.Long;
    });
    arrAcList.splice(showAir, enVuelo);
    dispatch(getAllAircraftSuccess(arrAcList, enVuelo));
  });
};

const setRealTime = realTime => dispatch => {
  dispatch({
    type: SET_REAL_TIME,
    realTime,
  });
};

const showAir = cantidad => (dispatch, getActualState) => {
  const allAir = [...getActualState().mapa.aircraf];
  allAir.splice(cantidad, allAir.length);
  dispatch(getAllAircraftSuccess(allAir, allAir.length));
};

export { getAllAircraft, setRealTime, showAir };
