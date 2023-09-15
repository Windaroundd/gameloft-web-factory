import React from "react";
import { NavLink } from "react-router-dom";

import { logo_gameloft_black, btn_menu } from "../../utils/exportImages";
const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-40 h-20 w-full bg-lightBlue">
      <nav className=" mx-auto flex w-[95%] items-center justify-between">
        <section>
          <h1>
            {" "}
            <NavLink to="https://www.gameloft.com/blog/players">
              <img src={logo_gameloft_black} alt="logo" />
            </NavLink>
          </h1>
        </section>
        <section>
          <button>
            <img src={btn_menu} alt="menu-btn" />
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Header;
