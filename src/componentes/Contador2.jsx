import React, {useState,useEffect} from "react";

export function Contador2(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        //actualiza el titulo del documento usando la API del navegador
        document.title = `Actualizamos ${count} times`; 
    });
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>
                Click me
            </button>
        </div>
    );
}