import AddToCart from "./button/addToCart";

/* eslint-disable @next/next/no-img-element */
export default function Card({ name, category, price, desktop }) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <img
          src={desktop}
          alt={`${name} | ${category}`}
          className="w-full md:w-[250px] h-[200px] rounded-2xl object-cover hover:border-[hsl(14,86%,42%)] hover:border-2 cursor-grab"
        />

        <div className="absolute left-1/2 transform -translate-1/2 w-full flex justify-center items-center">
          <AddToCart />
        </div>
      </div>
      <div className="mt-5">
        <span className="font-light text-sm">{category}</span>
        <p className="font-bold">{name}</p>
        <p className="text-[hsl(14,86%,42%)] font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
