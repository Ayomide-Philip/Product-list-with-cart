import { X } from "lucide-react";
export default function Order() {
  return (
    <div className="flex bg-[hsl(20,50%,98%)] p-3 rounded-2xl flex-col w-[300px]">
      <h1 className="text-[hsl(14,65%,9%)] font-bold text-2xl">
        Your Cart (0)
      </h1>
      <div className="flex">
        <div className="flex justify-between items-center border-b  w-full py-3">
          <div>
            <h1>Classic Tiramisu</h1>
            <p>1x @ $5.50 $5.50</p>
          </div>
          <div>
            <button className="flex rounded-full border">
              <X className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
