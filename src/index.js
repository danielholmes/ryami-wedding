/* global document */
import 'babel-polyfill';
import 'whatwg-fetch'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles/main.css';
import './favicon.ico';

ReactDOM.render(<App/>, document.getElementById('main'));
