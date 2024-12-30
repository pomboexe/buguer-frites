"use client";

import { useState } from "react";
import { AddFoodButton } from "./add-food-button";
import { Modal } from "./modal";

interface ModalFormProps {
  action: any;
}

export default function ModalForm({ action }: ModalFormProps) {
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="bg-red-600 rounded-sm" onClick={() => setOpen(true)}>
        ADD FOOD
      </button>
      <Modal onClose={handleCloseModal} open={open}>
        <form className="flex flex-col gap-4 p-4" action={action}>
          <input
            name="food"
            placeholder="Nome da Comida"
            className=""
            type="text"
          />
          <input type="string" name="price" placeholder="Preço" className="" />
          <input
            type="text"
            name="imageUrl"
            placeholder="Url da Imagem"
            className=""
          ></input>
          <textarea name="description" placeholder="descrição" className="" />
          <AddFoodButton onClick={handleCloseModal} />
        </form>
      </Modal>
    </div>
  );
}
