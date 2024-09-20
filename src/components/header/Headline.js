import React from "react";

export const Headline = () => {
  return (
    <>
      <div className="bg-black px-10 py-2 flex justify-center items-center gap-2">
        <p className="underline text-white">
          FREE SHIPPING for orders over $300. Order today
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
    </>
  );
};
