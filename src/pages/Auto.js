import {React,  useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormCarComponent, Button, TableCar } from "../components";

const AutoPage = () => {
 
    
        const navigate = useNavigate();
        const handleOnClick =useCallback(()=>navigate("/",{},[navigate]))
    return (

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <FormCarComponent /> <br/>
          <Button infoBoton={'Ir a Usuario'}handleOnClick={handleOnClick}/> <br />
        </div>
        <div class="col">
          <TableCar /> 
        </div>
      </div>
    </div>
  );
};
export default AutoPage;
