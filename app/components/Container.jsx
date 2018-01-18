import React, { Component } from 'react';
import './container.scss';
import Button from './ui/Button.jsx';
import Packages from './packages/Package.jsx';
import Process from './process/Process.jsx';
import Home from './Home.jsx';
import { Switch, Route } from 'react-router-dom';

class Container extends Component {

	render() {
		return (
			<div className="container">
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/packages" component={ Packages } />
					<Route path="/process" component={ Process } />
				</Switch>
			</div>
		)
	}
}
export default Container;