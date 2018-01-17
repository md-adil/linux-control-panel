import React, { Component } from 'react';
import './container.scss';
import Button from './ui/Button.jsx';
import Packages from './pages/Packages.jsx';

class Container extends Component {

	render() {
		return (
			<div className="container">
				<Packages />
			</div>
		)
	}
}
export default Container;