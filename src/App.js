//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import ShowCountries from './component/ShowCountries';
//import {createStore} from 'redux'; for only redux we are create a store
import countryReducer from './reducer/countryReducer';
import{createStore,applyMiddleware} from 'redux';
//const store=createStore(countryReducer) store for reducer
const store=createStore(countryReducer,applyMiddleware(logger))
store.subscribe(()=>console.log(store.getState()))
function App() {
  return(
  <Provider store={store}>
    <ShowCountries/>
  </Provider>
  );
}

export default App;
