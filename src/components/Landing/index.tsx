import React from "react";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";
import { CREATE_CONTACT } from "routes/constants";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#2699fb] py-[100px] w-full h-screen">
      <div className="max-w-[1240px] mx-auto my-[100px] text-center">
        <Typed // Typed component from "react-typed"
          className="text-white text-2xl"
          strings={["Taiyō.Ai Task"]}
          typeSpeed={100}
          loop={true}
          backSpeed={50}
        />
        <div className="mt-5">
          <button
            className=" bg-black text-white w-fit p-3 rounded-full"
            onClick={() => navigate(CREATE_CONTACT)} // navigating to create contact url
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
