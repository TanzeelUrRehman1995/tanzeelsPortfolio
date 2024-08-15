import { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';

import { IoIosMenu } from "react-icons/io";
import Drawer from "./Drawer";
import { FaConnectdevelop } from "react-icons/fa";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigate to home page
  };

  // const handleClick = () => {
  //   window.location.href = '/'; // Navigate to home page
  // };
  return (
    <>
      <header>
        <div className="w-full flex justify-between items-center absolute z-40 border-b border-gray-500 sm:pl-2  bg-transparent">
            <div className="flex items-center cursor-pointer" onClick={handleClick} >
              <FaConnectdevelop size={35} />
              <p className="pl-2">Devs</p>
            </div>
          <div className="flex items-center ">
            <div className="pr-2">
              <ul>
                <li>
                  <Link
                    to="/ContactUs"
                    className="flex items-center justify-between text-black font-bold group hover:text-gray-700"
                  >
                    Let's Talk
                    <span className="inline-block pl-2">
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
                </li>
              </ul>
            </div>
            <div
              className="cursor-pointer bg-black p-5 "
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <IoIosMenu size={30} color="#ffffff" />
            </div>
          </div>
        </div>
      </header>

      <Drawer toggle={openDrawer} Close={() => setOpenDrawer(false)} />
    </>
  );
}

export default Header;
