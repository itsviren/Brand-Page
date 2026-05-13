import React, { useState } from 'react'

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="px-4 md:px-10">

      {/* Navbar */}
      <nav className="flex justify-between items-center pt-4 relative">

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

      {/* Hero Section */}
      <section className="main flex flex-col-reverse lg:flex-row items-center pt-10 lg:pt-20">

        {/* Left Section */}
        <div className="left-section w-full lg:w-1/2 flex flex-col">

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight pb-6 text-center lg:text-left">
            YOUR FEET <br />
            DESERVE <br />
            THE BEST
          </h1>

          <p className="text-gray-700 lg:w-3/4 pb-8 text-sm sm:text-base text-center lg:text-left">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU
            WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE’RE
            HERE TO HELP YOU WITH OUR SHOES.
          </p>

          {/* Buttons */}
          <div className="btn-group flex flex-wrap gap-4 pb-8 justify-center lg:justify-start">

            <button className="text-white bg-red-600 rounded py-2 px-5 hover:bg-red-700 transition">
              Shop Now
            </button>

            <button className="text-black border border-black rounded py-2 px-5 hover:bg-black hover:text-white transition">
              Category
            </button>

          </div>

          {/* Available On */}
          <div className="avail-para pb-4">
            <p className="text-gray-600 text-center lg:text-left">
              Also Available On
            </p>
          </div>

          {/* Logos */}
          <div className="logo-group flex gap-4 items-center pb-4 justify-center lg:justify-start">

            <img
              className="w-8"
              src="./images/flipkart.png"
              alt="flipkart"
            />

            <img
              className="w-8"
              src="./images/amazon.png"
              alt="amazon"
            />

          </div>

        </div>

        {/* Right Section */}
        <div className="right-section w-full lg:w-1/2 flex justify-center">

          <img
            src="./images/shoe_image.png"
            alt="shoe"
            className="w-full max-w-md lg:max-w-xl"
          />

        </div>

      </section>

    </div>
  )
}

export default App