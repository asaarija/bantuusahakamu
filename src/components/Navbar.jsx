import { useState } from "react";
import logo from "../assets/logo.png";
import { NAVBAR } from "../contants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="w-full bg-white ">
      <header className="w-full p-3 top-0 bg-white fixed  z-100">
        <div className=" flex items-center">
          <div className="">
            <a href="">
              <img src={logo} alt="" width="130px" />
            </a>
          </div>
          `
          <button
            className="cursor-pointer md:min-md:hidden block absolute right-2"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#1f1f1f"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
          <nav className="hidden md:min-md:block absolute top-0 bg-white right-4 ">
            <ul className="flex">
              {NAVBAR.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="m-4 mx-7 font-bold flex text-[16px] hover:text-[18px]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden absolute bg-neutral-50 w-full py-5 px-4 top-17 border-b-4`}
          >
            <ul className="">
              {NAVBAR.map((link, index) => (
                <li
                  key={index}
                  href={link.link}
                  className="uppercase text-lg font-medium block py-2 tracking-wide"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
