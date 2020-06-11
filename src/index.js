import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

ReactDOM.render(
  <BrowserRouter>
      <Provider store={createStore(rootReducer)}>
          <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
