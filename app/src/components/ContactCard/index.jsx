import { useState } from "react";
import { DeleteContactModal } from "../deleteContactModal";
import ContactModal from "../modalContactUpdate";

export const ContactCard = ({ contact }) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);

  return (
    <>
      <li key={contact.id}>
        <div>
          <p>Nome: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Telefone: {contact.fone}</p>
          {contact.isActive ? (
            <p>Status: Active</p>
          ) : (
            <p>Status: Deactivated</p>
          )}
          <div>
            <button onClick={handleModal}>Editar</button>

            <DeleteContactModal id={contact.id} />
          </div>
        </div>
      </li>
      <ContactModal open={open} handleModal={handleModal} contact={contact} />
    </>
  );
};
