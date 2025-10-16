"use client";
import { useState } from "react";
import GridCard from "./cardGrid";
import Order from "./order";
import data from "./data.json";
import ModalOverLay from "./modals/modalOverLay";
export default function Cart() {
  const [cart, setCart] = useState(data);
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="flex flex-col md:flex-row w-full gap-5">
        <GridCard setCart={setCart} data={data} />
        <Order cart={cart} setModal={setModal} />
      </div>
      {modal && <ModalOverLay cart={cart} />}
    </>
  );
}
