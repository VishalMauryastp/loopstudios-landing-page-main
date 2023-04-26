import React from "react";
import "./VrInfo.css"
import VRMimg from "../../assets/images/mobile/image-interactive.jpg";
import VRDimg from "../../assets/images/desktop/image-interactive.jpg";

const VrInfo = () => {
  return (
    <section className="w-full mt-7 sm:mt-10 lg:mt-16 flex justify-center items-center">
      <div className="flex flex-col md:flex-row w-[80%] mx-auto my-0 relative">
        <div className=" md:w-[60%] ">
          <picture>
            <source className="w-full min-w-[60%]" media="(min-width: 768px)" srcSet={VRDimg} />
            <img className="w-full" src={VRMimg} alt="img" />
          </picture>
        </div>
        <div className="VR_content  p-2 md:pl-10 text-center md:text-left md:absolute md:right-[1%] md:-bottom-[4rem] md:w-[50%] bg-white  ">
          <h2 className=" mt-10 text-[2rem] md:text-[3rem] uppercase leading-[3rem]">The leader in interactive VR</h2>
          <p className="mt-10 sm:mb-10 text-gray-400 font-semibold ">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VrInfo;
