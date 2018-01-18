import React, { Component } from 'react';
import './app.scss';
import Aside from './Aside.jsx';
import Container from './Container.jsx';
import { HashRouter } from 'react-router-dom'

class App extends Component {

	render() {
		return (
			<HashRouter>
				<div className="app">
					<Aside />
					<Container />
				</div>
			</HashRouter>
		);
	}
}

export default App;