import { AddFood } from "./add-food";
import { Menu } from "./menu";

export default function Home() {
  return (
    <div>
      <h1>Menu</h1>
      <Menu />
      <AddFood />
    </div>
  );
}
