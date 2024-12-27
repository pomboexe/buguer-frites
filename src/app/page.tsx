import { AddFood } from "./components/add-food";
import { Menu } from "./components/menu";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-5">
      <Menu />
      <AddFood />
    </div>
  );
}
