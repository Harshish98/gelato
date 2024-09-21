import React from "react";

export const SlideContent = ({ toggleBox, setToggleBox }) => {
  return (
    <>
      <div
        className={`${
          toggleBox ? "block" : "hidden"
        } w-80 h-screen bg-white fixed top-0 font-medium z-10`}
      >
        <div className="">
          <div className="flex items-center justify-between p-4 border border-b-[#e6e6e6]">
            <button
              onClick={() => {
                setToggleBox(!toggleBox);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center justify-center gap-1 px-4 rounded-full hover:bg-gray-300 h-9 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <select className="bg-transparent">
                <option>IN/INR</option>
              </select>
            </div>
            <div className="flex items-center justify-center gap-2 px-4 rounded-full hover:bg-gray-300 h-9 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              <p>Cart</p>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 border border-b-[#e6e6e6]">
            <button className="bg-black text-white h-9 rounded-full px-3 text-sm font-semibold">
              Sign up for free
            </button>
            <div className="flex items-center justify-center gap-2 px-4 rounded-full hover:bg-gray-300 h-9 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Sign in</p>
            </div>
          </div>
          <div className="flex flex-col p-4 space-y-3">
            <select className="hover:bg-gray-300">
              <option>Products</option>
            </select>
            <select className="hover:bg-gray-300">
              <option>Start selling</option>
            </select>
            <select className="hover:bg-gray-300">
              <option>Tools and apps</option>
            </select>
            <select className="hover:bg-gray-300">
              <option>Pricing</option>
            </select>
            <select className="hover:bg-gray-300">
              <option>Resources</option>
            </select>
            <p className="hover:bg-gray-300 ml-1">Pro sellers</p>
            <select className="hover:bg-gray-300">
              <option>GelatoConnect</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
