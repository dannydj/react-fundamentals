import React, { Component } from 'react';
import './App.css';

class MyForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	/** Lo que esta función hace es modificar el state cuando haya cambios en los inputs del formulario.
	 * Con un mismo método se puede sincronizar cualquier cambio en cualquier control con cualquier propiedad del state
	 */
	syncChanges = (value, property) => {
		let state = {};
		state[property] = value;
		this.setState(state);
	};

	submitForm = () => {
		console.log(this.state);
	}

	/** El evento onChange tiene una funcion cuyo argumento es el evento (recibe el evento). En base al evento puedo obtener el valor del control (del input) es
	 * a traves de target.value
	 * 
	 * ev.target.value se desgloza asi:
	 * event: es un objeto que contiene toda clase de datos acerca del evento que acaba de dispararse
	 * target: es una propiedad del evento que contiene el elemento que disparó ese evento o en el que suceció el evento
	 * value: cotiene el valor del cambio que hizo el usuario (lo que ha escrito), lo toma de la propiedad value pero del input
	 *  */
	render() {
		return (
			<form>
				<input onChange={(ev) => { this.syncChanges(ev.target.value, 'email') }}
					type="email" value={this.state.email} placeholder="Email" />
				<input onChange={(ev) => { this.syncChanges(ev.target.value, 'password') }}
					type="password" value={this.state.password} placeholder="*****" />
				<div>
					<input onClick={this.submitForm}
						type="submit" value="Iniciar sesión" />
				</div>
			</form>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<MyForm />
			</div>
		);
	}
}

export default App;
