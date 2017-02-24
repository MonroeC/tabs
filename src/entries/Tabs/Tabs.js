import React, { Component,PropTypes,Children } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import TabPane from './TabPane';
import './tabs.css';
export class Tabs extends Component {
	static TabPane = TabPane;
	constructor(props,context) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.indexOf = this.indexOf.bind(this);
		this.state = { 
			currentIndex:'',
		 	currentkey:this.props.defaultActiveKey||this.props.activeKey
		};
	}
	componentWillMount(){
		const {
			currentkey
		} = this.state;
		let arrKeys = Children.map(this.props.children,(item,index)=>{
			return [...[],item.key];
		});
		let index = this.indexOf(arrKeys,currentkey);
		this.setState({
			currentIndex:index,//通过keys判断现在默认tab的索引
		 });
	};
	//函数判断默认tab的索引
	indexOf(arr,defaultActiveKey){
		for (let i = 0; i < arr.length; i++) {
			if(arr[i] == defaultActiveKey) {
				return i;
			}
		}
		return -1;
	}
	handleClick(event){
		const {
			onChange
		} = this.props;
		let $this = event.currentTarget;
		let index = $this.getAttribute("data-index");
		let key = $this.getAttribute("data-key");
		onChange(key);
		this.setState({
		 	currentIndex:index,
		 	currentkey:key
		});
	}
	render() {

		return (
			<div className="view-tabs w-reset">
				<div className="tabs-bar">
					{ 
						Children.map(this.props.children,(item,index)=>{
							return(
								<div  
								className={
									classNames(
										"tabs-tab",
										{"active":(item.key==this.state.currentkey)}
									)
								}
								key={`${index}_item`}
								data-index={index}
								data-key={item.key}
								onClick={this.handleClick}
								>
								{item.props.tab}
								</div>
							);
						}) 
					}
					<div 
					className="tabs-tab-line tab-line-animated" 
					style={{
						width:window.innerWidth*1/this.props.children.length,
						transform: `translate3d(${(window.innerWidth/this.props.children.length)*this.state.currentIndex}px, 0px, 0px)`,
						}}>
					</div>
				</div>
				<div className="tabs-content">
					{ 
						Children.map(this.props.children,(item,index)=>{
							return(
								<div 
								data-id={index}
								className="content tab-content-animated"
								style={{transform: `translate3d(-${(window.innerWidth)*this.state.currentIndex}px, 0px, 0px)`}}
								>
								{item}
								</div>
							);
						}) 
					}
				</div>
			</div>
			
		);
	}
}




