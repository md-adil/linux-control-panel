import React from 'react';
import { render } from 'react-dom';
import './components/style.scss';

const root = document.createElement('div');
document.body.appendChild(root);

import App from './components/App.jsx';

render(<App />, root);
