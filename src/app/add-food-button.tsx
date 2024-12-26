"use client";

import { useFormStatus } from "react-dom";

export function AddFoodButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="outline outline-offset-2 outline-1"
      type="submit"
      disabled={pending}
    >
      {pending ? "Carregando.." : "Criar Comida"}
    </button>
  );
}
