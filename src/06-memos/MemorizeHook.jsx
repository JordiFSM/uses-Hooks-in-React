
import { useMemo } from 'react';
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (cont) => {
    for (let index = 0; index < cont; index++) {
        console.log('ahi vamos');
    }
    return `Hola ${cont}`;
}

export const MemoHook = () => {
    const { counter, increment } = useCounter(1000);

    
    //este hook guarda en memoria procedimientos pesados y se vuelve a renderizar 
    //cuando se modifique el elemento que se especifique en este caso counter
    const memorizeValue = useMemo( () => heavyStuff(counter), [counter]);


    return (
        <>
            <h1>Counter:{counter}</h1>
            <hr/>

            <button 
                className='btn btn-primary'
                onClick={ () => increment()}
            >
                +1
            </button>
        </>
    )
}
