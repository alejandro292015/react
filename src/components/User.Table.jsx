import React, { useReducer } from 'react';
const UserTable = (props)  => {

    console.log('props',props.users);
    
    return (
          <table>
    <thead>
      <tr>
        <th>Nombre </th>
        <th>Nombre de usuario</th>
        <th>accion</th>
      </tr>
    </thead>
    <tbody>
        {
            props.users.length > 0 ?
            props.users.map(user =>(
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                <button className="button muted-button"
                onClick ={
                    () => {props.editRow(user)}
                }
                >Editar</button>
                <button 
                className="button muted-button ml-2"
                onClick ={() => {props.deleteUser(user.id)}}
                >Eliminar
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