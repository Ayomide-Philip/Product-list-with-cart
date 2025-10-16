"use client";
import { useState } from "react";
import AddToCart from "./button/addToCart";
import Counter from "./button/counter";
export default function ButtonHeader() {
  const [count, setCount] = useState(0);
  return (
    <div className="absolute left-1/2 transform -translate-1/2 w-full flex justify-center items-center">
      {count === 0 ? (
        <AddToCart setCount={setCount} />
      ) : (
        <Counter setCount={setCount} count={count} />
      )}
    </div>
  );
}
