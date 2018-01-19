import React from 'react';
import Icon from './Icon.jsx';
import './checkbox.scss';
import classname from 'classname';

export default class Checkbox extends React.Component {
    state = {
        isActive: false
    };

    handleClick() {
        this.props.onChange && this.props.onChange(!this.props.checked);
    }

    render() {
        const { checked, onChange, ...props } = this.props;
        return (
            <label className="ui-checkbox" { ...props }>
                <div className={ classname("ui-checker", { active: this.props.checked }) }>
                    <Icon name="check" className="icon-check" />
                </div>
                <input type="checkbox" checked={ this.props.checked || false } onChange={ this.handleClick.bind(this) } style={{display:'none'}} />
                &nbsp;{ this.props.label }
            </label>
        )
    }
}
