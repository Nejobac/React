import React from "react";
import Ampharos from "../asset/img/181.png";
import Scyther from "../asset/img/123.png";
import Toxicroak from "../asset/img/454.png";
import Houndoom from "../asset/img/229.png";
import Azumarill from "../asset/img/184.png";
import Flygon from "../asset/img/330.png";

const TeamNejo = () => {
  return (
    <div class="row">
      <div class="col">
        <div class="card h-100 ">
          <img
            src={Ampharos}
            alt=""
            class="img-fluid"
            style={{
              zIndex: 0,
              width: "20%",
            }}
          ></img>
          <div class="card-body">
            <h5 class="card-title">Ampharos</h5>
            <p class="card-text">This is a short card.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">N.° 181</small>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img
            src={Scyther}
            alt=""
            class="img-fluid"
            style={{
              zIndex: 0,
              width: "20%",
            }}
          ></img>
          <div class="card-body">
            <h5 class="card-title">Scyther</h5>
            <p class="card-text">This is a short card.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">N.° 123</small>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img
            src={Houndoom}
            alt=""
            class="img-fluid"
            style={{
              zIndex: 0,
              width: "20%",
              opacity: "100%",
            }}
          ></img>
          <div class="card-body">
            <h5 class="card-title">Houndoom</h5>
            <p class="card-text">This is a short card.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">N.° 229</small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
      <br/>
          <div class="card h-100">
            <img
              src={Azumarill}
              alt=""
              class="img-fluid"
              style={{
                zIndex: 0,
                width: "20%",
              }}
            ></img>
            <div class="card-body">
              <h5 class="card-title">Azumarill</h5>
              <p class="card-text">This is a short card.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">N.° 184</small>
{/*               
              <a class="dropdown-item"
                            href="#"
                            onClick={() => {
                              deleteUser(usuario.correo);
                            }}
                          >
                            Eliminar
                          </a> */}
            </div>
          </div>
        </div>

        <div class="col">
      <br/>
          <div class="card h-100">
            <img
              src={Toxicroak}
              alt=""
              class="img-fluid"
              style={{
                zIndex: 0,
                width: "20%",
              }}
            ></img>
            <div class="card-body">
              <h5 class="card-title">Toxicroak</h5>
              <p class="card-text">This is a short card.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">N.° 454</small>
            </div>
          </div>
        </div>

        <div class="col">
      <br/>
          <div class="card h-100">
            <img
              src={Flygon}
              alt=""
              class="img-fluid"
              style={{
                /* 
            position: "absolute", */
                zIndex: 0,
                width: "20%" /* 
            height: "100%",
            opacity: "100%", */,
              }}
            ></img>
            <div class="card-body">
              <h5 class="card-title">Flygon</h5>
              <p class="card-text">This is a short card.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">N.° 330</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamNejo;
