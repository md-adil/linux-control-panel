import React from 'react';
import classname from 'classname';

import './dropdown.scss';

class Item extends React.Component {
    render() {
        let { children, className, ...props } = this.props;
        className = className || '';
        return (
            <li { ...props } className={ 'ui-dropdown-list-item ' + className }>
                <a className="ripple">{ children }</a>
            </li>
        )
    }
}

export default class Dropdown extends React.Component {
    static Item = Item;

    render() {
        let { children, className, show, ...props} = this.props;
        return (
            <ul { ...props } className={ classname(className, 'ui-dropdown-list', { open: show }) }>
                { React.Children.map(children, (child, i) => React.cloneElement(child, {
                    style: { ...(child.props.style || {}), transitionDelay: (i * 100) + 'ms' }
                })) }
            </ul>
        )
    }
}
