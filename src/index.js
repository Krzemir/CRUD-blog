import React from 'react';
import store from './redux/store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  document.querySelector('#root')
);


