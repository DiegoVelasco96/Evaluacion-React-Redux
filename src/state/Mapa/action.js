import {
  GET_AIRCRAFT,
  SET_PROGRESS_MAPA,
  SET_REAL_TIME,
  SHOW_AIR,
  SET_FILTER_COUNTRY,
} from './const';
import { getAllAircraftApi } from '../../api/mapa';

const setProgressMapa = () => ({
  type: SET_PROGRESS_MAPA,
});

const getAllAircraftSuccess = (data, dataTemp, enVuelo) => ({
  type: GET_AIRCRAFT,
  data,
  dataTemp,
  enVuelo,
});

const showAircraftSuccess = (data, dataTemp, showAir) => ({
  type: SHOW_AIR,
  data,
  dataTemp,
  showAir,
});

const setFilterCountry = filter => ({
  type: SET_FILTER_COUNTRY,
  filterCountry: filter,
});

const hiddenData = (data, filter) => {
  let result = [];
  result = data.map(record => {
    const copy = { ...record };
    if (filter) {
      const reg = new RegExp(filter, 'gi');
      const match = record['Cou'].match(reg);
      if (!match) {
        copy.hidden = true;
      } else {
        copy.hidden = false;
      }
    } else {
      copy.hidden = false;
    }
    return copy;
  });

  return result;
};

const getAllAircraft = () => (dispatch, getActualState) => {
  dispatch(setProgressMapa());
  getAllAircraftApi().then(response => {
    const showAir = getActualState().mapa.showAir;
    const filterCountry = getActualState().mapa.filterCountry;
    const enVuelo = response.data.acList.length;
    let request = [];
    const arrAcList = response.data.acList.filter(vuelo => {
      return vuelo.Lat && vuelo.Long;
    });
    const arrAcListTemp = [...arrAcList];
    arrAcList.splice(showAir, enVuelo);
    if (filterCountry) {
      request = hiddenData(arrAcList, filterCountry);
    } else {
      request = arrAcList;
    }
    dispatch(getAllAircraftSuccess(request, arrAcListTemp, enVuelo));
  });
};

const setRealTime = realTime => dispatch => {
  dispatch({
    type: SET_REAL_TIME,
    realTime,
  });
};

const showAir = cantidad => (dispatch, getActualState) => {
  const allAircraft = [...getActualState().mapa.aircrafTemp];
  const showAircraft = [...getActualState().mapa.aircrafTemp];
  showAircraft.splice(cantidad, allAircraft.length);
  dispatch(showAircraftSuccess(showAircraft, allAircraft, cantidad));
};

const showAirCountry = county => (dispatch, getActualState) => {
  const allAircraft = [...getActualState().mapa.aircrafTemp];
  const showAircraft = [...getActualState().mapa.aircraf];
  const showAir = getActualState().mapa.showAir;
  const request = hiddenData(showAircraft, county);
  dispatch(setFilterCountry(county));
  dispatch(showAircraftSuccess(request, allAircraft, showAir));
};

export { getAllAircraft, setRealTime, showAir, showAirCountry };
