import React from "react";

const DropDown = ({ datos, deleteData, setUsuarioEditado }) => {
  return (
    <div class="btn-group">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Accion
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Enviar
          </a>
        </li>
        <li>
          <a class="dropdown-item"
            onClick={() => {/* 
            verificar si es un auto o un usuario, si es un auto eliminar los datos del auto y sino del usuario.- */
              setUsuarioEditado(datos);
            }}>
            Actualizar
          </a>
        </li>
        <li>
          <a class="dropdown-item"
            onClick={() => {/* 
            verificar si es un auto o un usuario, si es un auto eliminar los datos del auto y sino del usuario.- */
              deleteData(datos.correo);
            }}
          >
            Eliminar
          </a>
        </li>
      </ul>
    </div>

  )
}

export default DropDown;


