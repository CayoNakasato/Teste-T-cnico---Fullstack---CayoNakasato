import { useContext } from "react";
import { UserDataContext } from "../../context/userData";


export const ContainerDashboard = () =>{

  const {userData} = useContext(UserDataContext);

  return (
    <>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p>{userData.fone}</p>
        <p>{userData.registerDate}</p>
    </>
  )
}