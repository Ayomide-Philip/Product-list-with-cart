import ButtonHeader from "./buttonHeader";

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

        <ButtonHeader />
      </div>
      <div className="mt-5">
        <span className="font-light text-sm">{category}</span>
        <p className="font-bold">{name}</p>
        <p className="text-[hsl(14,86%,42%)] font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
