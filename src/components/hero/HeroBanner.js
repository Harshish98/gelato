import React from 'react'

export const HeroBanner = () => {
  return (
    <>
      <div className="bg-[#faf6ef] py-10 hidden md:block">
        <div className="flex justify-between items-center max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto text-3xl lg:text-4xl gap-5">
          <div className="text-center basis-1/3">
            <p>90%</p>
            <p className="text-xl lg:text-2xl xl:text-3xl">
              of all orders are produced locally
            </p>
          </div>
          <div className="text-center basis-1/3">
            <p>90%</p>
            <p className="text-xl lg:text-2xl xl:text-3xl">
              of orders arrive within 5 days of ordering
            </p>
          </div>
          <div className="text-center basis-1/3">
            <p>140+</p>
            <p className="text-xl lg:text-2xl xl:text-3xl">
              print providers across 32 countries
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
