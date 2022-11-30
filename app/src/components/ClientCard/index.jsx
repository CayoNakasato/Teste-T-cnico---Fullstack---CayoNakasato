import { useState } from "react";
import { DeleteClientModal } from "../deleteClientModal";
import ClientModal from "../modalClientUpdate";

export const ClientCard = ({ client }) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);

  return (
    <>
      <li key={client.id}>
        <div>
          <p>Nome: {client.name}</p>
          <p>Email: {client.email}</p>
          <p>Telefone: {client.fone}</p>
          {client.isActive ? <p>Status: Active</p> : <p>Status: Deactivated</p>}

          <p>Criado em: {client.createdAt}</p>
          <div>
            <button onClick={handleModal}>Editar</button>
            <DeleteClientModal id={client.id} />
          </div>
        </div>
      </li>
      <ClientModal open={open} handleModal={handleModal} client={client} />
    </>
  );
};
