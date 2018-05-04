import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Salut"/>, document.getElementById('root'));
registerServiceWorker();
