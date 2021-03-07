import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import { toast as ReactToast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';


import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactModal.setAppElement('#root');
ReactToast.configure({
  position: 'top-right',
  autoClose: 10000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
