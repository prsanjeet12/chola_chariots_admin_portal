import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { ApiProvider } from './Context/ApiContext';
import './index.css';

// Use ReactDOM.render() for traditional rendering
ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your App component with ApiProvider */}
    {/* <ApiProvider> */}
      <App />
    {/* </ApiProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);