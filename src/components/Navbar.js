import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full 
        transition-[width] ease duration-300 dark:bg-dark ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out   ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Research & Projects" className="mx-4" />
          {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://youtube.com/@mrinalbanchhor?si=XpDDs265WnFsAjJi"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 flex items-center text-red-600 hover:underline text-2xl font-semibold hover:scale-105 transition-transform"
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube/>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mrinalbanchhor/profilecard/?igsh=MThmcTd6MDZ2YjN4dQ=="
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 flex items-center gap-2 text-pink-600 hover:underline text-2xl font-semibold hover:scale-105 transition-transform"
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=61578242469081"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 flex items-center gap-2 text-blue-600 hover:underline text-2xl font-semibold hover:scale-105 transition-transform"
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
         {/*  <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 bg-light rounded-full"
            whileTap={{ scale: 0.9 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3"
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a> */}

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ease ml-3 flex items-center justify-center rounded-full p-1  
          ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
        initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
        animate={{scale:1, opacity:1}}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            {/* <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            /> */}
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
            href="https://youtube.com/@mrinalbanchhor?si=XpDDs265WnFsAjJi"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 flex items-center text-red-600 hover:underline text-2xl font-semibold hover:scale-105 transition-transform"
            whileTap={{ scale: 0.9 }}
          >
            <FaYoutube/>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mrinalbanchhor/profilecard/?igsh=MThmcTd6MDZ2YjN4dQ=="
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 flex items-center gap-2 text-pink-600 hover:underline text-2xl font-semibold hover:scale-105 transition-transform"
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=61578242469081"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mx-3 flex items-center gap-2 text-blue-600 hover:underline text-2xl font-semibold hover:scale-105 transition-transform"
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebook />
          </motion.a>
            {/* <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 bg-light rounded-full sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mx-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a> */}

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ease ml-3 flex items-center justify-center rounded-full p-1  
          ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
