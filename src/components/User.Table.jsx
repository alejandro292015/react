import React, { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2';

 


export default function UserTable (props) {
  const url = "https://api-new-03.herokuapp.com/delete.php";
 
  const DELETE_POST = 'DELETE_POST';

  const [data, setdata]=useState( 
    {
      id: ''
    }
  

)

// Axios.delete(url,id)
// .then(res => console.log(res.data));
     
     function submit(id){
       debugger
         
       data.id= id 
      
      
        fetch(url ,{
          method: "DELETE",         
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8 '},
          body: JSON.stringify(data)
        })
           .catch(err => console.log(err)
        )
            Swal.fire({
              icon: 'success',
              title: 'Operacion Exitosa',
              text: 'Eliminados Correctamente',
            })
             
          }
        

 

  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      'https://api-new-03.herokuapp.com/read.php'
    );
    const users = await data.json();
    setEquipo(users);
  };
  
  return (
<table class="table table-striped table-dark">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Identificacion</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {equipo.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.identificacion}</td>
            <td>{item.correo}</td>
            <td>
              <button type="button"  onClick= {()=>submit(item.id)} className="btn btn btn-success ml-2">Editar</button>
              <button type="button" onClick= {()=>submit(item.id)} class="btn btn btn-danger ml-2">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    
  );
  
};

