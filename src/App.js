import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1> Hi, I'm a React app</h1>
				<p>This is working</p>
				<Person name="Michele" age="28"/>
				<Person name="Bill" age="31">My hobby is Swimming</Person>
				<Person name="Bob" age="22"/>
			</div>
		);
		// return React.createElement('div',{className:'App'},
		// 	React.createElement('h1',null,'Hi, I\'m a React app'));
	}
}

export default App;
