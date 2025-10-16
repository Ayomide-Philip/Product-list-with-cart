"use client";
import { useState } from "react";
import GridCard from "./cardGrid";
import Order from "./order";

export default function Cart() {
  const [cart, setCart] = useState([]);
  return (
    <div className="flex flex-col md:flex-row w-full gap-5">
      <GridCard setCart={setCart} />
      <Order cart={cart} />
    </div>
  );
}
