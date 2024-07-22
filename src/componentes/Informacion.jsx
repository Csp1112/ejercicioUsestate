import React from "react";
import UseUser from "../hooks/UseUser";

export default function Informacion() {
    const {nombre, edad, correo, genero} = UseUser(); //crear un contexto en la funcion Informacion()

    return(
        <div>
            <h2>Datos de usuario</h2>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Correo: {correo}</p>
            <p>Género: {genero}</p>
        </div>
    )

}