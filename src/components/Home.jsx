import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Phone from "../assets/phone.png";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full h-screen bg-[#DDDDDD] text-white text-4xl px-[170px]  ">
      {width > 960 ? (
        <div className="flex justify-between h-screen py-72 items-center">
          <div>
            <motion.img whileInView={{x: [-100, 0], opacity: [0, 1]}} transition={{duration: 0.8}} className="h-screen" src={Phone} alt="Phone" />
          </div>
          <div className="flex-1 text-right  flex-col">
            <h1 className="font-bold font-HelveticaBold  text-4xl lg:text-[64px] text-[#240D57] mb-4">
              Imagine if <br /> <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
                Snapchat
              </span>{" "}
              <br /> <br /> had events.
            </h1>
            <p className="text-[#4f4f4f] text-2xl text-right w-full font-Helvetica">
              Easily host and share events with your friends <br />
              across any social media
            </p>
           
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileInView={{x: [100, 0], opacity: [0, 1]}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=" hover:drop-shadow-md   hover:bg-gradient-to-l from-[#E87BF8] to-[#8456EC] font-bold text-xl font-Helvetica bg-gradient-to-r from-[#8456EC] to-[#E87BF8] py-4 px-16 rounded-[10px] my-14 "
            >
              🎉 Create my event
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-full  flex-col items-center ">
          <div className="flex  h-full  text-center  items-center flex-col ">
            <h1 className="font-bold text-center font-HelveticaBold  text-3xl md:text-7xl mt-10 text-[#240D57] mb-4">
              Imagine if <br />{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
                Snapchat
              </span>{" "}
              <br />
              had events.
            </h1>
            <p className="text-[#4f4f4f] text-sm w-[300px] md:w-[600px] px-4 md:text-2xl font-Helvetica">
              Easily host and share events with your friends <br />
              across any social media
            </p>
            <div className="md:h-[548px]">
            <motion.img whileInView={{opacity: [0, 1]}} transition={{duration: 0.8}} className="md:h-full h-[290px] " src={Phone} alt="Phone" />
          </div>
            <motion.button
              whileTap={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className=" hover:drop-shadow-md flex items-center justify-center md:text-2xl  hover:bg-gradient-to-l from-[#E87BF8]   to-[#8456EC]  text-xs  font-Helvetica bg-gradient-to-r from-[#8456EC] to-[#E87BF8] md:py-4 md:px-8 px-4 py-2 w-[150px] md:w-[70%] text-left rounded-[10px] md:my-10 "
            >
              🎉 Create my event
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
