import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'stride',
        email: 'user@google.com'
    })

    const {username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        });
    }

    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input 
            type="text"    
            className="form-control" 
            name="username"
            placeholder= 'Username'
            value= {username}
            onChange={ onInputChange }
        />
        <input 
            type="email" 
            className="form-control mt-2" 
            placeholder= 'user@google.com'
            name="email"
            value= {email}
            onChange={ onInputChange }
        />
        {
            (username === 'strider2') && <Message/>
        }
    </>

  )
}
