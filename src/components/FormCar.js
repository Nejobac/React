import React from "react";
import Button from "./Button";

const FormCarComponent = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h1 align="center">Formulario de Auto</h1>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="Marca" class="form-label">
                Marca
              </label>
              <input
                type="text"
                class="form-control"
                id="Marca"
                placeholder="Marca"
              />
            </div>
            <div class="mb-3">
              <label for="Modelo" class="form-label">
                Modelo
              </label>
              <input
                type="text"
                class="form-control"
                id="Modelo"
                placeholder="Modelo"
              />
            </div>
            <div class="mb-3">
              <label for="Color" class="form-label">
                Color
              </label>
              <input
                type="text"
                class="form-control"
                id="Color"
                placeholder="Color"
              />
            </div>
            <div class="mb-3">
              <label for="año" class="form-label">
                Año
              </label>
              <input type="number" class="form-control" id="año" />
            </div>
            <Button infoBoton={'Enviar formulario'} />
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormCarComponent;
