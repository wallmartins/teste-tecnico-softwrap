/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  return (
    <>
      <nav className="bg-gray-800 w-screen flex lg:justify-center justify-end">
        <div className="sm:flex md:flex lg:hidden xl:hidden">
          <button
            type="button"
            className="inline-flex p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setMenuMobile(!menuMobile)}
          >
            {menuMobile ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex container px-8 py-5 space-x-2">
          <NavLink
            to="/"
            exact
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"
            activeClassName="bg-gray-900"
          >
            Visualizar Cadastrados
          </NavLink>

          <NavLink
            to="/register"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900"
          >
            Novo Cadastro
          </NavLink>
        </div>
      </nav>
      <div className={`${menuMobile ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="absolute w-full bg-gray-800 px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            exact
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900"
            aria-current="page"
          >
            Visualizar Cadastrados
          </NavLink>

          <NavLink
            to="/register"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            activeClassName="bg-gray-900"
          >
            Novo Cadastro
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
