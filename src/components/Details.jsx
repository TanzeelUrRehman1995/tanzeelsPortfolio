import React, { useState } from "react";
import { VscVscodeInsiders } from "react-icons/vsc";
import { CgFigma } from "react-icons/cg";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { AiOutlineHtml5 } from "react-icons/ai";

function Details() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const [parts, setparts] = useState({
    part1: true,
    parttwo: false,
    partthree: false,
    partfour: false,
  });
  return (
    <>
      <section class="featured-properties  bg-[#f5f5f5]  lg:py-[50px] lg:px-5">
        <div class="container mx-auto relative">
          <div class="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">
            <div
              class="col-span-12 lg:col-span-5 2xl:col-span-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
                <span class="text-[#ffb646] text-xl">Resume</span>
                <h3 class="text-black text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-[#ffb646] before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  All over my details find here...
                </h3>
              </div>
              <div class="tabs flex flex-wrap  font-Syne font-bold lg:flex-col gap-2 my-8 lg:my-0">
                <button
                  onClick={() =>
                    setparts({
                      part1: true,
                      parttwo: false,
                      partthree: false,
                      partfour: false,
                    })
                  }
                  data-tab="about_me_tab"
                  class={`tab-btn justify-between items-center inline-flex group active rounded-lg py-5  px-5  ${parts.part1 ? "bg-black text-white" : 'hover:bg-black hover:text-white bg-white'}`}
                  onMouseEnter={() => setHoveredButton("about_me_tab")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  About me
                  <span
                    class={`inline-block ml-3 ${
                      hoveredButton === "about_me_tab"
                        ? "card-animate-arrow "
                        : ""
                    }`}
                  >
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
                </button>
                <button
                  onClick={() =>
                    setparts({
                      part1: false,
                      parttwo: true,
                      partthree: false,
                      partfour: false,
                    })
                  }
                  data-tab="experience_tab"
                  class={`tab-btn justify-between items-center inline-flex group active rounded-lg py-5  px-5  ${parts.parttwo ? "bg-black text-white" : 'hover:bg-black hover:text-white bg-white'}`}
                  onMouseEnter={() => setHoveredButton("experience_tab")}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Experience
                  <span
                    class={`inline-block ml-3 ${
                      hoveredButton === "experience_tab"
                        ? "card-animate-arrow"
                        : ""
                    }`}
                  >
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
                </button>
                <button
                  data-tab="education_tab"
                  class={`tab-btn justify-between items-center inline-flex group active rounded-lg py-5  px-5  ${parts.partthree ? "bg-black text-white" : 'hover:bg-black hover:text-white bg-white'}`}
                  onMouseEnter={() => setHoveredButton("education_tab")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() =>
                    setparts({
                      part1: false,
                      parttwo: false,
                      partthree: true,
                      partfour: false,
                    })
                  }
                >
                  Education
                  <span class={`inline-block ml-3 ${
                      hoveredButton === "education_tab"
                        ? "card-animate-arrow"
                        : ""
                    }`}>
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
                </button>
                <button
                  data-tab="skills_tab"
                  class={`tab-btn justify-between items-center inline-flex group active rounded-lg py-5  px-5  ${parts.partfour ? "bg-black text-white" : 'hover:bg-black hover:text-white bg-white'}`}
                  onMouseEnter={() => setHoveredButton("skills_tab")}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() =>
                    setparts({
                      part1: false,
                      parttwo: false,
                      partthree: false,
                      partfour: true,
                    })
                  }
                >
                  Skills
                  <span class={`inline-block ml-3 ${
                      hoveredButton === "skills_tab"
                        ? "card-animate-arrow"
                        : ""
                    }`}>
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
                </button>
              </div>
            </div>

            <div
              class="col-span-12 lg:col-span-7 2xl:col-span-8 font-Syne "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {parts.part1 && (
                <div id="about_me_tab" class="tab-content active relative">
                  <div class="grid grid-cols-1">
                    <h4 class="text-black text-2xl lg:text-[32px] font-bold  mb-6">
                      Based in Pakistan
                    </h4>
                    <p class="paragraph mb-7 text-lg">
                      Tanzeel Ur Rehman, {" "}
                      <span class="text-black">Product Designer</span>, based in
                      Pakistan. That is where I come in. A lover of words, a
                      wrangler of copy. Here to create copy that not only
                      reflects who you are and what you stand for,
                    </p>
                    <p class="paragraph mb-14 text-lg">
                      but words that truly land with those that read them,
                      calling your audience in and making them want more.
                    </p>

                    <ul class="flex-col gap-3 inline-flex">
                      <li class="gap-10 inline-flex items-center">
                        <span class="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Name
                        </span>
                        <span class="text-black text-2xl font-bold font-Syne leading-8">
                          Tanzeel Ur Rehman
                        </span>
                      </li>
                      <li class="gap-10 inline-flex items-center">
                        <span class="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Nationality
                        </span>
                        <span class="text-black text-2xl font-bold font-Syne leading-8">
                          Pakistani
                        </span>
                      </li>
                      <li class="gap-10 inline-flex items-center">
                        <span class="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Phone
                        </span>
                        <span class="text-black text-2xl font-bold font-Syne leading-8">
                          +(92) 344 2678983
                        </span>
                      </li>
                      <li class="gap-10 inline-flex items-center">
                        <span class="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Email
                        </span>
                        <span class="text-black text-2xl font-bold font-Syne leading-8">
                          tanzellurrehman1995@gmail.com
                        </span>
                      </li>
                      <li class="gap-10 inline-flex items-center">
                        <span class="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Experience
                        </span>
                        <span class="text-black text-2xl font-bold font-Syne leading-8">
                          1+ years
                        </span>
                      </li>
                      <li class="gap-10 inline-flex items-center">
                        <span class="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Freelance
                        </span>
                        <span class="text-black text-2xl font-bold font-Syne leading-8">
                          Available
                        </span>
                      </li>

                      <li class="gap-10 inline-flex items-center">
                        <span class="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                          Language
                        </span>
                        <span class="text-black text-2xl font-bold font-Syne leading-8">
                          English, Urdu
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {parts.parttwo && (
                <div id="experience_tab" class="tab-content relative">
                  <h4 class="text-black text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                    Experience
                  </h4>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                    <div class="pt-[30px] px-7 pb-7 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                      <span class="text-sm font-normal font-Inter leading-tight text-black-text-800">
                        02/2024 – Running
                      </span>
                      <div>
                        <p class="text-lg font-normal font-sans leading-7 text-black relative z-[1] before:rounded-full before:bg-[#ffb646] before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4 ">
                          Technoties
                        </p>
                        <h4 class="font-bold font-Syne leading-normal text-2xl text-black">
                          {" "}
                          Web Developer
                        </h4>
                      </div>
                    </div>

                    <div class="pt-[30px] px-7 pb-7 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between">
                      <span class="text-sm font-normal font-Inter leading-tight text-black-text-800 ">
                        09/2023 – 01/2024
                      </span>
                      <div>
                        <p class="text-lg font-normal font-sans leading-7 text-black relative z-[1] before:rounded-full before:bg-[#ffb646] before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                          Vibrant Media Inc.
                        </p>
                        <h4 class="font-bold font-Syne leading-normal text-2xl text-black">
                          Frontend Developer
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {parts.partthree && (
                <div id="education_tab" class="tab-content">
                  <h4 class="text-black text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                    Education
                  </h4>

                  <div class="grid grid-cols-2 gap-6">
                    <div class="pt-[30px] px-7 pb-7 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-col flex-wrap gap-[30px] ">
                      <span class="text-sm font-normal font-Inter leading-tight text-black-text-800">
                        2015 – 2019
                      </span>
                      <div class="flex-1">
                        <p class="text-lg font-normal font-sans leading-7 text-black relative z-[1] before:rounded-full before:bg-[#ffb646] before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                          Indus University
                        </p>
                        <h4 class="font-bold font-Syne leading-normal text-2xl text-black">
                          BS Computer Science
                        </h4>
                      </div>
                    </div>

                    <div class="pt-[30px] px-7 pb-7 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-col flex-wrap gap-[30px] ">
                      <span class="text-sm font-normal font-Inter leading-tight text-black-text-800">
                        2012 – 2014
                      </span>
                      <div class="flex-1">
                        <p class="text-lg font-normal font-sans leading-7 text-black relative z-[1] before:rounded-full before:bg-[#ffb646] before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                          Govt. Degree College for boys, Bufferzone
                        </p>
                        <h4 class="font-bold font-Syne leading-normal text-2xl text-black">
                          F.sc
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {parts.partfour && (
                <div id="skills_tab" class="tab-content">
                  <h4 class="text-black text-2xl lg:text-[32px] font-bold font-Syne mb-6">
                    Skills
                  </h4>

                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    <div class="pt-[30px] px-7 pb-7 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                      <AiOutlineHtml5 color="#ffb646" size={25} />

                      <div class="flex flex-wrap gap-1 flex-1 flex-col">
                        <h4 class="font-bold font-Syne leading-normal text-xl text-black">
                          HTML
                        </h4>
                        <p class="text-sm font-normal font-Inter leading-none text-black">
                          (90%)
                        </p>
                      </div>
                    </div>
                    <div class="pt-[30px] px-7 pb-7 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                      <VscVscodeInsiders color="#ffb646" size={25} />

                      <div class="flex flex-wrap gap-1 flex-1 flex-col">
                        <h4 class="font-bold font-Syne leading-normal text-xl text-black">
                          React JS
                        </h4>
                        <p class="text-sm font-normal font-Inter leading-none text-black">
                          (60%)
                        </p>
                      </div>
                    </div>

                    <div class="pt-[30px] px-7 pb-7 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                      <CgFigma color="#ffb646" size={25} />

                      <div class="flex flex-wrap gap-1 flex-1 flex-col">
                        <h4 class="font-bold font-Syne leading-normal text-xl text-black">
                          Figma to HTML
                        </h4>
                        <p class="text-sm font-normal font-Inter leading-none text-black">
                          (100%)
                        </p>
                      </div>
                    </div>
                    <div class="pt-[30px] px-7 pb-7 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                      <TbBrandJavascript color="#ffb646" size={25} />

                      <div class="flex flex-wrap gap-1 flex-1 flex-col">
                        <h4 class="font-bold font-Syne leading-normal text-xl text-black">
                          JavaScript
                        </h4>
                        <p class="text-sm font-normal font-Inter leading-none text-black">
                          (80%)
                        </p>
                      </div>
                    </div>
                    <div class="pt-[30px] px-7 pb-7 bg-gray-200  rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap gap-4 items-start">
                      <BiLogoTailwindCss color="#ffb646" size={25} />

                      <div class="flex flex-wrap gap-1 flex-1 flex-col">
                        <h4 class="font-bold font-Syne leading-normal text-xl text-black">
                          Tailwind Css
                        </h4>
                        <p class="text-sm font-normal font-Inter leading-none text-black">
                          (90%)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              )}
            </div>
            
            <span class="flex justify-end  -mr-9 absolute  right-0 bottom-0">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5625 0C27.5625 23.1273 9.1875 28.5455 0 27.8182C16.875 31.0909 25.3125 34.3636 27 54C27 40.3636 34.875 30.5455 54 27.8182C46.125 28.3636 29.8125 24 27.5625 0Z"
                  fill="#FFB646"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
