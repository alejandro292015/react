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
       { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
       { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
       { id: uuidv4(), name: 'Ben', username: 'benisphere' },
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
     const [currentUser, setCurrenUser] = useState({id: null, name:'',username:''});
     
     const editRow = (user) => {
     setEditing(true);
     setCurrenUser({
     id:user.id , name:user.name, username:user.username
     })
     }
     
     const updateUser = (id, updateUser) =>{
     setEditing(false);
     
     setUsers(users.map(user => (user.id === id ? updateUser: user)))
     }
     
 
     return (
     <div className="container">
        <Cabezera /> 
       <div className="flex-row">
         <div className="flex-large">
    
       
         {
           editing ?(
             <div>
               <h2>Edit user</h2>
           <EditUserForm
           currentUser={currentUser} 
           updateUser={updateUser}
           />
             </div>
           ) : (
             <div>
             <h2>Add user</h2>
             <AddUserForm addUser={addUser} />
             </div>
           )
     
         }
         </div>
         <div className="flex-large">
           <UserTable users={users}
            deleteUser={deleteUser}
            editRow={editRow}/>
         </div>
       </div>
      
    <Ingredientes /> 
    <Work /> 
     </div>
     );
     
     
     
     }

export default App