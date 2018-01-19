import React, { Component } from 'react';
import Modal from './Modal.jsx'
import './confirm.scss';
import classname from 'classname';

const styles = {
    confirm: {
        display: 'inline-block'
    }
}

export default class Confirm extends Component {
    state = {
        isConfirming: false
    }

    onButtonClick = (e) => {
        e.preventDefault();
        this.setState({ isConfirming: true });
    }
    
    onConfirm = () => {
        this.setState({ isConfirming: false });
        this.props.onConfirm && this.props.onConfirm()
        
    }

    onCancel = () => {
        this.props.onCancel && this.props.onCancel()
        this.setState({ isConfirming: false })
    }

    render() {
        return (
            <div style={ styles.confirm } className="ui-confirm">
                <Modal show={ this.state.isConfirming } onClose={ this.onCancel } size="sm">
                    <Modal.Body>
                        <h3 className={ classname('text-center', 'ui-confirm-title') }>
                            { this.props.title || 'Are you sure?' }
                        </h3>
                        <h4 className={ classname('text-center', 'ui-confirm-subtitle') }>This action cannt be undone.</h4>
                        <p className={ classname('text-right', 'ui-confirm-actions') }>
                            <button className="btn btn-primary btn-sm" onClick={ this.onConfirm }>Confirm</button>&nbsp;
                            <button className="btn btn-warning btn-sm" onClick={ this.onCancel }>Cancel</button>
                        </p>
                        
                    </Modal.Body>
                </Modal>
                { React.cloneElement(this.props.children, {
                    onClick: this.onButtonClick
                }) }
            </div>
        )
    }
}
