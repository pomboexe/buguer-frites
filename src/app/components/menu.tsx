interface Food {
  id: string;
  food: string;
  price: string;
  imageUrl: string;
  description: string;
}

export async function Menu() {
  const response = await fetch("http://localhost:3000/menu", {
    next: {
      tags: ["get-menu"],
    },
  });
  const data = await response.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item: Food) => (
        <div
          key={item.id}
          className="rounded-none border-2 border-neutral-50 bg-slate-900 flex flex-col h-full"
        >
          <div className="p-5 flex flex-col space-y-3 flex-grow">
            <div className="rounded-xl overflow-hidden">
              <img
                className="w-full h-40 object-cover"
                src={item.imageUrl}
                alt={item.food}
              />
            </div>

            <h2 className="text-1xl md:text-2xl font-medium mt-3">
              {item.food.toUpperCase()}
            </h2>

            <p className="text-justify text-lg mt-3 line-clamp-4 flex-grow">
              {item.description}
            </p>
          </div>

          <div className="p-5 mt-auto">
            <span className="text-orange-300 text-right font-medium block">
              ${item.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
