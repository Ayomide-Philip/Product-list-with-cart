import Card from "./card";

export default function GridCard({ setCart, data }) {
  return (
    <div>
      <h1 className="red-hat-text text-[hsl(14,65%,9%)] text-3xl font-extrabold">
        Desserts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5 mt-5">
        {data.map(({ name, category, price, image: { desktop } }, idx) => {
          return (
            <Card
              name={name}
              category={category}
              price={price}
              desktop={desktop}
              key={idx}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
}
