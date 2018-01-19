import React, { Component } from 'react';
import './switch.scss';

export default class extends Component {
	state = { hasFocus: false };

	constructor(props) {
		super(props);
		this.state.checked = !!(props.checked || props.defaultChecked);
	}

	componentWillReceiveProps (nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({ checked: !!nextProps.checked })
	    }
	}

	handleClick() {
		this.setState({ checked: !this.state.checked });
		this.input && this.input.click();
	}

	render() {
		const { className, ...props } = this.props;
		let _class = 'ui-toggle-switch';
		if(this.state.checked) {
			_class += ' ' + 'ui-toggle-switch-checked';
		}
		if(className) {
			_class += ' ' + className;
		}

		return (
			<div className={ _class } >
				<input type="checkbox" { ...props } style={{ height:0,width:0 }}
				ref = { ref => { this.input = ref } }/>
				<label onClick = { this.handleClick.bind(this) } />
			</div>
		);
	}
}
