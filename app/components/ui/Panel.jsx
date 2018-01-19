import React from 'react';
import './panel.scss';
import classname from 'classname';

export default (props) => {
	var { children, header, footer, type, className, raw, onClose, ...prop } = props;
	type = type || 'default';
	return (
		<div className={ classname('panel', `panel-${ type }`, className) } { ...prop }>
			{ header &&  <div className="panel-heading">{ header } { onClose && <a onClick={ onClose } className="close">&times;</a> }</div> }
			{ raw ? children : <div className="panel-body">{ children }</div> }
			{ footer && <div className="panel-footer">{ footer }</div> }
		</div>
	);
}
