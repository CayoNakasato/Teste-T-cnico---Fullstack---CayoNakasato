import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/home";
import { UpdateClientPage } from "../pages/updateClient";

function Paths() {
    return (
      <Routes>
        <Route exact path={"/"} element={<Homepage/>}/>
        <Route path={"/updateClient/:id"} element={<UpdateClientPage/>}/>
      </Routes>
    );
  }
  
export default Paths;