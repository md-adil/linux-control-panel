import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './aside.scss';

class Aside extends Component {
	render() {
		return (
			<aside>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/packages">Packages</Link>
					</li>
					<li>
						<Link to="/process">Process</Link>
					</li>
					<li>
						<Link to="/application">Application</Link>
					</li>
				</ul>
			</aside>
		)
	}
}
export default Aside;