import React from "react";

export const WhyChoose = () => {
  const list = [
    {
      heading: "World's largest print-on-demand network",
      subheading:
        "140+ print partners in 32 countries. Gelato is a truly global service",
    },
    {
      heading: "Sell globally, produce locally",
      subheading:
        "Your products are produced close to your customers, wherever they are.",
    },
    {
      heading: "100% free editing tools",
      subheading: "Create your custom products using our suite of free tools.",
    },
    {
      heading: "60+logistics partners",
      subheading:
        "Our global network of logistics partners ensures your products are delivered fast.",
    },
    {
      heading: "Endless creativity with Shutterstock Images",
      subheading:
        "Access millions of images and graphics to create unique products you can sell in your store.",
    },
    {
      heading: "1-click integration to the leading ecommerce platforms",
      subheading:
        "Connect your store to Gelato using our integrations with Shopify, Etsy and more.",
    },
  ];
  return (
    <>
      <div className="py-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl lg:text-6xl text-center font-medium mb-8">
          Why choose Gelato
        </h1>
        <div className="flex justify-center items-center">
          <div className="">
            <img src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/800x0/" />
          </div>
          <div className=" space-y-4">
            {list.map((val, index) => {
              return (
                <div className="space-y-2" key={index}>
                  <h4 className="text-2xl font-medium">▻ {val.heading}</h4>
                  <p className="font-light">{val.subheading}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
