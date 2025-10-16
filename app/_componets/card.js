/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import ButtonHeader from "./buttonHeader";

export default function Card({ name, category, price, desktop, setCart }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCart((prev) => {
      return prev.map((p) => {
        if (p.name === name) {
          return { ...p, quantity: count };
        }
        return p;
      });
    });
  }, [name, setCart, count]);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={desktop}
          alt={`${name} | ${category}`}
          className={`w-full md:w-[250px] h-[200px] rounded-2xl object-cover hover:border-[hsl(14,86%,42%)] hover:border-2 cursor-grab ${
            count !== 0 && "border-[hsl(14,86%,42%)] border-2"
          }`}
        />
        <ButtonHeader count={count} setCount={setCount} />
      </div>
      <div className="mt-5">
        <span className="font-light text-sm">{category}</span>
        <p className="font-bold">{name}</p>
        <p className="text-[hsl(14,86%,42%)] font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
