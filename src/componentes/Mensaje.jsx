import { useEffect, useState } from "react";

export const Mensaje = ()=>{
    const [msj, setMsj] = useState('');


    //se crea una funcion con un evento 'e' que captura lo que se ingresa en msj
    const Texto = (e) =>{
        setMsj(e.target.value); //cuando se ingrese un mensaje se actualiza
    }

    useEffect(()=>{

        console.log('Bienvenido a clase, el componente está montado');

        return () => {
            console.log('Terminó la clase, el componente está desmontado');
        }

    },[]); //se captura algo en un arreglo '[]'

    
    useEffect(()=>{

        console.log('El texto ingresado esta siendo modificado');

    },[msj]); //se captura algo en un arreglo '[]'


    return(
        <div>
            {/* se captura lo que se ingresa y se coloca en useState */}
            <input type="text" onChange={Texto}/> 
            <p>{msj}</p>
        </div>
    )
};