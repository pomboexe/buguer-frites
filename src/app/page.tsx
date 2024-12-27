import { AddFood } from "./components/add-food";
import { Menu } from "./components/menu";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto">
      <Menu />
      <AddFood />
    </div>
  );
}
