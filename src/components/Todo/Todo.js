import React, {Component} from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos: []
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		this.setState({
			todos: [
				{
					"task": "take out trash",
					"isComplete": false
				},
				{
					"task": "feed dog",
					"isComplete": false
				},
				{
					"task": "water plants",
					"isComplete": false
				}
			]
		});
	}

	handleClick(id) {  
		let newTodos = {...this.state.todos};
		let todo = newTodos[id];
		todo.isComplete = !todo.isComplete;
		newTodos[id] = todo; 
		this.setState({newTodos})
	}

	render() {
		var stateObj = this.state.todos;
		const todoItems = stateObj.map(x => {
			const index = stateObj.indexOf(x);
			return <TodoItem index={index} key={index} task={x.task} isComp={x.isComplete} handleClick={this.handleClick} />
		});
		return(
			<div>
				<h1>Todos:</h1>
				{todoItems}
			</div>
		);
	}
}

export default Todo;