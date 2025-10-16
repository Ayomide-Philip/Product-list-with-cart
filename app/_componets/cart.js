"use client";
import { useEffect, useState } from "react";
import GridCard from "./cardGrid";
import Order from "./order";
import data from "./data.json";
export default function Cart() {
  const [cart, setCart] = useState(data);
  return (
    <div className="flex flex-col md:flex-row w-full gap-5">
      <GridCard setCart={setCart} data={data} />
      <Order cart={cart} />
    </div>
  );
}
