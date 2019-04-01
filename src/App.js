import React, { Component } from 'react';
import './App.css';

/** El componente que acabo de generar es un componente funcional, así como este, existe su alternativa basada en javascript llamado
 * componente de clase (cada una de estas alternativas tiene sus pro y sus contras, ademas de sus limitaciones)
 */
const MyComponent = () => (
	<p>Hola</p>
);

/** El componente de clase debe heredar de la clase Component de la lib de react, lo que le distingue del componente funcional es que tiene 
 * un método render que retorna lo que debe mostrar este componente o lo que debe representar dentro de la página web
 */
class MyClassComponent extends Component {
	render() {
		return <p>Hola soy de la clase</p>;
	};
}

/** Cohesión: Formar un todo unido, donde no se distinguen las partes que lo conforman. En un sistema hay que evitar desarrollar sistemas que tengan
 * elementos que dependan entre ellos, es decir, debo desarrollar elementos independientes entre si, que NO exista cohesión entre ellos.
 * 
 * El desarrollo basado en componentes es útil en este caso, se busca que c/componente sea independiente entre si.
 * El siguiente ememplo rompe esta regla, es decir los componentes A y B utilizan la misma variable, lo cual está mal. Cada componente no debe utilizar
 * información externa a el mismo.
 */
let name = 'Danny';

const A = () => (<p>Hola {name}</p>);

const B = () => (<p>{name}: 10</p>);

/** Para evitar esto se utilizan las props. El uso de props permite que un componente padre pase el valor a sus componentes hijos.
 * Reescribiendo el anterior código, pero ahora utilizando props. En un componente funcional, las props se reciben como un ÚNICO argumento de la función.
 * Todas las propiedades que son enviadas al componente son "claves" o atributos del objeto props.
 * 
 * Los props son READ-ONLY, es decir, un componente no puede modificar sus propias props, solo las puede leer. Cuando el valor que se le pasa vía props
 * a un componente se actualiza o se modifica, el componente se actualiza automáticamente
 */
const A2 = (props) => /* (<p>Hola {props.name}</p>) */ (props.children);

const B2 = (props) => (<p>{props.name}: 10</p>);

/** Para utilizar cualquiera componente (sea funcional o de clase) se lo incluye con <> */
class App extends Component {
	render() {
		let name2 = 'Danny';
		return (
			<div>
				<MyComponent />
				<MyClassComponent />
				<A />
				<B />
				<A2 name={name2} >
					<p>Hola soy un componente hijo</p>
					<p>Hola soy otro componente hijo</p>
				</A2>
				<B2 name={name2} />
			</div>
		);
	}
}

export default App;
