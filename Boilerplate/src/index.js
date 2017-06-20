import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// To use Polaris, we also need to import the Polaris styles.
import '@shopify/polaris/styles.css';


ReactDOM.render(<App />, document.getElementById('root'));
