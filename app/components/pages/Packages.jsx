import React, { Component } from 'react';
import * as _package from '../../drivers/package';
import './packages.scss';

class Packages extends Component {
	state = { packages: [] }
	componentWillMount() {
		_package.all().then(p => {
			this.setState({ packages: p })
		}).catch(err => {
			console.log(err);
			// alert(err.message);
		})
	}

	render() {
		return (
			<div className="packages">
			<table>
				<thead>
					<tr>
						<th width="10%">Name</th>
						<th width="10%">Installed_size</th>
						<th width="10%">Architecture</th>
						<th width="10%">Build at</th>
						<th width="30%">Depends on</th>
						<th width="10%">Installed at</th>
						<th width="20%">Owner</th>
					</tr>
				</thead>
				<tbody>
					{ this.state.packages.map(p => <tr key={ p.name }>
						<td>{ p.name }</td>
						<td>{ p.installed_size }</td>
						<td>{ p.architecture }</td>
						<td>{ p.build_date }</td>
						<td>{ p.depends_on }</td>
						<td>{ p.install_date }</td>
						<td>{ p.packager }</td>
					</tr>) }
				</tbody>
			</table>
			</div>
		);
	}
}

export default Packages;