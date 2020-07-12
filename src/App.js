import React, {useState} from 'react'
import UserTable from './components/User.Table'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import Ingredientes from './components/filtro';
import Cabezera from './components/Cabezera';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './styles/app.css'
 import './styles/filtro.css'
 import './styles/work.css'
 import Work from './components/workout';
 const App = () =>{
     const usersData = [
       { id:'', nombre: '', apellido: '', identificacion :'', correo:'' },
      ,
     ];
     
     // state
     const [users, setUsers] =useState(usersData);
     
     // agregar
     
     const addUser = (user) =>{
     user.id = uuidv4()
     setUsers([
       ...users,
       user
     ])
     
     }
     
     // eliminar Usuarios
     
     const deleteUser = (id) => {
     
     setUsers(users.filter(user => user.id !== id))
     
     }
     
     // editar
     
     const [editing, setEditing] = useState(false);
     const [currentUser, setCurrenUser] = useState({id: '', name:'',username:'',correo:''});
     
     const editRow = (user) => {
     setEditing(true);
     setCurrenUser({
     id:user.id , name:user.name, username:user.username, correo:user.correo
     })
     }
     
     const updateUser = (id, updateUser) =>{
     setEditing(false);
     
     setUsers(users.map(user => (user.id === id ? updateUser: user)))
     }
     
 
     return (
     <div>
   
        <Cabezera registros={users.length}/> 
       <div className="flex-row">
         <div className="flex-large">
    
       
         {
           editing ?(
             <div className="ml-5">
               <h2>Edit user</h2>
           <EditUserForm
           currentUser={currentUser} 
           updateUser={updateUser}
           />
             </div>
           ) : (
             <div className="ml-3 container">
             <AddUserForm addUser={addUser} />
             </div>
           )
     
         }
         
         </div>
         <div className="flex-large mt-5">
           <UserTable users={users}
            registros={users.length}
            deleteUser={deleteUser}
            editRow={editRow}/>
         </div>
       </div>
     <div className="ml-4">
    <Ingredientes /> 

    <Work /> 
     </div> 
     </div>
     );
     
     
     
     }

export default App