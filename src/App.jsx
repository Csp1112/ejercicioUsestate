// import { useState } from 'react'
import './App.css'
import { Contador } from './componentes/Contador'
import { Contador2 } from './componentes/Contador2'
import { Mensaje } from './componentes/Mensaje'
import UserContext from './context/userContext'
import Informacion from './componentes/Informacion'



function App() {
// const [count, setCount] = useState(0)

  const datosUser = {
    nombre: 'Catalina Sánchez',
    edad: 25,
    correo: 'catalinasanchezprado@hotmail.com',
    genero: 'Femenino',
  }

  return (
    <UserContext.Provider value={datosUser}>
    <div className='App'>
      <h1>Ejemplo del contexto</h1>
      <Informacion/>
    </div>
    <Contador/>
    <Contador2/>
    <Mensaje/>
    </UserContext.Provider>
    
  )
}

export default App;
