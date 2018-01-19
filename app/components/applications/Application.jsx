import React, { Component } from 'react';
import Card from '../ui/Card.jsx';
import './application.scss';

class Application extends Component {
	state = {
		apps: [
			'Teamviewer',
			'Telegram',
			'Google Chrome',
			'Firefox',
			'Safari',
			'Internet Explorer',
		]
	}
	render() {
		return (
			<div className="applications">
				{ this.state.apps.map(app => <Card className="application blue-grey" key={ app }>
					<div className="icon" />
					{ app }
				</Card>) }
			</div>
		);
	}
}

export default Application;
