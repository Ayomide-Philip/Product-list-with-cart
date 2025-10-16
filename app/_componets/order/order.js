/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import CartItem from "../cartItem";

export default function UserOrder({ cart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(generateTotal(cart));
  }, [cart]);

  function generateTotal(cart) {
    let sum = 0;
    cart.map(({ price, quantity }) => {
      sum = sum + price * quantity;
    });
    return sum;
  }

  return (
    <>
      <div className="flex flex-col">
        {cart.map(({ quantity, name, price }, idx) => {
          return quantity > 0 ? (
            <CartItem name={name} price={price} quantity={quantity} key={idx} />
          ) : null;
        })}
      </div>
      <div className="flex justify-between mt-3 items-center">
        <p className="font-light">Order Total</p>
        <p className="font-semibold text-2xl red-hat-text">
          ${total.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-center items-center bg-[hsl(13,31%,94%)] p-3 gap-2 mt-3 rounded-xl">
        <img
          src="/images/icon-carbon-neutral.svg"
          className="h-auto w-auto"
          alt="Carbon Neutral"
        />
        <p className="font-light text-sm">
          This is a <span className="font-semibold">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>
    </>
  );
}
