import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-50 backdrop-filter backdrop-blur-lg rgb(16, 16, 19)  text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6819/6819062.png"
          alt="DAFFAsf"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="text-lg font-semibold">DaffaSF</span>
      </div>
      
      <ul className="flex justify-end">
        <li className="mr-4">
          <NavLink
            to="/"
            exact
            activeClassName="text-blue-500 font-bold underline" 
            className={location.pathname === '/' ? 'text-blue-500 font-bold underline' : ''}
          >
            Home
          </NavLink>
        </li>
        <li className="mr-4">
          <NavLink
            to="/about"
            activeClassName="text-blue-500 font-bold underline" 
            className={location.pathname === '/about' ? 'text-blue-500 font-bold underline' : ''}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeClassName="text-blue-500 font-bold underline"
            className={location.pathname === '/contact' ? 'text-blue-500 font-bold underline' : ''}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
