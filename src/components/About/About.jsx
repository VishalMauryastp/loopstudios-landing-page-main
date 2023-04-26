import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  return (
    <footer className="bg-black">
      <div className="w-[80%] mx-auto my-0 py-10 px-3 flex justify-between flex-col md:flex-row   ">
        <div className="md:w-[40%]">
          <img className="mx-auto my-0 md:mx-0 " src={Logo} alt="Logo" />
          <ul className="text-white mt-3 flex flex-col justify-between items-center max-w-[100%] md:flex-row  md:max-w-[20em] ">
            <li className="py-1 cursor-pointer ">
              <a href="#"></a>About
            </li>
            <li className="py-1 cursor-pointer  md:ml-2">
              <a href="#"></a>Carrers
            </li>
            <li className="py-1 cursor-pointer  md:ml-2 ">
              <a href="#"></a>Event
            </li>
            <li className="py-1 cursor-pointer  md:ml-2">
              <a href="#"></a>Products
            </li>
            <li className="py-1 cursor-pointer  md:ml-2">
              <a href="#"></a>Supports
            </li>
          </ul>
        </div>

        <div className="md:w-[40%] md:text-right ">
          <div className="footer_icon flex justify-between mx-auto my-0 mt-6 md:mt-0 md:ml-auto md:mr-0 text-white font-[2rem] max-w-[80%] md:max-w-[50%] md: ">
            <Link className=" text-[2rem] " to="#">
              <AiFillFacebook />
            </Link>
            <a className="text-[2rem] ml-2" href="#">
              <BsTwitter />
            </a>
            <a className="text-[2rem] ml-2" href="#">
              <BsPinterest />
            </a>
            <a className="text-[2rem] ml-2" href="#">
              <BsInstagram />
            </a>
          </div>
          <p className="text-white text-center   md:text-right flex justify-center  md:justify-end mt-7 md:mt-3">
            &#169; 2023 loopstudios.All rights reserved{" "}
            <br className="hidden md:block" /> by Vishal Maurya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default About;
