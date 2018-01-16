import React, { Component } from 'react';
import './button.scss';
import classname from 'classname';

class Button extends Component {
	render() {
		return <button
			className={ classname({rounded: this.props.rounded}) }
		>{ this.props.children }</button>
	}
}

export default Button;