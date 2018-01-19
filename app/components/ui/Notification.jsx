import React, { Component } from 'react';
import { connect } from 'react-redux';
import { show, hide } from '../actions/notification';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './notification.scss';

class Notification extends Component {

    componentDidMount() {
        let timeout = this.props.data.timeout || this.props.timeout;
        if(this.props.data.timeout !== 0 && timeout) {
            this.closeTimer = setTimeout(() => {
                this.props.onClose( this.props.data );
            }, timeout);
        }
    }

    handleClose(i, e) {
        e.preventDefault();
        clearTimeout(this.closeTimer);
        this.props.onClose( this.props.data );
    }

    render() {
		let notification = this.props.data;
        return  (
            <div className="notification">
				<a className="notification-close" onClick={ this.handleClose.bind(this) }>&times;</a>
				{ notification.title && <div className="notification-title">{ notification.title }</div> }
				{ notification.body && <div className="notification-body">{ notification.body }</div> }
				{ notification.footer && <div className="notification-footer">{ notification.footer }</div> }
            </div>
        );
    }
}

class Notify extends Component {
    constructor(props) {
        super(props);
    }

    handleClose(i) {
        this.props.close(i);
    }

	withTransition(n) {
		return <CSSTransition key={n.id}
					classNames="ui-notification"
					timeout={ 300 }
    			>
			<Notification key = { n.id }
                data = { n }
                onClose = { this.props.close }
                timeout = { this.props.timeout } />
		</CSSTransition>
    }
    
    render() {
        console.log('Not: ', this.props.notification);

        return (
            <div className="notificaiton-toast">
                <TransitionGroup>
                    { this.props.notification.map(this.withTransition.bind(this)) }
                </TransitionGroup>
            </div>
        );
    }
}

const state = ({ notification }) => ({
    notification
});

const mapDispatch = dispatch => ({
    close: i => dispatch(hide(i))
})

export default connect(state, mapDispatch)( Notify );
