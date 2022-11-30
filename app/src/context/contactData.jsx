import { createContext, useState} from "react";
import { api } from "../server/api";

export const ContactDataContext = createContext();

export const ContactDataProvider = ({children}) =>{

    const [canSeeContacts, setCanSeeContacts] = useState(false)
    const [contactsData, setContactsData] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [navigate, setNavigate] = useState(false);

    const handleNavigation = () =>{
        setNavigate(!navigate)
    }

    const getContactData = (data) =>{
        api.post("/contacts", data)
        .then(res => setContactsData([...contactsData, res.data]))
    }

    const getAllContacts = () =>{
        api.get("/contacts")
        .then(res => setContacts(res.data))
    }

    const updateContact = (id, data) =>{
        api.patch(`/contacts/${id}`, data)
    }

    const deleteContact = (id) =>{
        api.delete(`/contacts/${id}`)

    }


    return(
        <ContactDataContext.Provider
         value={
                {
                    getContactData,
                    contactsData,
                    getAllContacts,
                    contacts,
                    navigate,
                    handleNavigation,
                    updateContact,
                    deleteContact,
                    canSeeContacts,
                    setCanSeeContacts
                }
            }>
            {children}
        </ContactDataContext.Provider>
    )

}