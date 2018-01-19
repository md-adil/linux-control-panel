import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './modal.scss';

class Header extends Component {
	render() {
		return (
			<div className="ui-modal-header">{ this.props.children }</div>
		);
	}
}

class Footer extends Component {

	render() {
		return (
			<div className="ui-modal-footer">{ this.props.children }</div>
		);
	}
}

class Body extends Component {

	render() {
		return (
			<div className="ui-modal-body">{ this.props.children }</div>
		)
	}
}

class Modal extends Component {
	static Header = Header;
	static Footer = Footer;
	static Body = Body;
	static propsTypes = {
		show: PropTypes.boolean
	}

	render() {
		return (
			<TransitionGroup>
				{ this.props.show && <CSSTransition
					classNames="ui-modal"
					timeout={ 300 }
					>
					<div className="ui-modal-wraper">
						<div className="ui-modal-dialog">
							{ this.props.onClose && <a onClick = { this.props.onClose } className="ui-close">&times;</a> }
							{ this.props.children }
						</div>
					</div>
				</CSSTransition> }
			</TransitionGroup>
		);
	}
}

export default Modal;