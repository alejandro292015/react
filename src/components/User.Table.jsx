import React, { useReducer } from 'react';
import { BsFillDashCircleFill, BsPencilSquare} from "react-icons/bs";

const UserTable = (props)  => {

    console.log('props',props.users);
    
    return (
          <table class="table table-dark">
    <thead>
      <tr>
        <th>Nombre </th>
        <th>Nombre de usuario</th>
        <th>Correo</th>
        <th>Accion</th>
        <th><i class="fa fa-circle-thin" aria-hidden="true">{props.registros}</i></th>
      </tr>
    </thead>
    <tbody>
        {
            props.users.length > 0 ?
            props.users.map(user =>(
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.correo}</td>
                <td>
                <button className="btn btn-success"
                onClick ={
                    () => {props.editRow(user)}
                }
                ><BsPencilSquare /> Editar</button>
                <button 
                className="btn btn-danger ml-2"
                onClick ={() => {props.deleteUser(user.id)}}
                > <BsFillDashCircleFill /> Eliminar
                </button>
                
                </td>
            </tr>

            )) : (
                <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )
        }
        
    </tbody>
  </table>
  
     );
}

export default UserTable;