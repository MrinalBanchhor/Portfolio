import Layout from "@/components/Layout";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/mrinal5.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mrinal Banchhor Portfolio</title>
        <meta name="description" content="Explore Mrinal's software developer portfolio and  discover the latest webapp projects and software engineering articles.  Showcase your skills as a full-stack developer and software engineer." />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image src={profilePic} alt="Mrinal" className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hey there! I'm Mrinal Banchhor Backend Engineer | System Whisperer | Curious Mind in the ML Space"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
             
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I’m not just a backend engineer — I’m the person who lives and breathes scalable systems, loves chasing down inefficiencies, and gets an actual dopamine hit from shaving milliseconds off response times.

With 4+ years at Nokia Solutions and Networks, I’ve been in the trenches building robust, high-performance backend systems that don’t just work — they fly. I speak fluent Java & Spring Boot, think in microservices, and deploy with Docker + Kubernetes like second nature.
              </p>
          

 <section className="w-full mt-16  px-4 sm:px-8 flex flex-col items-left text-left">
  <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-light mb-8">
    What gets me fired up:
  </h2>

  <div className="max-w-4xl w-full space-y-6 text-lg text-gray-700 dark:text-gray-300">
    <p className="flex items-start gap-2">
      <span className="text-primary font-bold">→</span>
      Designing systems that scale without blinking, no matter the traffic
    </p>
    <p className="flex items-start gap-2">
      <span className="text-primary font-bold">→</span>
      Turning sluggish legacy stacks into lean, mean performance machines
    </p>
    <p className="flex items-start gap-2">
      <span className="text-primary font-bold">→</span>
      Shipping microservices that are born containerized and cloud-ready
    </p>
    <p className="flex items-start gap-2">
      <span className="text-primary font-bold">→</span>
      Solving real-world challenges for global clients (yep, even Verizon)
    </p>
  </div>
</section>
  <section className="w-full mt-16 mb-16 px-4 sm:px-8 flex flex-col items-left text-left">
  <h2 className="text-3xl sm:text-4xl font-bold text-dark dark:text-light mb-8">
    The Other Side of Me
  </h2>

  <div className="max-w-4xl w-full space-y-6 text-lg text-gray-700 dark:text-gray-300">
    <p className="flex items-start gap-2">
      <span className="text-primary font-bold">→</span>
    Behind a camera – capturing stories through photography and short films
    </p>
    <p className="flex items-start gap-2">
      <span className="text-primary font-bold">→</span>
      On the road – I love spontaneous trips, discovering new places, and new perspectives
    </p>
    <p className="flex items-start gap-2">
      <span className="text-primary font-bold">→</span>
      On the field – whether it’s football, badminton, or anything active, I’m in
    </p>
    <p className="flex items-start gap-2">
      <span className="text-primary font-bold">→</span>
      Editing videos – it’s a creative outlet that fuels my eye for detail
    </p>
  </div>
</section>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="mailto:mrinalbanchhor@gmail.com"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-solid border-transparent hover:border-dark border-2
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
              
                >
                  Contact  <LinkArrow className={"w-6 ml-1 "} />
                </Link>
                {/* <Link href="" target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="mrinal" className="w-full h-auto" />
        </div>
   

         
      </main>
       

...

<section className="w-full mt-16 mb-24 flex flex-col items-center justify-center gap-6 text-center">
  <h2 className="text-2xl font-bold">Follow Me On</h2>
  <div className="flex flex-wrap justify-center items-center gap-8 sm:flex-col">
    
    <Link
      href="https://youtube.com/@mrinalbanchhor?si=XpDDs265WnFsAjJi"
      target="_blank"
      className="flex items-center gap-2 text-red-600 text-lg font-medium hover:underline"
    >
      <FaYoutube className="text-2xl" />
      YouTube
    </Link>

    <Link
      href="https://www.instagram.com/mrinalbanchhor/profilecard/?igsh=MThmcTd6MDZ2YjN4dQ=="
      target="_blank"
      className="flex items-center gap-2 text-pink-600 text-lg font-medium hover:underline"
    >
      <FaInstagram className="text-2xl" />
      Instagram
    </Link>

    <Link
      href="https://www.facebook.com/profile.php?id=61578242469081"
      target="_blank"
      className="flex items-center gap-2 text-blue-600 text-lg font-medium hover:underline"
    >
      <FaFacebook className="text-2xl" />
      Facebook
    </Link>
  </div>
</section>


    </>
  );
}
