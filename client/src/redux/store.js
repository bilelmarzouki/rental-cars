import { createStore, applyMiddleware , combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import reducers from './reducers';

//import {bookingsReducer} from './reducers/bookingsReducer';

const composeEnhancers = composeWithDevTools({});



const enhanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(
  reducers,
  
  composeEnhancers(
    applyMiddleware(thunk)
    
    
  
))
export default store
