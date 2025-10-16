import { Minus, Plus } from "lucide-react";
export default function Counter({ count, setCount }) {
  function decreaseOrder() {
    setCount((prev) => {
      return prev - 1;
    });
  }

  function increaseOrder() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <button className="bg-[hsl(14,86%,42%)] p-2 px-3 rounded-2xl flex text-sm">
      <div
        className="border-1 border-white rounded-full p-1 text-white hover:bg-white hover:text-[hsl(14,86%,42%)] cursor-pointer"
        onClick={decreaseOrder}
      >
        <Minus className="h-3 w-3" />
      </div>
      <span className="mx-5 text-white">{count}</span>
      <div
        className="border-1 border-white rounded-full p-1 text-white hover:bg-white hover:text-[hsl(14,86%,42%)] cursor-pointer"
        onClick={increaseOrder}
      >
        <Plus className="h-3 w-3" />
      </div>
    </button>
  );
}
