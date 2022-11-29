import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Homepage } from "../pages/home";

function Paths() {
    return (
      <Routes>
        <Route exact path={"/"} element={<Homepage/>}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
      </Routes>
    );
  }
  
export default Paths;