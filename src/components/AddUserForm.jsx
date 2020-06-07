import React from 'react'
import { useForm } from 'react-hook-form'
import { BsFillCapslockFill, BsPencilSquare} from "react-icons/bs";


const AddUserForm = (props) => {

    const {register, errors, handleSubmit} = useForm();
     
    const onSubmit = (data, e) => {
         
        props.addUser(data)

        e.target.reset();
       
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type="text" name="name" ref={
            register({
                required: {value:true, menssage:'campo requerido'}
            })
        }  />
        <div>
            {errors?.name?.menssage}
        </div>
        <label>Nombre de usuario</label>
        <input type="text" name="username" ref={
            register({
                required:{value:true,menssage:'campo requerido'}
            })}
             />
         <div>
            {errors?.username?.menssage}
        </div>

        <label>Correo</label>
        <input type="text" name="correo" ref={
            register({
                required:{value:true,menssage:'campo requerido'}
            })}
             />
         <div>
            {errors?.username?.correo}
        </div>
        <button className="btn btn-success"><BsFillCapslockFill />
        <span className="mt-2  ml-2">
         Agregar usuario
         </span>
         </button>
      </form>
    )
}
export default AddUserForm