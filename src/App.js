import React, { Component } from 'react';
import './App.css';

class Blog extends Component {
	/** Una buena práctica de programación es no delegar muchas tareas al constructor. El constructor NO debe estar cargado de código.
	 * Mientras más código se le cargue al constructor, más dependiente se vuelve de otros, es más difícil de probar, más difícil de reemplazar, etc.
	 * 
	 * En React existen LOS MÉTODOS DEL CICLO DE VIDA, se tratan de métodos especiales que tiene un componente y se van a ejecutar en puntos claves del
	 * ciclo de vida del componente
	 *  */
	constructor(props) {
		super(props);
		this.state = {
			articles: []
		};
	}

	/** componentDidMount: Este es un método del ciclo de vida. Este método se ejecutará tan pronto el componente esté listo y se haya colocado en la interfaz (en la página web) */
	componentDidMount = () => {
		/** Encadeno promesas */
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({ articles: data })
			});
	};

	render() {
		return (
			<div>
				{
					this.state.articles.map((article) => <p key={article.id}>{article.title}</p>)
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
