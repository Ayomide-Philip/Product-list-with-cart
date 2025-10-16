/* eslint-disable @next/next/no-img-element */
export default function Card() {
  return (
    <div className="flex flex-col">
      <div>
        <img
          src="/images/image-waffle-desktop.jpg"
          alt="waffle-desktop"
          className="w-[200px] h-[200px] rounded-2xl"
        />
      </div>
      <div className="mt-3">
        <span className="font-light text-sm">Waffle</span>
        <p className="font-bold">Waffle with Berries</p>
        <p className="text-[hsl(14,86%,42%)] font-bold">$6.50</p>
      </div>
    </div>
  );
}
