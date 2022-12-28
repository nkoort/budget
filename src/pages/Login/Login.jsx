import { useEffect } from "react";
import { useState } from "react";
import { authAPI } from "../../api/authAPI";
import Login from "../../components/Login/Login/Login";
import Register from "../../components/Login/Register/Register";


const LoginContainer = ({ setAuth }) => {

   // const [auth, setAuth] = useState()

   useEffect(() => {
      authAPI.getAuth(setAuth)
   }, [])
   // console.log(auth)

   const onSubmit = data => {
      // authAPI.login(data.email, data.password)
   };


   return (
      <div >
         <Login />
         <Register />
      </div>
   )
}
export default LoginContainer