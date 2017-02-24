import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Tabs} from "./Tabs/Tabs";
import Text from "./Tabs/Text";
const TabPane = Tabs.TabPane;
class App extends Component {
	constructor(props,context) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(key) {
		console.log(key);
	}
render() {
	return (
			<Tabs activeKey="torec" onChange={this.handleChange}>
				<TabPane
					tab={
						<div>
							<i className="iconfont icon-edit w-pd-r"></i>
							代付款
						</div>
					} 
					key="topay">
					<Text id="11"/>
				</TabPane>
				<TabPane tab="代发货" key="tosend">
					<Text id="112" />
				</TabPane>
				<TabPane tab="待收货" key="torec">
					<Text id="131"/>
				</TabPane>
				<TabPane tab="全部" key="all">
					<Text id="14441"/>
				</TabPane>
			</Tabs>
	);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));