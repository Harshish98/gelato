import React from 'react'
import { HeroBanner } from './HeroBanner';

export const HeroSection = () => {
  return (
    <>
      <div className="bg-[#faf6ef] md:bg-white py-4">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto gap-6">
          <div className="flex justify-center md:order-2 basis-1/2">
            <img
              className="block"
              src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/"
            />
            <img
              className="hidden"
              src="https://a.storyblok.com/f/165154/1280x720/5ed0187b38/02_hp_top-banner_1280x720-white-version-1.jpg/m/800x0/"
              width={327}
            />
          </div>
          <div className="order-1 basis-1/2 space-y-3 md:space-y-4 lg:space-y-8">
            <h2 className="text-3xl font-medium lg:text-6xl">
              Print on demand for your ecommerce business
            </h2>
            <div className="space-y-1">
              <p className="text-2xl">
                Sign up for free and only pay for what you sell
              </p>
              <p className="font-light">
                Turn your passion into profit with the world's largest{" "}
                <span className="underline">print on demand</span> network.
              </p>
            </div>
            <div className="space-x-4">
              <button className="h-9 bg-black text-white px-4 rounded-full text-sm font0m">
                Get started for free
              </button>
              <button className="h-9  border border-[#4446] px-4 rounded-full text-sm font-medium">
                See our products
              </button>
            </div>
            <div className="space-y-2">
              <div>
                <img
                  src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg"
                  width={150}
                />
              </div>
              <div className="flex gap-12">
                <div className="flex gap-1">
                  <img src="https://www.gelato.com/assets/rating-stars/star.svg" />
                  <img src="https://www.gelato.com/assets/rating-stars/star.svg" />
                  <img src="https://www.gelato.com/assets/rating-stars/star.svg" />
                  <img src="https://www.gelato.com/assets/rating-stars/star.svg" />
                  <img src="https://www.gelato.com/assets/rating-stars/star.svg" />
                </div>
                <div>
                  <p className="font-light">4.8/5</p>
                </div>
              </div>
              <p className="font-light">based on 910 reviews</p>
            </div>
          </div>
        </div>
      </div>
      <HeroBanner />
    </>
  );
}
