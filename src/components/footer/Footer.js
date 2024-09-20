import React from "react";
import { InstaIcon } from "../icons/InstaIcon";
import { FbIcon } from "../icons/FbIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { TikTokIcon } from "../icons/TikTokIcon";

export const Footer = () => {
  return (
    <>
      <div className="bg-black py-10 text-white">
        <div className="max-w-screen-xl mx-auto space-y-8">
          <div className="flex justify-between">
            <img
              className="w-[130px]"
              src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg"
            />
            <div className="flex items-center justify-between gap-12">
              <p>Find Gelato on:</p>
              <InstaIcon />
              <FbIcon />
              <TikTokIcon />
              <LinkedInIcon />
              <YouTubeIcon />
            </div>
          </div>
          <div className="flex gap-4">
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
              <div className="space-y-2">
                <p>Get the app</p>
                <div className="flex gap-2">
                  <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" />
                  <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" />
                </div>
              </div>
            </div>
            <div className="flex gap-12 font-light">
              <div>
                <p className="mb-3 font-normal">Print on demand</p>
                <ul className="text-sm space-y-1">
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
                <ul className="text-sm space-y-1">
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
                <ul className="text-sm space-y-1">
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
                <ul className="text-xs space-y-1">
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
          <div className="flex justify-between items-center">
            <select className="bg-transparent border order-2 w-48 h-9">
              <option>English(India)</option>
            </select>
            <div className="flex space-x-2 text-xs divide-x items-center">
              <p>Contact us</p>
              <p className="px-3">Legal</p>
              <p className="px-3">Privacy policy</p>
              <p className="px-3">Cookie policy</p>
              <p className="px-3">API terms</p>
              <p className="px-3">Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
