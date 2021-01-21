import React, {Component} from 'react';

class TodoItem extends Component {

  render() {
		const {index, task, isComp, handleClick} = this.props;
		let col;
		if(isComp) {
			col = "red";
		} else {
			col = "grey"
		}

    return(
			<div className="item" style={{border: "2pt solid black", width:"20%", margin: "auto", marginBottom:"20px", marginTop:"20px"}} >
				<h4 onClick={(x) => handleClick(index)} style={{color: col, textDecoration: (isComp) ? "line-through" : ""}}>{task}</h4>
			</div>
		);
  }
}

export default TodoItem;