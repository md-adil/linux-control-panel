import React, { Component } from 'react';
import { show } from '../../drivers/package';

import { Switch, Route } from 'react-router-dom';

class Show extends Component {
	state = { package: {} }

	componentDidMount() {
		let name = this.props.match.params.name;
		show(name).then(info => {
			console.log(info);
			this.setState({package: info});
		})
	}
	
	render() {
		return (
			<div className="packages-info">
				<p>Name: { this.state.package.name }</p>
				<p>version: { this.state.package.version }</p>
				<p>description: { this.state.package.description }</p>
				<p>build_date: { this.state.package.build_date }</p>
				<p>conflicts_with: { this.state.package.conflicts_with }</p>
				<p>depends_on: { this.state.package.depends_on }</p>
				<p>groups: { this.state.package.groups }</p>
				<p>install_date: { this.state.package.install_date }</p>
				<p>install_reason: { this.state.package.install_reason }</p>
				<p>install_script: { this.state.package.install_script }</p>
				<p>installed_size: { this.state.package.installed_size }</p>
				<p>licenses: { this.state.package.licenses }</p>
				<p>optional_deps: { this.state.package.optional_deps }</p>
				<p>optional_for: { this.state.package.optional_for }</p>
				<p>packager: { this.state.package.packager }</p>
				<p>provides: { this.state.package.provides }</p>
				<p>replaces: { this.state.package.replaces }</p>
				<p>required_by: { this.state.package.required_by }</p>
				<p>url: { this.state.package.url }</p>
				<p>validated_by: { this.state.package.validated_by }</p>
			</div>
		);
	}
}

export default Show;