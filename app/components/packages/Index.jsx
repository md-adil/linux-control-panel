import React, { Component } from 'react';
import * as _package from '../../drivers/package';
import './packages.scss';
import { Link } from 'react-router-dom';
import Button from '../ui/Button.jsx';

class Index extends Component {
	state = { packages: [] }
	componentWillMount() {
		document.title = "Installed Packages";
		this.loadPackages();
	}

	loadPackages() {
		_package.all().then(p => {
			this.setState({ packages: p })
		}).catch(err => {
			console.log(err);
			// alert(err.message);
		})
	}

	handleUninstall(p) {
		if(!confirm('Are you sure to uninstall?')) return;
		_package.remove(p.name).then(d => {
			console.log(d);
		}).catch(err => {
			console.log('Err: ', err);
		})
	}

	render() {
		return (
			<div className="packages">
			<div className="packages-header">Total Packages Found: { this.state.packages.length }</div>
			<table className="packages-data">
				<thead>
					<tr>
						<th width="10%">Name</th>
						<th width="10%">Installed Size</th>
						<th width="10%">Installed at</th>
						<th width="20%">Owner</th>
						<th width="20%">Manage</th>
					</tr>
				</thead>
				<tbody>
					{ this.state.packages.map(p => <tr key={ p.name }>
						<td><Link to={ '/packages/' + p.name }> { p.name } ({ p.version })</Link></td>
						<td>{ p.installed_size }</td>
						<td>{ p.install_date }</td>
						<td>{ p.packager }</td>
						<td><Button onClick={ this.handleUninstall.bind(this, p) } type="danger" rounded>Uninstall</Button></td>
					</tr>) }
				</tbody>
			</table>
			</div>
		);
	}
}

export default Index;