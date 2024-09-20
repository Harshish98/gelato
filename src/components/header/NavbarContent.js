import React from 'react'

export const NavbarContent = () => {
  return (
    <>
      <div className="border-b border-[#e6e6e6] bg-white ">
        <div className="flex flex-col xl:flex-row items-center h-12 font-medium ml-16 2xl:ml-28">
          <select className="hover:bg-gray-300 h-full px-4">
            <option>Products</option>
          </select>
          <select className="hover:bg-gray-300 h-full px-4">
            <option>Start selling</option>
          </select>
          <select className="hover:bg-gray-300 h-full px-4">
            <option>Tools and apps</option>
          </select>
          <select className="hover:bg-gray-300 h-full px-4">
            <option>Pricing</option>
          </select>
          <select className="hover:bg-gray-300 h-full px-4">
            <option>Resources</option>
          </select>
          <p className="hover:bg-gray-300 h-full flex items-center justify-center px-4">Pro sellers</p>
          <select className="hover:bg-gray-300 h-full px-4">
            <option>GelatoConnect</option>
          </select>
        </div>
      </div>
    </>
  );
}
