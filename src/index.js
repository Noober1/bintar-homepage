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

const getNavBarIndicator = () => {
  let dataFromStorage = localStorage.getItem('navBarIndicator')
  return dataFromStorage !== null ? dataFromStorage : '/';
}

setGlobal({
    navBarIndicator:getNavBarIndicator(),
    darkMode:getDarkModeState(),
    webName:'SMK Bina Taruna Jalancagak'
});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
