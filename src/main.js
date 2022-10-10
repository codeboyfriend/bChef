import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Offline from './Offline';

const offline = ReactDOM.createRoot(document.getElementById('offline'));
offline.render(
  <React.StrictMode>
    <Offline />
  </React.StrictMode>
);