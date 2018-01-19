import React, { Component } from 'react';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import Switch from './Switch.jsx';
import Select from './Select.jsx';
import Dropdown from './Dropdown.jsx';


class Buttons extends Component {
	render() {
		return (<div>
			<Button>Default</Button>
			<Button round>Rounded</Button>
			<Button border>Rounded</Button>
			<Button type="danger">Danger</Button>
			<Button type="primary">Pimary</Button>
			<Button type="warning">Hello</Button>
		</div>);
	}
}

class Switches extends Component {
	render() {
		return (
			<div>
				<Switch />
			</div>
		)
	}
}

class Dropdowns extends Component {
	state = { show: false }

	render() {
		return<div style={{ position: 'relative', display:'inline-block' }}>
			<Button key="btn" onClick={ e=>this.setState({ show: !this.state.show }) }>Show Dropdown</Button>
			<Dropdown key="menu" show={ this.state.show }>
				<Dropdown.Item>Hello World</Dropdown.Item>
				<Dropdown.Item>This is Adil</Dropdown.Item>
				<Dropdown.Item>I am going</Dropdown.Item>
			</Dropdown>
		</div>
	}
}

class Modals extends Component {
	state = { show: false }
	handleOpen() {
		// alert('hey')
		this.setState({ show: true })
	}
	render() {
		return (
			<div>
				<Button type="primary"  onClick={ this.handleOpen.bind(this) }>Show Modal</Button>
				<Modal show={ this.state.show } onClose={ e => this.setState({ show: false }) }>
					<Modal.Header>
						This is Heading
					</Modal.Header>
					<Modal.Body>
						lorem
					</Modal.Body>
				</Modal>
			</div>
		)
	}
}


class UI extends Component {
	render() {
		return (
			<div>
				<Buttons />
				<Modals />
				<Switches />
				<Dropdowns />
			</div>
		);
		
	}

}

export default UI;
