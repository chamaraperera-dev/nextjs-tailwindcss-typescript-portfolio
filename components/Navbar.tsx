'use client'; //This is a react component, so we need to tell the compiler to use the client compiler

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Image from 'next/image';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Projects', page: 'projects' },
  { label: 'Contact', page: 'contact' },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 bg-white shadow fixed  top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-stone-600">
      <div className="justify-between md:items-center md:flex ">
        <div>
          <div className="flex items-center py-3">
            <Link href="/" to="home">
              <div className="md:py-6 md:block cursor-pointer">
                <Image
                  src={
                    theme === 'dark'
                      ? '/chamara-perera-logo-dark.png'
                      : '/chamara-perera-logo-light.png'
                  }
                  alt="chamara-perera-logo"
                  width={300}
                  height={300}
                />
              </div>
            </Link>

            <div className="md:hidden">
              <button
                type="button"
                aria-label="Toggle Navigation Menu"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center text-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center  justify-center md:flex  space-y-8 gap-6 md:space-y-0">
              {NAV_ITEMS.map((item, id) => {
                const { label, page } = item;
                return (
                  <Link
                    key={id}
                    href="/"
                    to={page}
                    className=" block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 dark:hover:text-neutral-100 cursor-pointer "
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {label}
                  </Link>
                );
              })}
              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
