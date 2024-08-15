import Card from "./Card";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdPermIdentity } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";
import EmailCard from "./EmailCard";

function Services() {
  
  return (
    <>
      <section>
        <div className="container mx-auto lg:px-5 pt-10">
          <div className="flex justify-between items-center py-14">
            <div className="w-1/2 font-Syne">
              <span
                className="text-[#ffb646] font-bold text-xl"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Services
              </span>
              <h3
                className="text-black font-bold text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-[#ffb646] before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                My Specialties
              </h3>
            </div>
            <div className="w-1/2 "
            data-aos="fade-left"
            data-aos-delay="600">
              <p className="font-Syne text-xl font-normal text-gray-500 leading-9 pt-5">
                Synergistically seize front-end methods of empowerment without
                extensive core competencies. Progressively repurpose alternative
                platforms
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <div className="grid grid-cols-3 gap-4"
            data-aos="fade-right"
            data-aos-delay="800">
              <Card
                icon={<CiMobile3 size={25} />}
                title={`Mobile App Design`}
              />
              <Card
                icon={<MdOutlineDesignServices size={25} />}
                title={"UI/UX Design"}
              />
              <Card icon={<CgWebsite size={25} />} title={"Web Design"} />
              <Card
                icon={<LiaLaptopCodeSolid size={25} />}
                title={"Webflow Development"}
              />
              <Card
                icon={<MdPermIdentity size={25} />}
                title={"Brand Identity"}
              />
              <Card
                icon={<HiRefresh size={25} />}
                title={"Interactive Design"}
              />
            </div>
            <div className="mt-4 md:mt-0">
              <EmailCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
