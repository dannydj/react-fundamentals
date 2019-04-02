import React, { useState } from 'react'; // Aunque este es un componente funcional, es IMPORTANTE IMPORTAR la librería de REACT al inicio de la declaración (o al inicio del archivo)

const Counter = (props) => {
	const [counter, setCounter] = useState(0);
	return (<div>
		<p>
			Conteo: {counter}
		</p>
		<button onClick={() => setCounter(counter + 1)}>Aumentar</button>
	</div>);
};

export default Counter;