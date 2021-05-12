import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import superHeroReducer from './super_hero/reducers/super_hero';

const rootReducer = combineReducers({
  form: formReducer,
  super_hero: superHeroReducer
});

export default rootReducer;