import { GET_AIRCRAFT } from './const';
import { getAllAircraftApi } from '../../api/mapa';

const getAllAircraftSuccess = data => ({
  type: GET_AIRCRAFT,
  data,
});

const getAllAircraft = () => dispatch => {
  getAllAircraftApi().then(response => {
    dispatch(getAllAircraftSuccess(response.data.acList));
  });
};

export { getAllAircraft };
