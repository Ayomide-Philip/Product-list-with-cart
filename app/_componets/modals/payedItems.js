/* eslint-disable @next/next/no-img-element */
export default function PaidItem({ quantity, price, name }) {
  return (
    <div className="flex items-center gap-3 justify-between">
      <div className="flex gap-3">
        <div>
          <img
            src="/images/image-baklava-thumbnail.jpg"
            alt=""
            className="w-10 h-10 rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-[14px]">{name}</h1>
          <p className="font-[300] text-[12px]">
            <span className="text-[hsl(14,86%,42%)] font-bold mr-2">
              {quantity}x
            </span>
            @${Number(price).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex">
        <p className="font-normal">${(quantity * price).toFixed(2)}</p>
      </div>
    </div>
  );
}
