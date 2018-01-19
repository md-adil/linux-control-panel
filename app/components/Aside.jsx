import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './aside.scss';

class Aside extends Component {
	render() {
		return (
			<aside>
				<nav>
				<ul>
					<li>
						<Link to="/"><i className="fa fa-home" />&nbsp;Home</Link>
					</li>
					<li>
						<Link to="/packages"><i className="fa fa-file-zip-o" />&nbsp;Packages</Link>
					</li>
					<li>
						<Link to="/process"><i className="fa fa-home" />&nbsp;Process</Link>
					</li>
					<li>
						<Link to="/applications"><i className="fa fa-home" />&nbsp;Application</Link>
					</li>
					<li>
						<Link to="/settings"><i className="fa fa-gear" />&nbsp;Settings</Link>
					</li>
					<li>
						<Link to="/ui"><i className="fa fa-gear" />&nbsp;UI Elements</Link>
					</li>
				</ul>
				</nav>
			</aside>
		)
	}
}
export default Aside;