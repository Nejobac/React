import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {FormUserComponent,Button,TableUser,} from "../components";

const usuario=[
  {
  nombre:'Joseph',
  apellido:'Joestar',
  correo:'jo.jo@gmail.com',
  password:'jojostar'
},
  {
  nombre:'Josuke',
  apellido:'Higashikata',
  correo:'jojo@gmail.com',
  password:'jojoshika'
},
];
/*Forma específica de escribir el state de acuerdo al contexto*/
/* const [objeto, setObjeto] = useState(initialObjeto);
 *//* useState() realiza la copia(virutualización) del valor entregado */
const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClickAuto =useCallback(()=>navigate("/auto",{},[navigate]))
    const handleOnClickPoke =useCallback(()=>navigate("/pokemon",{},[navigate]))
    /* En este momento state vale lo mismo que usuario
    genera una funcion setteadora que me va a permitir cambiar los datos de usuario
    sin afectarlo directamente(setState) */
    const [state,setState] = useState(usuario)

    const[usuarioEditado,setUsuarioEditado]=useState(null);
    const userDelete=(correoUsuario)=>{
      /* esta funcion fuktra mi lista de usuarios */
      const changeUser=state.filter(usuario=>usuario.correo != correoUsuario);
      setState(changeUser);
/* al momento de ocupar la funcion setStatre, 
yo le voy a cambiar el valor temporal a mis usuarios*/   
/*   setState(changeUser) */
    }
//******************FUNCION QUE NOS SIRVE PARA AGREGAR UN NUEVO USUARIO *********** */
    const userAdd=(usuario)=>{
      const addUsuario=[
        //mantenme los datos que tengo en user y agregame lo que yo te entrego aqui(usuario)
        ...state,usuario
      ]
      setState(addUsuario)
    }
    //************FUNCION PARA EDITAR ACORDE A SI ESTÁ MODIFICADO EL CORREO*********** */
    const userEdit=(usuarioEditado)=>{
      const editState = state.map(usuario=>(usuario.correo===usuarioEditado.correo ?
        usuarioEditado: usuario))
        setState(editState)
    }
    /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <FormUserComponent 
          userAdd={userAdd} 
          usuarioEditado={usuarioEditado} 
          setUsuarioEditado={setUsuarioEditado} 
          userEdit={userEdit}/> <br />
          <Button 
          infoBoton={'Ir a Autos'} 
          handleOnClick={handleOnClickAuto}/> <br/>         
          <Button 
          infoBoton={'Ir a Team Nejo'} 
          handleOnClick={handleOnClickPoke}/>
        </div>
        <div class="col">
          {/* se le envian los props que creamos a la tabla de usuario */}
          <TableUser usuarios={state} deleteUser={userDelete} setUsuarioEditado={setUsuarioEditado}/> <br />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
