import React from "react";
import {
  bg_img,
  icon_star,
  icon_starYellow,
  img_microsoft,
  img_nitendo,
  img_steam,
} from "../../utils/exportImages";
import { NavLink } from "react-router-dom";

const HotspotBanner = () => {
  return (
    <section
      className="relative min-h-screen bg-local"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <section className="absolute bottom-28  w-1/2 translate-x-1/2  ">
        <section className="h-full">
          <h2 className="text-5xl font-bold uppercase ">gameloft game</h2>
          <p>
            <span className="text-xs font-medium">Racing / Action</span> |
            <span className="ml-2">
              <img className="mr-1 inline-block" src={icon_starYellow} alt="" />
              <img className="mr-1 inline-block" src={icon_starYellow} alt="" />
              <img className="mr-1 inline-block" src={icon_starYellow} alt="" />
              <img className="mr-1 inline-block" src={icon_starYellow} alt="" />
              <img className="mr-1 inline-block" src={icon_star} alt="" />
            </span>
          </p>
          <p className="mt-9 pr-80 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud itation ullamco laboris nisi ut
          </p>
        </section>
      </section>
      <section className="z-2 absolute bottom-0 left-0    w-full bg-lighterBlue ">
        <section className=" py-5">
          <section className="  bottom-0 left-0  flex h-7 w-1/2 translate-x-1/2 items-center justify-between">
            <section>
              <h3 className=" text-xl  font-bold leading-7 text-mainBlue">
                Download latest version
              </h3>
            </section>
            <section className="flex justify-center gap-3">
              <NavLink>
                <img src={img_nitendo} alt="nitendo logo" />
              </NavLink>
              <NavLink>
                <img src={img_microsoft} alt="microsoft logo" />
              </NavLink>
              <NavLink>
                <img src={img_steam} alt="steam logo" />
              </NavLink>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default HotspotBanner;
