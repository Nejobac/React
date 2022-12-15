import React, { useState, useEffect } from "react";
import Imagen3 from "../asset/img/senas.jpeg";
import "./FormUser.css";
import Button from "./Button";

const initialUsuario = {
  nombre: "",
  apellido: "",
  correo: "",
  password: ""
}
const FormUserComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
  const [state, setState] = useState(initialUsuario);
  const { nombre, apellido, correo, password } = state;
  //el hook useEffect siempre está pendiende de si la variable que viene dentro
  //de sus corchetes cambia, él deberá hacer todo lo que tiene en su funcion dentro
  //consideracion es que useEfect siempre corre al menos 1 vez cuando la pagina carga por primera vez
  useEffect(() => {
    if (usuarioEditado !== null) {
      setState(usuarioEditado)
    } else {
      setState({
        nombre: "",
        apellido: "",
        correo: "",
        password: ""
      })
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    //esta funcion se llama cada vez que nosotros escribimos algo
    // en algun input de nuestra pagina 
    const changedFormValue = {
      //va a mantener los 
      ...state,
      [e.target.name]: e.target.value
    }
    setState(changedFormValue);
  }
  return (
    <div class="tarjeta container" id="tarjeta">
      <div class="card">
        <img
          src={Imagen3}
          alt=""
          class="img-fluid"
          style={{
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            opacity: "100%",
          }}
        ></img>
        <div class="card-header" style={{ zIndex: 1 }}>
          <h1 align="center">Formulario de Usuario</h1>
        </div>
        <div class=" card-body" style={{ zIndex: 0, opacity: "80%" }}>
          <form class="border">
            {usuarioEditado !== null ? <h1>Editar usuario</h1> : <h1>Ingrese usuario</h1>}
            <div class="mb-3" id="Nombre">
              <label for="Nombre" class="form-label">
                Nombre
              </label>
              <input
                type="text"
                class="form-control"
                id="Nombre"
                placeholder="Nombre"
                //para que mi formulario sea capaz de crear un usuario debemos agregarle a los input
                //lo siguiente
                name="nombre"
                value={nombre}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-3">
              <label for="Apellido" class="form-label">
                Apellido
              </label>
              <input
                type="text"
                class="form-control"
                id="apellido"
                placeholder="Apellido"

                name="apellido"
                value={apellido}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-3">
              <label for="Correo" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="Correo"
                placeholder="email@ejemplo.com"
                name="correo"
                value={correo}
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-3">
              <label for="Password" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="Password"
                name="password"
                value={password}
                onChange={handleInputChange} />
            </div>
            {/*             <Button infoBoton={'Enviar formulario'}/>
 */}            {usuarioEditado !== null ? (
              <button
                type="button"
                class="btn btn-success"
                onClick={() => userEdit(state)}
              >
                Editar usuario
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-success"
                onClick={() => userAdd(state)}
              >
                Ingresar usuario
              </button>
            )}
            {usuarioEditado !== null ? (
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => setUsuarioEditado(null)}
              >
                Cancelar
              </button>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormUserComponent;
