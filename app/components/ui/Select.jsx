import React,  { Component } from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';
import './select.scss';
import Icon from './Icon.jsx';

export class Option extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <li { ...props } className={ classname('ripple', { active: this.props.selected === this.props.value }) }>{ children }</li>
        )
    }
}

export default
class Select extends Component {
    static Option = Option;
    
    state = {
        isOpen: false
    }

    renderActive() {
        let children = React.Children.toArray(this.props.children);
        for(let i = 0; i < children.length; i++) {
            if(children[i].props.value === this.props.value) return children[i].props.children;
        }
        return children[0].props.children;
    }

    onChange(val) {
        this.props.onChange && this.props.onChange(val)
    }

    render() {
        const { children, className, ...props } = this.props;
        var _class = 'ui-select' + ( this.state.isOpen ? ' open' : '');
        if(className) {
            _class += ' ' + className;
        }

        return (
            <div className={ _class }
                onClick={ () => this.setState({ isOpen: !this.state.isOpen }) }
            >
                <span unselectable="on" className="ui-select-active ripple" onMouseDown={ e => e.preventDefault() }>{ this.renderActive() }&nbsp;{ this.state.isOpen ? <Icon name="caret-up"/> : <Icon name="caret-down"/> }</span>
                <ul className="ui-select-list">
                    { React.Children.map(children, (child, i) => React.cloneElement(child, {
                        style: { ...(child.props.style || {}), animationDelay: (i * 100) + 'ms' },
                        selected: this.props.value,
                        onClick: this.onChange.bind(this, child.props.value || child.props.children)
                    })) }
                </ul>
            </div>
        )
    }
}
