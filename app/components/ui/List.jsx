import React, { Component } from 'react';
import classname from 'classname';
import './list.scss';

export class Item extends Component {
	render() {
		let { children, className, ...props } = this.props;
		return <li className={ classname("ui-list-item", className) } { ...props }>{ children }</li>
	}
}

export default class List extends Component {
	static Item = Item;
	render() {
		let { children, className, ...props } = this.props;
		return <ul className={ classname('ui-list', className) } { ...props }>{ this.props.children }</ul>
	}
}
