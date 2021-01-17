import React, { Component } from 'react';

class TestItem extends Component {

	render() {
		const {name, description} = this.props;

		return (
		<div className="item" style={{border: "2pt solid black", width:"20%", margin:"auto"}}>
			<h4 style={{color: "grey"}}>{name}</h4>
			<h4 style={{color: "grey"}}>{description}</h4>
		</div>
		);
	}
}
  
export default TestItem;