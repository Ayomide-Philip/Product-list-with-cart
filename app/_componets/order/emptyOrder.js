/* eslint-disable @next/next/no-img-element */
export default function EmptyOrder() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/images/illustration-empty-cart.svg"
        height={20}
        width={200}
        alt="Empty Cart"
      />
      <p>Your Added Item would appear here</p>
    </div>
  );
}
