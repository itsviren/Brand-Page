const LeftSection = () => {

    return(
        <>
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
        </>

    )
}

export default LeftSection;