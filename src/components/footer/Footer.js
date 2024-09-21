import React, { useState } from "react";
import { InstaIcon } from "../icons/InstaIcon";
import { FbIcon } from "../icons/FbIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { TikTokIcon } from "../icons/TikTokIcon";

export const Footer = () => {
  const [showList, setShowList] = useState(false)
  return (
    <>
      <div className="bg-black py-10 text-white">
        <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-screen-xl mx-auto space-y-4 md:space-y-8">
          <div className="flex justify-between">
            <img
              className="w-[130px]"
              src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg"
            />
            <div className="hidden lg:flex items-center justify-between gap-12">
              <p>Find Gelato on:</p>
              <InstaIcon />
              <FbIcon />
              <TikTokIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>
          </div>
          <div className="lg:flex gap-4">
            <div className="basis-1/3 space-y-12">
              <div className="space-y-4">
                <p className="text-sm font-light">
                  Gelato has created the world's largest network for local
                  production and distribution of customized products. Together
                  we bring creativity to life - and into business.
                </p>
                <button className="bg-white text-black rounded-full font-medium px-4 h-9 text-sm">
                  Get started
                </button>
              </div>
              <div>
                <div className="lg:hidden font-light space-y-3">
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      <button
                        onClick={() => setShowList(!showList)}
                        className="font-bold"
                      >
                        &gt;
                      </button>
                      <p className=" text-lg font-medium">Print on demand</p>
                    </div>
                    <ul
                      className={`${
                        showList ? "block" : "hidden"
                      } text-xs space-y-2 ml-4`}
                    >
                      <li>What is print on demand?</li>
                      <li>Product catalog</li>
                      <li>Shipping and delivery</li>
                      <li>Dropshipping products</li>
                      <li>Pro sellers</li>
                      <li>White label products</li>
                      <li>Returns policy</li>
                      <li>Global, yet local</li>
                      <li>Sustainability</li>
                      <li>Support</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      <button
                        onClick={() => setShowList(!showList)}
                        className="font-bold"
                      >
                        &gt;
                      </button>
                      <p className=" text-lg font-medium">Integrations</p>
                    </div>
                    <ul
                      className={`${
                        showList ? "block" : "hidden"
                      } text-xs space-y-2 ml-4`}
                    >
                      <li>Shopify</li>
                      <li>Etsy</li>
                      <li>WooCommerce</li>
                      <li>Wix</li>
                      <li>Squarespace</li>
                      <li>BigCommerce</li>
                      <li>API</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      <button
                        onClick={() => setShowList(!showList)}
                        className="font-bold"
                      >
                        &gt;
                      </button>
                      <p className=" text-lg font-medium">Start selling</p>
                    </div>
                    <ul
                      className={`${
                        showList ? "block" : "hidden"
                      } text-xs space-y-2 ml-4`}
                    >
                      <li>Embroidery</li>
                      <li>Print on demand t-shrits</li>
                      <li>Print on demand hoodies</li>
                      <li>Print on demand posters</li>
                      <li>Print on demand canvas</li>
                      <li>Print on demand calendars</li>
                      <li>Print on demand mugs</li>
                      <li>Custom products</li>
                      <li>Custom clothing</li>
                      <li>Custom merchandise</li>
                      <li>Custom phone cases</li>
                      <li>Print on demand Europe</li>
                      <li>Print on demand UK</li>
                      <li>Print on demand France</li>
                      <li>Print on demand Canada</li>
                      <li>Merch maker</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      <button
                        onClick={() => setShowList(!showList)}
                        className="font-bold"
                      >
                        &gt;
                      </button>
                      <p className=" text-lg font-medium">Company</p>
                    </div>
                    <ul
                      className={`${
                        showList ? "block" : "hidden"
                      } text-xs space-y-2 ml-4`}
                    >
                      <li>GelatoConnect</li>
                      <li>About Gelato</li>
                      <li>Leadership team</li>
                      <li>Board & investors</li>
                      <li>Newsroom</li>
                      <li>Blog</li>
                      <li>Customer Stories</li>
                      <li>Partners</li>
                      <li>Careers</li>
                      <li>Affiliates program</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-2">
                  <p>Get the app</p>
                  <div className="flex gap-2">
                    <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" />
                    <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex gap-12 font-light">
              <div>
                <p className="mb-3 font-normal">Print on demand</p>
                <ul className="text-xs xl:text-sm space-y-1">
                  <li>What is print on demand?</li>
                  <li>Product catalog</li>
                  <li>Shipping and delivery</li>
                  <li>Dropshipping products</li>
                  <li>Pro sellers</li>
                  <li>White label products</li>
                  <li>Returns policy</li>
                  <li>Global, yet local</li>
                  <li>Sustainability</li>
                  <li>Support</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-normal">Integrations</p>
                <ul className="text-xs xl:text-sm space-y-1">
                  <li>Shopify</li>
                  <li>Etsy</li>
                  <li>WooCommerce</li>
                  <li>Wix</li>
                  <li>Squarespace</li>
                  <li>BigCommerce</li>
                  <li>API</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-normal">Start selling</p>
                <ul className="text-xs xl:text-sm space-y-1">
                  <li>Embroidery</li>
                  <li>Print on demand t-shrits</li>
                  <li>Print on demand hoodies</li>
                  <li>Print on demand posters</li>
                  <li>Print on demand canvas</li>
                  <li>Print on demand calendars</li>
                  <li>Print on demand mugs</li>
                  <li>Custom products</li>
                  <li>Custom clothing</li>
                  <li>Custom merchandise</li>
                  <li>Custom phone cases</li>
                  <li>Print on demand Europe</li>
                  <li>Print on demand UK</li>
                  <li>Print on demand France</li>
                  <li>Print on demand Canada</li>
                  <li>Merch maker</li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-normal">Company</p>
                <ul className="text-xs xl:text-sm space-y-1">
                  <li>GelatoConnect</li>
                  <li>About Gelato</li>
                  <li>Leadership team</li>
                  <li>Board & investors</li>
                  <li>Newsroom</li>
                  <li>Blog</li>
                  <li>Customer Stories</li>
                  <li>Partners</li>
                  <li>Careers</li>
                  <li>Affiliates program</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:hidden space-y-2 md:space-y-4">
            <p>Find Gelato on:</p>
            <div className="flex justify-between md:justify-around">
              <InstaIcon />
              <FbIcon />
              <TikTokIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between space-y-2">
            <select className="bg-transparent border lg:order-2 w-48 h-9">
              <option>English(India)</option>
            </select>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 text-xs lg:divide-x lg:items-center">
              <p>Contact us</p>
              <p className="lg:px-3">Legal</p>
              <p className="lg:px-3">Privacy policy</p>
              <p className="lg:px-3">Cookie policy</p>
              <p className="lg:px-3">API terms</p>
              <p className="lg:px-3">Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
