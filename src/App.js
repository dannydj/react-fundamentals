import React, { Component } from 'react';
import './App.css';

class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [
				'Mi primer coponente en React',
				'Introducción a React',
				'Qué es React'
			]
		};
	}

	render() {
		return (
			<div>
				{
					this.state.articles.map((title) => <p>{title}</p>)
				}
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<Blog />
			</div>
		);
	}
}

export default App;
