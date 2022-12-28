import { useForm } from "react-hook-form";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = ({ }) => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = data => {
      // authAPI.login(data.email, data.password)
   };


   return (
      <div >
         <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Control type="email" placeholder="Пошта" {...register("email", { required: true })} />
            <Form.Control type="password" placeholder="Пароль" {...register("password", { required: true })} />
            <Button variant="primary" type="submit">
               Реєстрація
            </Button>
         </form>
      </div>
   )
}
export default Register