import React, { Component } from 'react';
import Waiting from '../icons/waiting.svg';

class Loading extends Component {
	state = {};

	render() {
		const { children, isLoading } = this.props;
		if( typeof children === 'undefined' ) return <Waiting />;
		return isLoading ? <Waiting /> : <span>{ children }</span>;
	}
}

export default Loading;