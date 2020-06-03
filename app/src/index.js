import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import MockServer from './mock';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
