import React, { useState } from 'react';
const Nav = () => {
 const [menuOpen, setMenuOpen] = useState(false)
 
    return (
        <>
        {/* Navbar */}
      <nav className='flex justify-between items-center pt-4 relative'>

        {/* Logo */}
        <div className="logo">
          <img
            src="./images/brand_logo.png"
            alt="brand logo"
            className="w-24"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 font-medium items-center">
          <a href="#" className="hover:text-red-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-red-600 transition">
            Location
          </a>

          <a href="#" className="hover:text-red-600 transition">
            About
          </a>

          <a href="#" className="hover:text-red-600 transition">
            Contact
          </a>
        </div>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <button className="text-white bg-red-600 py-2 px-4 rounded hover:bg-red-700 transition">
            Login
          </button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {
          menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg flex flex-col items-center gap-6 py-6 md:hidden z-50">

              <a
                href="#"
                className="hover:text-red-600 transition"
              >
                Home
              </a>

              <a
                href="#"
                className="hover:text-red-600 transition"
              >
                Location
              </a>

              <a
                href="#"
                className="hover:text-red-600 transition"
              >
                About
              </a>

              <a
                href="#"
                className="hover:text-red-600 transition"
              >
                Contact
              </a>

              <button className="text-white bg-red-600 py-2 px-4 rounded hover:bg-red-700 transition">
                Login
              </button>

            </div>
          )
        }

      </nav>
      </>
      )
}

export default Nav