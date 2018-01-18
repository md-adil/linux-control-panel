import React, { Component } from 'react';
import './button.scss';
import classname from 'classname';

class Button extends Component {
	render() {
		const { children, type, rounded, ...props } = this.props;
		return <button { ...props }
			className={ classname({ rounded: rounded }) }
		>{ children }</button>
	}
}

export default Button;