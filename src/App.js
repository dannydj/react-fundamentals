import React, { Component, useState } from 'react'; // useState es el hook de la lib de React
import './App.css';

/** Los React Hooks sirven para adicionarle funcionalidad a los componentes funcionales.
 * Un HOOK permite integrarte con el manejo de estado y los métodos del ciclo de vida del componente (componente funcional)
 * 
 * Antes los componentes de clase poseían habilidades que los componentes funcionales no poseían, como la habilidad de conservar 
 * un estado y la habilidad de definir acciones a realizar en el ciclo de vida del componente vía métodos como 'componentDidMount'
 * Con los Hooks se puede adicionar las características antes mencionadas a los componentes funcionales.
 * 
 * Existen 2 tipos de Hooks en React:
 * 1. Hooks del framework que vienen pre-definidos
 * 2. Hooks personalizados que vienen con las librerías
 * 
 * Hay Hooks que destacan a mas de useState (que es para el manejo del state), como useEffect, useContext, useReducer
 * 
 * Hay limitantes de los Hooks como:
 * 1. Solo puedo llamar por ejemplo a useState, dentro del cuerpo de la función pero NUNCA lo puedo llamar dentro de condicionales, ciclos o 
 * cualquier otra estructura que agregue un nuevo nivel de ejecución al código
 */
const Contador = (props) => {
	/** this.state = { contador : 0 } <<<< Así sería si fuera en el constructor de un componente de clase
		* en su lugar utilizamos el hook useState para este componente funcional.
		* A useState recibe como arg un VALOR INICIAL y retorna un ARREGLO con 2 cosas:
		* 1. Una variable que contendrá el valor del estado. Ej: counter
		* 2. Una función para modificar el estado. Ej: setCounter
		*/
	const [counter, setCounter] = useState(0);
	return (<div>
		<p>
			Conteo: {counter}
		</p>
		<button onClick={() => setCounter(counter + 1)}>Aumentar</button>
	</div>);
};

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
