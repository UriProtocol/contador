import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Contador = () =>{

    const [contador, setContador] = useState(0)
    
    const sumar = () =>{
        let contador1  = contador
        contador1++;

        setContador(contador1)
    }
    const restar = () =>{
        let contador1  = contador
        contador1--;

        setContador(contador1)
    }
    const reiniciar = () =>{
        setContador(0)
    }

    return (
        <>
            <p> Contador : {contador}</p>
            <Button variant="dark" className='bs-button' onClick={sumar}>+</Button>
            <Button variant="secondary" className='bs-button' onClick={restar}>-</Button>
            <Button variant="info" className='bs-button' onClick={reiniciar}>Reiniciar</Button>
        </>
    )
}


export default Contador