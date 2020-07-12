import React, { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2';


const EditUserForm = (props) => {

    
    const url = "https://api-new-03.herokuapp.com/update.php"

    const [data, setdata]=useState(
          {  id : "",
            nombre: "",
            apellido: "",
            identificacion: "",
            correo: "",
        }
        )
        
        function submit(e){
            debugger
            e.preventDefault()
            Axios.post(url,JSON.stringify(data))
            .then(res => {
                res.data = data;
                Swal.fire({
                   icon: 'success',
                   title: 'Operacion Exitosa',
                   text: 'Datos Insertados Correctamente',
                 })
               //  fetch(Url, {
               //     method: 'POST', // or 'PUT'
               //     body: JSON.stringify(data), // data can be `string` or {object}!
               //     headers:{
               //       'Content-Type': 'application/json'
               //     }
               //   }).then(res => res.json())
               //   .catch(error => console.error('Error:', error))
               //   .then(response => console.log('Success:', response));
               
                
       })
    }
   
    function handle(e){
      
       const newData = {...data};
       newData[e.target.id] = e.target.value;
       setdata(newData)
    }
    return (
        <div className="container">
        <br />
            <form onSubmit= {(e)=>submit(e)}>
            <div className="form-group">
            <label for="nombre">Nombre</label>
            <input onChange={(e)=>handle(e)}  value={data.nombre} type="text" name="nombre" className="form-control" id="nombre" placeholder="nombre" />
            <label for="apellido">Apellido</label>
            <input onChange={(e)=>handle(e)} value={data.apellido} type="text" name="apellido" className="form-control" id="apellido" placeholder="apellido" />
            <label for="identificacion">Identificacion</label>
            <input onChange={(e)=>handle(e)} value={data.identificacion} type="text" name="identificacion" className="form-control" id="identificacion" placeholder="identificacion" />
            <label for="correo">Correo</label>
            <input onChange={(e)=>handle(e)} value={data.correo} type="text" name="correo" className="form-control" id="correo" placeholder="correo" />
            </div>
   
            <button type="submit" className="btn-success"><i class="fa fa-plus-circle" aria-hidden="true"></i>Agregar </button>
            </form>
        </div>
    )
}
export default EditUserForm