import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user } = useContext(UserContext);

  return (
      <>
          <h1>Login App</h1>
          <hr/>
  
          <pre> {JSON.stringify(user) } </pre>
      </>
    )
  }