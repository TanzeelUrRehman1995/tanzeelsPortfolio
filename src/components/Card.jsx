import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        class="max-w-xs p-6 bg-slate-100 rounded-lg shadow hover:shadow-lg hover:bg-white flex flex-col justify-between "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`w-12 h-12 ${
            isHovered ? "bg-slate-100" : "bg-white"
          } rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8 `}
        >
          {/* <CiMobile3 size={25} /> */}
          {props.icon}
        </div>
        
        <Link to="#" className=" flex justify-between items-center">
          <h5 className={`mb-1 font-Syne text-2xl font-semibold tracking-tight transition duration-150 ${
            isHovered ? 'text-[#ffb646] transition duration-150' : 'text-gray-900'
          } ` }>
            {/* Mobile App Design */}
            {props.title}
          </h5>
          <span className={` inline-block ${
            isHovered ? 'text-[#ffb646] card-animate-arrow' : 'text-gray-900'
          }`}  >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      stroke-opacity="0.9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7 7H17V17"
                      stroke="currentColor"
                      stroke-opacity="0.9"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
        </Link>

        
        
      </div>
    </>
  );
}

export default Card;
