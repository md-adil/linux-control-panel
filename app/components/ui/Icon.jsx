import React, { Component } from 'react';
import classname from 'classname';

export default class Icon extends Component {
	render() {
		let { name, className, children, ...props } = this.props;
		return <i className={ classname(`fa fa-${ name }`, className) } { ...props } >{ children }</i>
	}
}