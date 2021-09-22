import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from "react-router-dom"




// import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

