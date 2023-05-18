import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { AppProvider } from './contexts/AppProvider';

ReactDOM.render(
  <AppProvider initialValues={{}}>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById('root')
);

reportWebVitals();
