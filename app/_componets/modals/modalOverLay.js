/* eslint-disable @next/next/no-img-element */
import PaidItem from "./payedItems";
export default function ModalOverLay({ cart }) {
  function generateTotalAmount(cart) {
    let sum = 0;
    cart.map(({ price, quantity }) => {
      sum = sum + price * quantity;
    });

    return sum;
  }
  return (
    <div className="flex fixed bg-white p-5 top-1/2 left-1/2 transform -translate-1/2 w-[300px] md:min-w-lg rounded-2xl">
      <div className="flex flex-col gap-5 w-full">
        <div>
          <img src="/images/icon-order-confirmed.svg" alt="Order Confirmed" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-2xl md:text-3xl font-red-hat-text">
            Order Confirmed
          </h1>
          <p className="text-sm font-light">We hope you enjoy your food!</p>
        </div>
        <div className="bg-[hsl(13,31%,94%)] p-2 px-4 w-full rounded-2xl flex flex-col gap-y-5">
          {cart.map(({ quantity, price, name, image: { thumbnail } }, idx) => {
            return quantity > 0 ? (
              <PaidItem
                quantity={quantity}
                price={price}
                name={name}
                key={idx}
                thumbnail={thumbnail}
              />
            ) : null;
          })}
          <div className="flex justify-between items-center">
            <p className="text-sm">Order Total</p>
            <p className="text-2xl font-bold">
              ${generateTotalAmount(cart).toFixed(2)}
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center px-5 py-1">
          <button
            className="bg-[hsl(14,86%,42%)] text-white p-3 rounded-2xl cursor-pointer w-full"
            onClick={() => {
              window.location.reload();
            }}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}
