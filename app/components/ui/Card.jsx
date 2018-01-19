import React, { Component } from 'react';
import classname from 'classname';
import './card.scss';

class Card extends Component {
	static defaultProps = {
		depth: 1
	}

	render() {
		const { className, children, depth, hover, ...props } = this.props;
		return <div className={ classname(className, 'card', 'card-' + depth, { hover }) } { ...props }>{ children }</div>
	}
}
export default Card;