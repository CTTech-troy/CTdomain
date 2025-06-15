import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById("mobileMenu");
      const menuButton = document.getElementById("menuButton");
      if (
        mobileMenu &&
        menuButton &&
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="text-sm text-white w-full">
      {/* Banner with fixed color */}
      <div className="text-center font-medium py-2 bg-blue-700">
        <p>
          Exclusive Price Drop! Hurry,{" "}
          <span className="underline underline-offset-2">Offer Ends Soon!</span>
        </p>
      </div>
      <nav className="relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white text-gray-900 transition-all shadow-sm">
        <Link to="/">
          <img
            className="h-9"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoDark.svg"
            alt="dummyLogoDark"
          />
        </Link>
        <ul className="hidden md:flex items-center space-x-8 md:pl-28">
          <li>
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/DomainPage" className="hover:text-indigo-600">
              Domain
            </Link>
          </li>
          <li>
            <Link to="/Hosting" className="hover:text-indigo-600">
              Hosting
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" className="hover:text-indigo-600">
              Website Builder
            </Link>
          </li>
        </ul>

        <Link to="/Login" className="md:inline hidden ml-20">
          <button className="bg-white hover:bg-gray-50 border border-gray-300 px-9 py-2 rounded-full active:scale-95 transition-all">
            Login
          </button>
        </Link>

        <button
          id="menuButton"
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          id="mobileMenu"
          className={`mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 ${
            open ? "" : "hidden"
          } md:hidden z-50`}
        >
          <ul className="flex flex-col space-y-4 text-lg">
            <li>
              <Link
                to="/"
                className="block py-2 text-sm"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/DomainPage"
                className="block py-2 text-sm"
                onClick={() => setOpen(false)}
              >
                Domain
              </Link>
            </li>
            <li>
              <Link
                to="/Hosting"
                className="block py-2 text-sm"
                onClick={() => setOpen(false)}
              >
                Hosting
              </Link>
            </li>
            <li>
              <Link
                to="/Dashboard"
                className="block py-2 text-sm"
                onClick={() => setOpen(false)}
              >
                Website Builder
              </Link>
            </li>
          </ul>
          <Link
            to="/Login"
            className="w-full block"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
            >
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
