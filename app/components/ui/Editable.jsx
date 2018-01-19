import React from 'react';

import Tag from './Tag.jsx';
import Icon from './Icon.jsx';
import './editable.scss';

class Editable extends React.Component {
	state = { isEditing : false };
	static defaultProps = {
		type: 'text'
	}

	handleDeleteTag(i, tag) {
		var tags = this.state.tags.filter((t, k) => k !== i);
		this.setState({ tags })
	}

	handleAddTag(tag) {
		this.setState({ tags: this.state.tags.concat([ tag ]) });
	}

	renderTextAreaForm() {
		return (
			<div className="ui-editor">
				<textarea ref={ el => this.el = el } defaultValue={ this.props.children } autoFocus="true"/>
				<a className="ui-btn-ok" onClick={ this.handleUpdateBtn.bind(this) }><Icon name="check" /></a>
			</div>
		);
	}
	renderTagsInputForm() {
		return (
			<div className="ui-editor">
				<Tag autoFocus={ true }
					onDelete={ this.handleDeleteTag.bind(this) }
					onAdd={ this.handleAddTag.bind(this) }
					tags={ this.state.tags } />
					<a className="ui-btn-ok" onClick={ this.handleUpdateBtn.bind(this) }><Icon name="check" /></a>
			</div>
		);
	}
	renderTextForm() {
		return (
			<div className="ui-editor">
				<input ref={ el => this.el = el } defaultValue={ this.props.children }
					onKeyDown={ this.handleTextEnter.bind(this) } autoFocus="true" />
				<a className="ui-btn-ok" onClick={ this.handleUpdateBtn.bind(this) }><Icon name="check" /></a>
			</div>
		);
	}

	handleUpdateBtn() {
		if(this.props.type === 'tags') {
			this.update(this.state.tags);
			return;
		}

		if(!this.el) return;
		this.update(this.el.value);
	}

	handleTextEnter(e) {
		if(e.key !== 'Enter') return;
		this.update(e.target.value);
	}

	update(value) {
		this.props.onUpdate && this.props.onUpdate(value);
		this.setState({ isEditing: false })
	}

	renderForm() {
		switch(this.props.type) {
			case 'text':
				return this.renderTextForm();
			case 'textarea':
				return this.renderTextAreaForm();
			case 'tags':
				return this.renderTagsInputForm();
			return this.props.children;
		}
	}

	handleEdit() {
		let state = { isEditing: !this.state.isEditing };
		if(this.props.type === 'tags') {
			state.tags = this.props.children || []
		}
		this.setState(state);
	}

	handleUpdate() {

	}

	handleEsc(e) {
		if(e.key !== 'Escape') return;
		this.setState({ isEditing: false });
	}

	render() {
		var children = this.props.children;
		if(Array.isArray(children)) {
			children = children.join(', ').trim();
		}

		if(children && this.props.type === 'textarea') {
			children = children.split("\n").map( (line, i) => <p key={i}>{ line }</p> );
		}
		
		return (
			<div className="ui-editable" onKeyDown={ this.handleEsc.bind(this) } >
				{ this.state.isEditing ? this.renderForm() : <span onClick={ this.handleEdit.bind(this) }>{ children || '--' }</span> }
			</div>
		);
	}
}

export default Editable;