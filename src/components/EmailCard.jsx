import React, { useState } from "react";
import { Link } from "react-router-dom";

function EmailCard() {
  const [isEmailSecHovered , setIsEmailSecHovered] = useState(false);
  return (
    <>
      <div
        class="col-span-12 xl:col-span-4 "
        data-aos="zoom-in"
        data-aos-delay="1000"
        onMouseEnter={()=> setIsEmailSecHovered(true)} onMouseLeave={()=> setIsEmailSecHovered(false)}
      >
        <div class="px-6 py-9 bg-black rounded-lg flex flex-wrap flex-col justify-between  mx-auto space-y-56 group">
          <div class="flex flex-wrap justify-end">
            <Link to="#" className={` ${isEmailSecHovered ? 'card-animate-arrow' : ''}  `}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3333 56.6666L56.6667 23.3333"
                  stroke="#FFB646"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M23.3333 23.3333H56.6667V56.6666"
                  stroke="#FFB646"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Link>
          </div>

          <div class="flex flex-col flex-wrap gap-y-2">
            <span class="text-[#ffb646] text-lg font-normal leading-none">
              SAY HELLO!
            </span>
            <h4 class="text-white text-2xl xl:text-[32px] font-bold font-Syne leading-none">
              Tanzeelurrehman1995@gmail.com
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailCard;
