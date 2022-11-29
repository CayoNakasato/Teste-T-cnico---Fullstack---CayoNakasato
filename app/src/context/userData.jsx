import { createContext, useState} from "react";

export const UserDataContext = createContext();

export const UserDataProvider = ({children}) =>{

    const [userData, setUserData] = useState({});

    const getUserData = (data) =>{
        console.log(data)
        setUserData(data)
    }

    return(
        <UserDataContext.Provider value={{getUserData, userData}}>
            {children}
        </UserDataContext.Provider>
    )

}