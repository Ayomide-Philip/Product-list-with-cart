import CartItem from "./cartItem";
import Image from "next/image";

export default function Order() {
  const items = 5;
  return (
    <div className="flex bg-[hsl(20,50%,98%)] p-5 rounded-2xl flex-col w-[350px]">
      <h1 className="text-[hsl(14,86%,42%)] font-semibold text-2xl">
        Your Cart ({items})
      </h1>
      {items === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <Image
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
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="font-light">Order Total</p>
            <p className="font-semibold text-2xl red-hat-text">$46.50</p>
          </div>
          <div className="flex justify-center items-center bg-[hsl(13,31%,94%)] p-3 mt-3 rounded-xl">
            <Image
              src="/images/icon-carbon-neutral.svg"
              height={20}
              width={20}
              alt="Carbon Neutral"
            />
            <span>This is a carbon-neutral delivery</span>
          </div>
          <div className="flex justify-center items-center p-2 mt-3">
            <button className="bg-[hsl(14,86%,42%)] w-full h-10 rounded-full text-white cursor-pointer">
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
