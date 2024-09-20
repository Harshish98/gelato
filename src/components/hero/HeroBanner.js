import React from 'react'

export const HeroBanner = () => {
  return (
    <>
      <div className="bg-[#faf6ef] py-10">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto text-4xl">
          <div className="text-center">
            <p>90%</p>
            <p className="text-3xl">of all orders are produced locally</p>
          </div>
          <div className="text-center">
            <p>90%</p>
            <p className="text-3xl">
              of orders arrive within 5 days of ordering
            </p>
          </div>
          <div className="text-center">
            <p>140+</p>
            <p className="text-3xl">print providers across 32 countries</p>
          </div>
        </div>
      </div>
    </>
  );
}
