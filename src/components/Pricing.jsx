import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Pricing() {
    const [hovered , setHovered] = useState(false);
    const [basicHovered , setBasicHovered] = useState(false);
    const [premiumHovered , setPremiumHovered] = useState(false);
    const [platinumHovered , setPlatinumHovered] = useState(false);
  return (
    <>
      <section class="bg-white pb-[120px] lg:px-5">
            <div class="container mx-auto">
                <div class="grid grid-cols-12">
                    <div class="col-span-12">
                        <div class="flex flex-col md:flex-row justify-between md:items-end my-16">
                            <div class="font-bold font-Syne leading-none flex flex-wrap flex-col gap-y-2 max-w-[325px] lg:max-w-[400px] xl:max-w-[527px] aos-init aos-animate" data-aos="fade-up">
                                <span class="text-[#ffb646] text-xl">Pricing</span>
                                <h3 class="text-black text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                    Stay chill and pick your <span class="relative z-[1] before:rounded-full before:bg-[#ffb646] before:block before:absolute before:top-[13px] before:left-[-4px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">pl</span>an
                                </h3>
                            </div>

                            <div class="flex mt-8 md:mt-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <Link to="/ContactUs" class="flex items-center font-Syne flex-wrap bg-black text-white border border-black font-bold px-5 py-5 rounded-lg group transition duration-150 hover:bg-white hover:text-black hover:border hover:border-black hover:transition hover:duration-150" onMouseEnter={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)}>
                                    Contact for Custom Project
                                    <span class={`inline-block ml-3 ${hovered ? 'card-animate-arrow transition duration-150 ': '' }`}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    <div class="p-6 lg:p-8 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" onMouseEnter={()=> setBasicHovered(true)} onMouseLeave={()=> setBasicHovered(false)}>

                        <div class="flex items-center justify-between">
                            <span class="text-lg font-normal font-sans leading-none text-black-text-600">Basic</span>
                            <span class="font-bold text-xl font-Syne text-[#ffb646]">$48/h</span>
                        </div>

                        <div class="flex flex-wrap justify-between items-end">
                            <div>
                                <h4 class="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">20 hrs
                                </h4>
                                <p class="text-lg font-normal font-sans leading-none text-black-text-600">10 hours per
                                    week</p>
                            </div>

                            <Link to="#" class={`text-black-text-600 ${ basicHovered ?  'text-[#ffb646] card-animate-arrow ' : ''}`} >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>


                    <div class="p-6 lg:p-8 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500" onMouseEnter={()=> setPremiumHovered(true)} onMouseLeave={()=> setPremiumHovered(false)}>

                        <div class="flex items-center justify-between">
                            <span class="text-lg font-normal font-sans leading-none text-black-text-600">Premium</span>
                            <span class="font-bold text-xl font-Syne text-[#ffb646]">$60/h</span>
                        </div>

                        <div class="flex flex-wrap justify-between items-end">
                            <div>
                                <h4 class="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">30 hrs
                                </h4>
                                <p class="text-lg font-normal font-sans leading-none text-black-text-600">15 hours per
                                    week</p>
                            </div>

                            <Link to="#" class={`text-black-text-600 ${ premiumHovered ?  'text-[#ffb646] card-animate-arrow ' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div class="p-6 lg:p-8 bg-gray-200 rounded-2xl transition-all hover:shadow-2xl hover:bg-white group flex flex-wrap flex-col gap-10 lg:gap-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="700" onMouseEnter={()=> setPlatinumHovered(true)} onMouseLeave={()=> setPlatinumHovered(false)}>

                        <div class="flex items-center justify-between">
                            <span class="text-lg font-normal font-sans leading-none text-black-text-600">Platinum</span>
                            <span class="font-bold text-xl font-Syne text-[#ffb646]">$60/h</span>
                        </div>

                        <div class="flex flex-wrap justify-between items-end">
                            <div>
                                <h4 class="font-bold font-Syne leading-10 text-[32px] text-black-800 mb-1">20 hrs
                                </h4>
                                <p class="text-lg font-normal font-sans leading-none text-black-text-600">80 hours per
                                    week</p>
                            </div>

                            <Link href="#" class={`text-black-text-600 ${ platinumHovered ?  'text-[#ffb646] card-animate-arrow ' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="transition-all" d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path class="transition-all" d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing