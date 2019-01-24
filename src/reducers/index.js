import { combineReducers } from 'redux';
import albumReducer from './albumReducer';
import formReducer from './formReducer';

export default combineReducers({
  album: albumReducer,
  formData: formReducer,
});