import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* The line `import reportWebVitals from './reportWebVitals';` is importing the `reportWebVitals`
function from the `reportWebVitals.js` file. This function is used to measure and report various web
vitals metrics, such as performance, accessibility, and user experience, in your React application. */
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
