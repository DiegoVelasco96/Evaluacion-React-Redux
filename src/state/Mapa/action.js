import { GET_AIRCRAFT, SET_PROGRESS_MAPA } from './const';
import { getAllAircraftApi } from '../../api/mapa';

const setProgressMapa = () => ({
  type: SET_PROGRESS_MAPA,
});

const getAllAircraftSuccess = data => ({
  type: GET_AIRCRAFT,
  data,
});

const getAllAircraft = () => dispatch => {
  dispatch(setProgressMapa());
  getAllAircraftApi().then(response => {
    dispatch(getAllAircraftSuccess(response.data.acList));
  });
};

export { getAllAircraft };
