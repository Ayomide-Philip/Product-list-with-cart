/* eslint-disable @next/next/no-img-element */
"use client";
export default function AddToCart({ setCount }) {
  return (
    <button
      className="bg-white text-black p-2 px-5 border-black border-1 rounded-2xl flex text-sm hover:text-[hsl(14,86%,42%)] cursor-pointer hover:border-[hsl(14,86%,42%)]"
      onClick={() => {
        setCount((prev) => {
          return prev + 1;
        });
      }}
    >
      <img
        src="/images/icon-add-to-cart.svg"
        alt="Add to cart"
        className="text-[hsl(14,86%,42%)]"
      />
      Add to Cart
    </button>
  );
}
