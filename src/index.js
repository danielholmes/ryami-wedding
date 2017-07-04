/* global document */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles/main.css';

ReactDOM.render(<App/>, document.getElementById('main'));
