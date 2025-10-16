import Card from "./card";

export default function GridCard() {
  return (
    <div>
      <h1 className="red-hat-text text-[hsl(14,65%,9%)] text-3xl font-extrabold">
        Desserts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        <Card />
        <div>Hello World</div>
        <div>Hello World</div>
      </div>
    </div>
  );
}
