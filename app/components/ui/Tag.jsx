import React from 'react';

import './tag-input.scss';

export default class Tag extends React.Component {
    
    handleDelete(i, tag) {
        this.props.onDelete && this.props.onDelete(i, tag);
    }
    renderTags() {
        if(!this.props.tags) return null;

        return (
            <div className="ui-tagsinput-tags">{
            this.props.tags.map((tag, i) => (
                <span key={i} className="ui-tagsinput-tag">{ tag } <a onClick={ this.handleDelete.bind(this, i, tag) } className="ui-close-mini">&times;</a></span>
            )) }
            </div>
        )
    }

    handleEnterKey(e) {
        let el = e.target;
        if(e.key === 'Enter') {
            e.preventDefault();
            this.props.onAdd && this.props.onAdd(el.value);
            el.value = '';
        }
    }

    render() {
        return (
            <div className="ui-tagsinput">
                { this.renderTags() }
                <input type="text" className="ui-tagsinput-input" autoFocus={ this.props.autoFocus } onKeyPress={ this.handleEnterKey.bind(this) } placeholder={this.props.placeholder} />
            </div>
        )
    }
}