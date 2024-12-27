interface Food {
  id: string;
  food: string;
  price: string;
  imageUrl: string;
}

export async function Menu() {
  const response = await fetch("http://localhost:3000/menu", {
    next: {
      tags: ["get-menu"],
    },
  });
  const data = await response.json();

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item: Food) => (
        <div className="rounded-none border-2 border-neutral-50 flex flex-col space-y-3 px-2">
          <h2 className="text-center text-lg">{item.food.toUpperCase()}</h2>
          <img
            className="w-80 mx-auto px-3"
            src={item.imageUrl}
            alt={item.food}
          />
          <section className="flex-grow">
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              nemo, pariatur nostrum totam maxime vel porro exercitationem
              tempora asperiores quae vero{" "}
            </p>
          </section>
          <span className="text-orange-300 text-right">${item.price}</span>
        </div>
      ))}
    </div>
  );
}
