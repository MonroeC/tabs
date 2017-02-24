import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './tabs.css';
class Text extends Component {
	constructor(props,context) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.id}
			</div>

		);
	}
}

export default Text;


