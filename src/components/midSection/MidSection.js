import React from "react";

export const MidSection = () => {
  const data = [
    {
      image:
        "https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/",
      title: "For print on demand sellers",
      heading:
        "Accelerate business growth with innovative design tools and apps",
      subheading:
        "See how our cutting-edge solutions can help you reach new customers and maximize your profits.",
      button: "Get started",
    },
    {
      image:
        "https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/",
      title: "For print producers",
      heading: "GelatoConnect",
      subheading:
        "Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry",
      button: "Learn more",
    },
  ];
  return (
    <>
      {data.map((val, index) => {
        return (
          <div
            className={`${
              val.heading === "GelatoConnect"
                ? "bg-transparent"
                : "bg-[#faf6ef]"
            }  py-4`}
            key={index}
          >
            <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-8">
              <img
                className={`${
                  val.heading === "GelatoConnect" ? "order-1" : "order-2"
                } w-[644px]`}
                src={val.image}
              />
              <div
                className={`${
                  val.heading === "GelatoConnect" ? "order-2" : "order-1"
                } space-y-8`}
              >
                <div className="space-y-4">
                  <p className="lg:text-lg">{val.title}</p>
                  <h3 className="lg:text-6xl font-semibold">{val.heading}</h3>
                </div>
                <p className="lg:text-2xl font-medium">{val.subheading}</p>
                <button className="bg-black text-white text-sm font-medium h-9 px-4 rounded-full">
                  {val.button}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
