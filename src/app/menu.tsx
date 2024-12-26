interface Food {
  id: string;
  food: string;
  price: string;
}

export async function Menu() {
  const response = await fetch("http://localhost:3000/menu", {
    next: {
      tags: ["get-menu"],
    },
  });
  const data = await response.json();

  return (
    <ul>
      {data.map((item: Food) => (
        <li key={item.id}>
          {item.food} {item.price}
        </li>
      ))}
    </ul>
  );
}
