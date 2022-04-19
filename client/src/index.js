import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Components/FirebaseConfig';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// serviceWorkerRegistration.unregister();