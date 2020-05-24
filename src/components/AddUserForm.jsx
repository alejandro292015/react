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
        <label>Name</label>
        <input type="text" name="name" ref={
            register({
                required: {value:true, menssage:'campo requerido'}
            })
        }  />
        <div>
            {errors?.name?.menssage}
        </div>
        <label>Username</label>
        <input type="text" name="username" ref={
            register({
                required:{value:true,menssage:'campo requerido'}
            })}
             />
         <div>
            {errors?.username?.menssage}
        </div>
        <button>Add new user</button>
      </form>
    )
}
export default AddUserForm