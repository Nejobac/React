import React from "react";

const TableCar = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h2 align="center">Tabla de Autos</h2>
        </div>
        <div class="card-body">
          <div class="container-fluid">
            <table class="border table table-striped table-hover container-fluid">
              <thead>
                <tr>
                  <th scope="col">Marca</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Color</th>
                  <th scope="col">Año</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">...</th>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>
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
                          <a class="dropdown-item" href="#">
                            Actualizar
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Eliminar
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">...</th>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>
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
                          <a class="dropdown-item" href="#">
                            Actualizar
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Eliminar
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">...</th>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>
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
                          <a class="dropdown-item" href="#">
                            Actualizar
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Eliminar
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableCar;
