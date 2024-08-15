import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaConnectdevelop } from "react-icons/fa";
import "../animation.css";
import { Link } from "react-router-dom";

function Drawer(props) {
  return (
    <>
      <div
        id="drawer-navigation"
        className={`fixed top-0 right-0 z-40 h-screen p-4 pl-5 overflow-y-auto transition-transform ${
          props.toggle ? "" : "translate-x-full"
        } bg-black w-[400px] dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <div className="border-b pb-5 border-gray-300 mb-20">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-900"
          >
            <div className="flex items-center">
              <div>
                <FaConnectdevelop size={35} color="#fff" />
              </div>
              <div className="pl-2 capitalize text-white">Devs</div>
            </div>
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-white bg-transparent hover:bg-[#e5aa52] hover:text-gray-900 rounded-md text-sm w-12 h-12 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
            onClick={props.Close}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-semibold text-lg">
            <li>
              <Link
                to="/"
                className="flex items-center justify-between p-2 text-white font-bold group border-b border-gray-100/25 transition duration-200 hover:text-[#e5aa52] hover:transition hover:duration-200"
              >
                Home
                <span className="inline-block">
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
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7h10v10"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="flex items-center justify-between p-2 text-white font-bold border-b border-gray-100/25 transition duration-200 hover:text-[#e5aa52] hover:transition hover:duration-200"
              >
                About
                <span className="inline-block">
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
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7h10v10"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center justify-between p-2 text-white font-bold border-b border-gray-100/25 transition duration-200 hover:text-[#e5aa52] hover:transition hover:duration-200"
              >
                Projects
                <span className="inline-block">
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
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7h10v10"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center justify-between p-2 text-white font-bold border-b border-gray-100/25 transition duration-200 hover:text-[#e5aa52] hover:transition hover:duration-200"
              >
                Blogs
                <span className="inline-block">
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
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7h10v10"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/ContactUs"
                className="flex items-center justify-between p-2 text-white font-bold border-b border-gray-100/25 transition duration-200 hover:text-[#e5aa52] hover:transition hover:duration-200"
              >
                Contact
                <span className="inline-block">
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
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7h10v10"
                      stroke="currentColor"
                      strokeOpacity="0.9"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex space-x-3 absolute bottom-4">
          <FaFacebook
            size={25}
            className="text-gray-100 hover:text-[#e5aa52]"
            title="Facebook"
          />
          <FaLinkedin
            size={25}
            className="text-gray-100 hover:text-[#e5aa52]"
            title="LinkedIn"
          />
          <FaGithub
            size={25}
            className="text-gray-100 hover:text-[#e5aa52]"
            title="Github"
          />
        </div>
      </div>
    </>
  );
}

export default Drawer;
