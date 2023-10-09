import { useEffect, useState } from "react";

function Counter() {
    //useState --> Valor de estado actual
    const [count, setCount] = useState(0)

    //useEffect
    useEffect(() => {
        console.log('El contador se ha actualizado')
    }, [count])

    //useState --> Función para actualizar el valor de estado
    return (
        <>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count => count + 1)}> Aumentar </button>
        </>
    )
}