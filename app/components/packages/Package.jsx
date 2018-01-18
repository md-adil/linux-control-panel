import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './Index.jsx';
import Show from './Show.jsx';
import './packages.scss';



class Packages extends Component {
	
	render() {
		return (
			<div className="packages">
				<Switch>
					<Route exact path="/packages" component={ Index } />
					<Route path="/packages/:name" component={ Show } />
				</Switch>
			</div>
		);
	}
}

export default Packages;