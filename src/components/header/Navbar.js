import React from 'react'
import { NavbarContent } from './NavbarContent';

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0">
        <div className="border border-b-[#e6e6e6] py-3 font-medium bg-white">
          <div className="max-w-4xl xl:max-w-screen-xl mx-auto flex justify-between items-center">
            <div className='flex items-center gap-4'>
              <div className="block xl:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <img
                  src="https://a.storyblok.com/f/165154/261x55/ecf04f407f/gelato_logo_black.svg"
                  width={127}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2 px-4 rounded-full hover:bg-gray-300 h-9 cursor-pointer">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNDhweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjEiLz48cGF0aCBkPSJNMTIgMWMtNC45NyAwLTkgNC4wMy05IDl2N2MwIDEuNjYgMS4zNCAzIDMgM2gzdi04SDV2LTJjMC0zLjg3IDMuMTMtNyA3LTdzNyAzLjEzIDcgN3YyaC00djhoNHYxaC03djJoNmMxLjY2IDAgMy0xLjM0IDMtM1YxMGMwLTQuOTctNC4wMy05LTktOXoiLz48L3N2Zz4="
                  width={24}
                />
                <p>Contact us</p>
              </div>
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
              <button className="bg-black text-white h-9 rounded-full px-3 text-sm font-semibold">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <NavbarContent />
      </div>
    </>
  );
}

export default Navbar