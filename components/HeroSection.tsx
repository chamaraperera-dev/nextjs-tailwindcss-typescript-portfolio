//Id is used to link to the section from the navbar
'use client';

import Image from 'next/image';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="mt-32 xs:mb-10 mb-32 sm:mb-32  md:py-52">
        <div
          className=" flex flex-col
      text-center items-center justify-center md:flex-row md:text-left md:space-x-4"
        >
          <div className="md:w-1/2 md:mt-2">
            <Image
              className="rounded-full shadow-2xl"
              src="/chamara-headshot.jpg"
              alt="chamara-headshot"
              width={300}
              height={300}
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="font-bold mt-6 text-3xl md:text-6xl md:mt-0 ">
              {' '}
              Hi, I&#39;m Chamara!{' '}
            </h1>
            <p className="text-lg mt-6 mb-10 md:text-2xl">
              I&#39;m a {''}
              <span className="font-semibold text-teal-600">
                Full Stack Developer{' '}
              </span>
              and medical doctor based in Brisbane, Australia.
            </p>
            <Link
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-700 rounded shadow hover:bg-teal-700 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Link
          className="flex justify-center cursor-pointer"
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
