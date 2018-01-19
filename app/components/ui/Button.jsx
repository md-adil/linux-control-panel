import React, { Component } from 'react';
import './button.scss';
import classname from 'classname';

class Button extends Component {
	colors = {
		'default': 'color-1',
		'primary': 'color-2',
		'warning': 'color-3',
		'danger': 'color-4',
	}

	static defaultProps = {
		type: 'default'
	}


	render() {
		const { children, type, round, border, ...props } = this.props;


		return <button { ...props }
			className={ classname('btn', this.colors[type], { 'btn-round': round, 'btn-border': border }) }
		>{ children }</button>
	}
}

export default Button;