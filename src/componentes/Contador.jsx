import { useState } from "react"; //importamos useState

//Se crea el componente 'Contador' y se exporta 
export const Contador = () =>{
    //Se declara una nueva variable estado llamada 'numero' que toma el valor inicial de useState 
    // y la función setNumero 
    const[numero, setNumero] = useState(0); //el contador empieza en cero

    const Sumar = () =>{
        setNumero(numero + 1); //se sumará 1 a useState
    }
    const Restar = () =>{
        setNumero(numero - 1); //se sumará 1 a useState
    }

    return(
        <div>
            
            {/* se trae a la variable 'numero' */}
            <h2>{numero}</h2>
            {/* se llama a la función 'Sumar' por medio de un boton */}
            <button onClick={Sumar}>Sumar</button> <button onClick={Restar}>Restar</button>
        </div>
    )
}