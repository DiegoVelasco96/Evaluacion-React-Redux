import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mapa from './Mapa/reducers';

const middleware = composeWithDevTools(applyMiddleware(thunk));

const app = combineReducers({
  mapa,
});

export default createStore(app, middleware);
