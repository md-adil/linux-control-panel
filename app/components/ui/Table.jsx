import React, { Component } from 'react';
import classname from 'classname';
import Icon from './Icon.jsx';
import PropTypes from 'prop-types';

export default
class Table extends Component {

    static propTypes = {
        onSort: PropTypes.func
    }

    static childContextTypes = {
        table: PropTypes.object
    }

    getChildContext() {
        return {
            table: this
        }
    }

    render() {
        const { children, onSort, ...props } = this.props;
        return (
            <table { ...props }>

            </table>
        )
    }
}

export class Tr extends Component {

    onSort() {

    }

    render() {
        const { children, ...props } = this.props;
        return (
            <tr { ...props }>{ React.Children.map(children, (child, i) => React.cloneElement(child, {
                onSort: this.onSort.bind(this)
            })) }</tr>
        );
    }
}

export class Th extends Component {
    state = {};

    onSort = sort => {
        this.table.props.onSort && this.table.props.onSort(sort, this.state.order)
    }

    renderSortable() {
        return (
            <th className="sortable" onClick={ onSort } >
                <Icon
                    name={ this.props.sort !== this.context.table.props.sort
                        ? 'sort' 
                        : ( this.context.table.sort.sortOrder === 'asc' ? 'sort-order-asc' : 'sort-order-desc' ) 
                    }
                />
            </th>
        )
    }

    render() {
        return this.props.sort ? this.renderSortable() : (
            <th>{ this.props.children }</th>
        );
    }
}

export class Td extends Component {

}

export class Tbody extends Component {

}

export class Thead extends Component {

}
