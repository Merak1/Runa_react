import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { pingpong } from './reducers/root';
import { pingEpic } from './epics/index';



const epicMiddleware = createEpicMiddleware();
const store = createStore(pingpong, applyMiddleware(epicMiddleware));

epicMiddleware.run(pingEpic);




// const WithProvider = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
