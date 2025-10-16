import { useEffect, useState } from "react";
import EmptyOrder from "./order/emptyOrder";
import UserOrder from "./order/order";

export default function Order({ cart, setModal }) {
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
          <EmptyOrder />
        ) : (
          <>
            <UserOrder cart={cart} />
            <div className="flex justify-center items-center p-2 mt-3">
              <button
                className="bg-[hsl(14,86%,42%)] w-full h-10 rounded-full text-white cursor-pointer"
                onClick={() => {
                  setModal((prev) => !prev);
                }}
              >
                Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
