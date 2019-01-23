import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

class App extends Component {
	state = {  //property of the Component class. If values change, react will update the DOM
		persons: [
			{ name: 'Michele', age: 28},
			{ name: 'Bill', age: 31},
			{ name: 'Bob', age: 22}
		],
		otherState: "some other value"
	}

	switchNameHandler = () => {
		// console.log('Was clicked!');
		this.setState({
			persons:[
				{ name: 'Mike', age: 28},
				{ name: 'Bill', age: 31},
				{ name: 'Bob', age: 24}
			]
		})
	}

	render() {
		return (
			<div className="App">
				<h1> Hi, I'm a React app</h1>
				<p>This is working</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person 
					name={this.state.persons[0].name} 
					age={this.state.persons[0].age} 
					func={this.switchNameHandler}/>
				<Person 
					name={this.state.persons[1].name} 
					age={this.state.persons[1].age}>My hobby is Swimming</Person>
				<Person 
					name={this.state.persons[2].name} 
					age={this.state.persons[2].age}/>
			</div>
		);
		// return React.createElement('div',{className:'App'},
		// 	React.createElement('h1',null,'Hi, I\'m a React app'));
	}
}

export default App;
