import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/components/form.min.css';
import 'semantic-ui-css/components/label.min.css';
import 'semantic-ui-css/components/grid.min.css';
import 'semantic-ui-css/components/step.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/header.min.css';
import 'semantic-ui-css/components/table.min.css';
import 'semantic-ui-css/components/divider.min.css';
import 'semantic-ui-css/components/button.min.css';
import 'semantic-ui-css/components/site.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
