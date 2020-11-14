import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/css/animate.min.css'
import App from './App';
import { setGlobal } from 'reactn';

const getDarkModeState = () => {
  let dataFromStorage = localStorage.getItem('darkMode')
  return dataFromStorage !== null ? (dataFromStorage == 'true' ? true : false) : false;
}

setGlobal({
    navBarIndicator:'/',
    darkMode:getDarkModeState()
});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
