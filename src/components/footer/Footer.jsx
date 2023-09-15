import React from "react";
import { NavLink } from "react-router-dom";
import {
  logo_facebook,
  logo_gameloft,
  logo_linkedin,
  logo_twitter,
  logo_youtube,
  icon_web,
} from "../../utils/exportImages";

const Footer = () => {
  const menuBotomData = [
    {
      mainTitle: "visit",
      subMenu: [
        {
          subtitle: "Gameloft Games",
          link: "https://www.gameloft.com/games",
        },
        {
          subtitle: "Gameloft Careers",
          link: "https://www.gameloft.com/corporate/en/jobs/apply/",
        },
        {
          subtitle: "Gameloft News",
          link: "https://www.gameloft.com/central",
        },
        {
          subtitle: "Gameloft Forum",
          link: "https://forum.gameloft.com/",
        },
        {
          subtitle: "Gameloft Corporate",
          link: "https://www.gameloft.com/corporate/",
        },
        {
          subtitle: "Gameloft Advertising",
          link: "https://www.gameloft.com/for-brands/in-game-advertising",
        },
        {
          subtitle: "Gameloft Support",
          link: "https://gameloft.helpshift.com/",
        },
      ],
    },
    {
      mainTitle: "legal",
      subMenu: [
        {
          subtitle: "Terms of Use",
          link: "https://www.gameloft.com/en/conditions-of-use",
        },
        {
          subtitle: "Privacy Policy",
          link: "https://www.gameloft.com/en/legal/privacy-policies/",
        },
        {
          subtitle: "Cookies Policy",
          link: "https://www.gameloft.com/en/legal/showcase-cookie-policy",
        },
        {
          subtitle: "EULA",
          link: "https://www.gameloft.com/en/eula",
        },
        {
          subtitle: "Legal Notices",
          link: "https://www.gameloft.com/en/information/legal-notices",
        },
        {
          subtitle: "Event Rules",
          link: "https://www.gameloft.com/en/information/event",
        },
        {
          subtitle: "Business Contacts",
          link: "https://www.gameloft.com/en/businesscontacts",
        },
      ],
    },
  ];
  const followUsData = [
    {
      src: logo_facebook,
      link: "https://gmlft.co/SNS_FB_EN",
      alt: "logo facebook",
    },
    {
      src: logo_linkedin,
      link: "https://www.linkedin.com/company/gameloft",
      alt: "logo linkein",
    },
    {
      src: logo_twitter,
      link: "https://gmlft.co/SNS_TW_EN",
      alt: "logo twitter",
    },

    {
      src: logo_youtube,
      link: "https://www.youtube.com/user/gameloft",
      alt: "logo youtube",
    },
  ];
  return (
    <footer className="relative       min-h-screen overflow-hidden bg-mainBlue text-white">
      <section className="mt-36 flex justify-center">
        <section className="flex w-1/2 justify-between">
          <section className="">
            <section>
              <NavLink to="https://www.gameloft.com/en/">
                <img
                  className="w-[414px]"
                  src={logo_gameloft}
                  alt="logo bottom"
                />
              </NavLink>
            </section>
            <section className="ml-1 mt-7">
              <h4 className="text-2xl font-bold">Follow Us</h4>
              <section className="mt-5 flex gap-4">
                {followUsData.map((item, index) => (
                  <NavLink key={index} to={item.link}>
                    <img src={item.src} alt={item.alt} />
                  </NavLink>
                ))}
              </section>
            </section>
            <section className="relative mt-8">
              <section
                className="absolute left-2 flex translate-y-1/2
                justify-center"
              >
                <img src={icon_web} alt="" />
              </section>
              <select className="left-5 h-[52px]  w-[145px] rounded-sm pl-10 text-mainBlue">
                <option
                  className="font-montserrat text-lg font-normal"
                  value="en"
                >
                  English
                </option>
                <option className="text-lg" value="vi">
                  Tiếng Việt
                </option>
              </select>
            </section>
          </section>
          <section>
            {menuBotomData.map((item, index) => (
              <section key={index} className="mb-7">
                <h4 className="text-2xl font-bold uppercase">
                  {item.mainTitle}
                </h4>
                <ul className="mt-6">
                  {item.subMenu.map((subMenuItem, subIndex) => (
                    <li key={subIndex} className="mt-1">
                      <NavLink to={subMenuItem.link}>
                        {subMenuItem.subtitle}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </section>
        </section>
      </section>
      <section
        style={{ borderTop: "3px solid white" }}
        className="absolute bottom-0 w-full"
      >
        <p className="r w-1/2 translate-x-1/2  py-6 text-center text-sm font-light">
          ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo
          are trademarks of Gameloft in the U.S. and/or other countries. All
          other trademarks are the property of their respective owners.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
