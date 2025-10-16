import GridCard from "./_componets/cardGrid";
import Order from "./_componets/order";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row w-full justify-between">
        <GridCard />
        <Order />
      </div>
    </div>
  );
}
