"use client";

import { useFormStatus } from "react-dom";

export function AddFoodButton({ ...props }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="outline outline-offset-2 outline-1 text-black"
      type="submit"
      disabled={pending}
      {...props}
    >
      {pending ? "Carregando.." : "Criar Comida"}
    </button>
  );
}
