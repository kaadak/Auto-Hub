import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "/landing-page-3.jpg",
    "/landing-page-1.jpg",
    "/landing-page-2.jpg",
  ];
  const [index, setIndex] = useState(0);

  const toggleRight = () => {
    index == 2 ? setIndex(0) : setIndex(index + 1);
  };

  const toggleLeft = () => {
    index == 0 ? setIndex(2) : setIndex(index - 1);
  };

  const words = [
    {
      header: "Looking for the Right Vehicle Repair Service?",
      paragraph:
        "Experience fast, reliable car repairs from our team of expert mechanics, ensuring your vehicle is back on the road safely and efficiently, so you can drive worry-free!",
    },

    {
      header: "Best Auto Repair Shop and Maintenance Services",
      paragraph:
        "Experience fast, reliable car repairs from our team of expert mechanics, ensuring your vehicle is back on the road safely and efficiently, so you can drive worry-free!",
    },

    {
      header: "Best Auto Repair Shop and Maintenance Services",
      paragraph:
        "Experience fast, reliable car repairs from our team of expert mechanics, ensuring your vehicle is back on the road safely and efficiently, so you can drive worry-free!",
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center  bg-no-repeat bg-cover bg-center justify-center"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="container mx-auto relative space-y-7 text-center"
>
  <motion.h2
    className="md:text-5xl text-4xl max-w-xl mx-auto [text-shadow:1px_1px_2px_black] font-bold md:leading-15 text-white"
  >
    {words[index].header}
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
    className="text-white max-w-2xl bg-red-900 mx-auto py-3 px-5 rounded-md md:text-center shadow-2xl"
  >
    {words[index].paragraph}

  </motion.p>

  <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="flex justify-center gap-4"
>
  <Link
    to="/contact"
    className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
  >
    Make an Appointment
  </Link>

  <Link
    to='/services' 
    className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
  >
    Services
  </Link>
</motion.div>
</motion.div>


      <div className="absolute px-5 inset-0  pointer-events-none flex text-xl text-white justify-between ">
        <button className="pointer-events-auto cursor-pointer" onClick={toggleLeft}>
          <FaAngleLeft />
        </button>
        <button className="pointer-events-auto cursor-pointer" onClick={toggleRight}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
