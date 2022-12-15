import React from "react";
import DropDown from "./DropDown";
//se reciben los props enviados desde home para ser usados más adelante
const TableUser = ({ usuarios, deleteUser, setUsuarioEditado }) => {
  return (
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h2 align="center">Tabla de Usuarios</h2>
        </div>
        <div class="card-body">
          <table class="border table table-striped table-hover container-fluid">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/*//Iteramos usuarios con .map, a cada elemento de usuarios lo 
              llamaremos usuario y realizaremos lo siguiente =>*/}
              {usuarios.map(usuario => (
                <tr>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.correo}</td>
                  <td type="password">{usuario.password}</td>
                  <td>
                    <DropDown datos={usuario}
                      setUsuarioEditado={setUsuarioEditado}
                      deleteData={deleteUser} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TableUser;
