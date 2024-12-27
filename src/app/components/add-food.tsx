import { revalidateTag } from "next/cache";
import { AddFoodButton } from "./add-food-button";

export function AddFood() {
  async function handleCreateFood(form: FormData) {
    "use server";

    const food = {
      food: form.get("food"),
      price: form.get("price"),
    };

    await new Promise((resolve) => setTimeout(resolve, 1500));

    await fetch("http://localhost:3000/menu", {
      method: "POST",
      body: JSON.stringify(food),
    });
    revalidateTag("get-menu");
  }

  return (
    <form action={handleCreateFood} method="POST">
      <input
        name="food"
        placeholder="Nome da Comida"
        className="mx-2"
        type="text"
      />
      <input type="number" name="price" placeholder="Preço" className="mx-1" />
      <AddFoodButton />
    </form>
  );
}
