import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";

import { UserDataContext } from "../../context/userData";


export const Form = () =>{

  const {getUserData} = useContext(UserDataContext);

  const navigate = useNavigate()

  const formSchema = yup.object().shape({
    name: yup.string().required("Field Required!"),
    email: yup.string().required("Field Required!"),
    fone: yup.string().required("Field Required!")
  });

  const {
    register,
    handleSubmit
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (data) =>{
    let actualDate = new Date();

    data.registerDate = actualDate.toString()
    navigate("/dashboard")
    getUserData(data)

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

        <label>Nome completo:</label>
        <input
         type="text"
         name="name"
         {...register("name")}
          
        />

        <label>Email:</label>
        <input
         type="email"
         name="email"
         {...register("email")}
        />

        <label>Telefone:</label>
        <input
         type="text"
         name="fone"
         placeholder="(67)91234-5678"
         {...register("fone")}
        />

        <button type="submit">Cadastrar</button>
    </form>
  )
}