import React from 'react'
import { useForm } from 'react-hook-form'
import { BsFillCapslockFill, BsPencilSquare} from "react-icons/bs";


const EditUserForm = (props) => {

    

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });
    
    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)
    setValue('correo', props.currentUser.correo)
     
    const onSubmit = (data, e) => {
        
         data.id = props.currentUser.id
        
        props.updateUser(props.currentUser.id,data)
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
            {errors?.correo?.menssage}
        </div>
        <button className="btn btn-success"><BsPencilSquare />
        <span className="mt-2  ml-2">
        Editar usuario

        </span>
        </button>
      </form>
    )
}
export default EditUserForm