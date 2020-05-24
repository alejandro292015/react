import React from 'react'
import { useForm } from 'react-hook-form'

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
        <button>Agregar un nuevo usuario</button>
      </form>
    )
}
export default AddUserForm