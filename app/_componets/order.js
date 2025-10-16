import CartItem from "./cartItem";

export default function Order() {
  return (
    <div className="flex bg-[hsl(20,50%,98%)] p-5 rounded-2xl flex-col w-[350px]">
      <h1 className="text-[hsl(14,86%,42%)] font-semibold text-2xl">
        Your Cart (7)
      </h1>
      <div className="flex flex-col">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex justify-between mt-3 items-center">
        <p className="font-light">Order Total</p>
        <p className="font-semibold text-2xl red-hat-text">$46.50</p>
      </div>
      <div className="flex justify-center items-center p-2 mt-3">
        <button className="bg-[hsl(14,86%,42%)] w-full h-10 rounded-full text-white cursor-pointer">
          Confirm Order
        </button>
      </div>
    </div>
  );
}
