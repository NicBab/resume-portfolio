
import { useState } from "react";
import { Link } from "react-router-dom"
import { menu, close } from "../.././assets/index/assets.index"
import { navLinks } from '../.././constants/index'
import { Social } from "../.././components/index/components.index"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Social className="w-[110px] h-[52px]"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-dimWhite z-[10]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} hover:text-secondary`}
          >
             <Link to={`${nav.path}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center z-[10]">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar z-[10]`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white
            ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
            >
              <Link to={`${nav.path}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
