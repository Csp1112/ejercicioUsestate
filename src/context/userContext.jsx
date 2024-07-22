import { createContext } from "react";

const userContext = createContext({
    nombre:null,
    edad:null,
    correo:null,
    genero:null,
});

export default userContext;