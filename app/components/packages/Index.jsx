import React, { Component } from 'react';
import * as _package from '../../drivers/package';
import './packages.scss';
import { Link } from 'react-router-dom';
import Button from '../ui/Button.jsx';
import Table from 'react-table';
import 'react-table/react-table.css';

class Index extends Component {
	state = { packages: [], isLoading: false }

	componentWillMount() {
		document.title = "Installed Packages";
		this.loadPackages();
	}

	loadPackages() {
		// return;
		this.setState({ isLoading: true })
		_package.all().then(p => {
			console.log('Packages');
			this.setState({ packages: p, isLoading: false })
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

	columns = [{
		Header: 'Name',
		id: 'name',
		accessor: d => <Link to={ '/packages/' + d.name }>{ d.name + ' (' + d.version + ')' }</Link>
	}, {
		Header: 'Installed Size',
		accessor: 'installed_size'
	}, {
		Header: 'Owner',
		accessor: 'packager'
	}];

	render() {
		return (
			<div className="packages-list" style={{ background: '#fff' }}>
				<div className="packages-header">Total Packages Found: { this.state.packages.length }</div>
				<Table
					filterable={ true }
					defaultPageSize={999}
					loading={ this.state.isLoading }
					showPagination={ false }
					data={ this.state.packages }
					columns={ this.columns }
				/>
			</div>
		);
	}
}

export default Index;