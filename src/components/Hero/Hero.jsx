import React from "react";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 md:grid-row grid-col items-center md:pt-25 pt-35 min-h-screen mt-5">
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full cursor-pointer">
            Export Best Quality....
          </span>
          <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-4">
            Tasty Organic <span className="text-orange-500"> Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span> <br />
            In Your City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop Now" />
        </div>
        <div className="flex-1">
          <img src="/images/grocery.png" alt="image" />
        </div>
      </div>
    </section>
  );
}
