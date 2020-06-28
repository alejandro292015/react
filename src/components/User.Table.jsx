import React from 'react';

const UserTable = () => {

  const [equipo, setEquipo] = React.useState([]);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      'https://reac-api-rest.000webhostapp.com/api/read.php'
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
              <button type="button"  className="btn btn btn-success ml-2">Editar</button>
              <button type="button" class="btn btn btn-danger ml-2">Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
