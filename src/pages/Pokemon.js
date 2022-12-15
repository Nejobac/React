import { React, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button,TeamNejo} from "../components";
const PokePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  const handleOnClickAuto = useCallback(() => navigate("/auto", {}, [navigate]));
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <TeamNejo /> <br />
          <br />
          <Button
            infoBoton={"Ir a Usuario"}
            handleOnClick={handleOnClick}
          />{" "}
          <br />
          <Button infoBoton={"Ir a Autos"} handleOnClick={handleOnClickAuto} />{" "}
          <br />
        </div>
      </div>
    </div>
  );
};
export default PokePage;
