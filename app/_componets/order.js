/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import CartItem from "./cartItem";
import Image from "next/image";

export default function Order({ cart }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(() => {
      var initialCount = 0;
      cart.map((c) => {
        return (initialCount = c.quantity + initialCount);
      });
      return initialCount;
    });
  }, [cart, setCount]);

  return (
    <div>
      <div className="flex bg-[hsl(20,50%,98%)] p-5 rounded-2xl flex-col mt-10 md:mt-0 md:w-[350px]">
        <h1 className="text-[hsl(14,86%,42%)] font-semibold text-2xl">
          Your Cart ({count})
        </h1>
        {count === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <img
              src="/images/illustration-empty-cart.svg"
              height={20}
              width={200}
              alt="Empty Cart"
            />
            <p>Your Added Item would appear here</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col">
              {cart.map(({ quantity, name, price }, idx) => {
                return quantity > 0 ? (
                  <CartItem
                    name={name}
                    price={price}
                    quantity={quantity}
                    key={idx}
                  />
                ) : null;
              })}
            </div>
            <div className="flex justify-between mt-3 items-center">
              <p className="font-light">Order Total</p>
              <p className="font-semibold text-2xl red-hat-text">$46.50</p>
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
            <div className="flex justify-center items-center p-2 mt-3">
              <button className="bg-[hsl(14,86%,42%)] w-full h-10 rounded-full text-white cursor-pointer">
                Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
