import { X } from "lucide-react";
export default function CartItem() {
  return (
    <div className="flex justify-between items-center border-b border-[hsl(14,25%,72%)]  w-full py-3">
      <div>
        <h1 className="font-bold ">Classic Tiramisu</h1>
        <p className="text-[13px]">
          <span className="text-[hsl(14,86%,42%)] font-bold mr-2">1x</span>{" "}
          <span className="font-light text-[hsl(14,25%,72%)]">@$5.50</span>{" "}
          <span className="font-semibold text-[hsl(12,20%,44%)]"> $5.50</span>
        </p>
      </div>
      <div>
        <button className="flex rounded-full border">
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
