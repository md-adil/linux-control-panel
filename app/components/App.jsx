import React, { Component } from 'react';
import './app.scss';
import Aside from './Aside.jsx';
import Container from './Container.jsx';

class App extends Component {

	render() {
		return (
			<div className="app">
				<Aside />
				<Container />
			</div>
		);
	}
}

export default App;