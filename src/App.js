import React, { Component } from 'react';
import './App.css';

/** El estado "state" es un término común en programación. El estado de un elemento, componente u objeto
 * Un programa es statefull, es decir, que puede guardar un estado cuando está configurado para RECORDAR los cambios, modificaciones y los eventos
 * sufridos a lo largo de su uso.
 * 
 * En React, los componentes pueden guradar un estado interno para sus propiedades y las modificaciones que estas sufran. Esto permite
 * actualizar la info que el usuario envíe, guardar datos que haya descargado, etc. 
 * 
 * El state es todo lo que puede sufrir una modificación dentro de un componente.
 * 
 * Las props NO se pueden modificar, pero lo que SI se puede modificar es el estado del componente.
 * 
 * Tanto componentes funcionales como de clase pueden manipular el estado. (A partir de react 16.8, antes solo podían los componentes de clase)
 */

class Contador extends Component {
	/** El primer paso para que mi componente guarde un estado es que tengo que inicializar los valores iniciales del estado dentro del constructor.
	 * A diferencia del componente funcional, el constructor es quien recibe las props
	 */
	constructor(props) {
		// Parte del primer paso es: Enviamos las props al constructor del padre (es decir de la clase Component de la que hereda)
		super(props);

		// Inicializo el estado (es un objeto json)
		this.state = {
			contador: 0
		};
	}

	aumentar = () => { this.setState({ contador: this.state.contador + 1 }) };

	/** Para asignar un nuevo valor al estado se utiliza el método setState */
	render = () => (
		<div>
			<p>{this.state.contador}</p>
			<button onClick={this.aumentar}>Aumentar</button>
		</div>
	);
}

class App extends Component {
	render() {
		return (
			<div>
				<Contador />
			</div>
		);
	}
}

export default App;
