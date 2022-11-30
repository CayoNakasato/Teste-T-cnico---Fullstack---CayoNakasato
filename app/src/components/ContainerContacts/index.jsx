import { useContext } from "react";
import { ContactDataContext } from "../../context/contactData";
import { ContactCard } from "../ContactCard";
import style from "./style.module.css";


export const ContainerContacts = () => {
  const { contacts } = useContext(ContactDataContext);

  return (
    <>
      <ul className={style.clientList}>
        {contacts.map((contact) => {
          return <ContactCard contact={contact} key={contact.id} />;
        })}
      </ul>
    </>
  )
};
