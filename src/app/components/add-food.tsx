import { revalidateTag } from "next/cache";
import { AddFoodButton } from "./add-food-button";

export function AddFood() {
  async function handleCreateFood(form: FormData) {
    "use server";

    const food = {
      food: form.get("food"),
      price: form.get("price"),
      imageUrl: form.get("imageUrl"),
      description: form.get("description"),
    };

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await fetch("http://localhost:3000/menu", {
      method: "POST",
      body: JSON.stringify(food),
    });
    revalidateTag("get-menu");
  }

  return (
    <form className="mb-4" action={handleCreateFood}>
      <input
        name="food"
        placeholder="Nome da Comida"
        className="mx-2"
        type="text"
      />
      <input type="string" name="price" placeholder="Preço" className="mx-1" />
      <input
        type="text"
        name="imageUrl"
        placeholder="Url da Imagem"
        className="mx-2"
      ></input>
      <textarea name="description" placeholder="descrição" className="mx-2" />
      <AddFoodButton />
    </form>
  );
}
