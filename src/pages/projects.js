import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import diabetes from "../../public/images/profile/diabetes.png";
import survey from "../../public/images/profile/survey.png";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const projectsData = [
  {
    _id: "3f58e28a-44aa-4a46-bde6-ea8372cb2268",
    user_id: 1,
    name: "Comparative study of Ensemble learning Algorithms on Early Stage Diabetes Risk Prediction",
    image:
      "https://res.cloudinary.com/dashfqimv/image/upload/v1753040061/diabetes_dqebri.png",
    deployed_url: "https://ieeexplore.ieee.org/abstract/document/9456263",
    github_url: "",
    created_at: "2022-10-08T19:47:31.168Z",
    updated_at: "2022-10-15T19:03:40.991Z",
    __v: 0,
  },
  {
    _id: "894e4abd-581a-440c-b2f3-9ed77de563ab",
    user_id: 1,
    name: "A Survey on Visual Question Answering",
    image:
      "https://res.cloudinary.com/dashfqimv/image/upload/v1753040209/survey_rolk6c.png",
    deployed_url: "https://ieeexplore.ieee.org/abstract/document/9587797",
    github_url: "",
    // category: ["javascript", "node", "react", "mongodb"],
    created_at: "2022-10-08T19:43:13.567Z",
    updated_at: "2022-10-15T18:36:19.201Z",
    __v: 0,
  },
  {
    _id: "d966d380-af92-4781-9094-ad80205a0aa4",
    user_id: 1,
    name: "Portfolio Management Application | Spring Boot, Microservices, Docker, Kubernetes",
    image:
      "https://res.cloudinary.com/dashfqimv/image/upload/v1753040372/port_lpgrta.png",
    deployed_url: "https://github.com/MrinalBanchhor/Portfolio",
    github_url: "",
    // category: ["javascript", "react"],
    created_at: "2022-10-08T19:40:22.724Z",
    updated_at: "2022-10-15T18:36:56.579Z",
    __v: 0,
  }
  // {
  //   _id: "7a20bb5b-6342-49bb-b26a-0d3ad0ec2608",
  //   user_id: 1,
  //   name: "Analytical Dashboard",
  //   image:
  //     "http://res.cloudinary.com/dxf99yycj/image/upload/v1682278255/lcrf45ke9eokc88w2loa.jpg",
  //   deployed_url: "https://megawatershedcg.in/dashboard.php",
  //   github_url: "",
  //   category: ["javascript", "php", "wordpress", "mysql"],
  //   created_at: "2022-10-08T19:36:40.028Z",
  //   updated_at: "2022-10-15T18:37:24.464Z",
  //   __v: 0,
  // },
  // {
  //   _id: "17df8109-a808-459b-aaee-3d4887af2a53",
  //   user_id: 1,
  //   name: "News Website",
  //   image:
  //     "http://res.cloudinary.com/dxf99yycj/image/upload/v1665859057/rmm0ljzzsrgpwn3b3tul.png",
  //   deployed_url: "",
  //   github_url: "",
  //   category: ["php", "wordpress", "mysql"],
  //   created_at: "2022-10-08T19:34:59.813Z",
  //   updated_at: "2022-10-15T18:37:38.636Z",
  //   __v: 0,
  // },
  // {
  //   _id: "11636c17-dbb2-4e00-808e-c29decd2e6f3",
  //   user_id: 1,
  //   name: "Chat Application in React and SocketIO",
  //   image:
  //     "http://res.cloudinary.com/dxf99yycj/image/upload/v1665859077/jqsxnrfmqam6qiixekrp.png",
  //   deployed_url: https://mrinalbanchhor.vercel.app/",
  //   github_url: "",
  //   category: ["javascript", "react"],
  //   created_at: "2022-10-08T19:34:03.849Z",
  //   updated_at: "2022-10-15T18:37:59.154Z",
  //   __v: 0,
  // },
  // {
  //   _id: "908256cb-8c14-40a3-9af7-b5750c5795de",
  //   user_id: 1,
  //   name: "Data Management Software",
  //   image:
  //     "http://res.cloudinary.com/dxf99yycj/image/upload/v1665859095/fnrmmrrupyrk5kfwvzhc.png",
  //   deployed_url: "",
  //   github_url: "",
  //   category: ["javascript", "php", "mysql"],
  //   created_at: "2022-10-08T19:32:38.632Z",
  //   updated_at: "2022-10-15T18:38:16.743Z",
  //   __v: 0,
  // },
];

const FramerImage = motion(Image);

const FeaturedProject = ({
  type = [],
  title,
  summary,
  image,
  link,
  github,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark 
    bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl 
      dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          width={1000}
          height={1000}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl capitalize dark:text-primaryDark xs:text-base">
          {type.toString().split(",").join(", ")}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medius text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, image, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark 
    bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.1rem] bg-dark rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          width={1000}
          height={1000}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl capitalize dark:text-primaryDark lg:text-lg md:text-base">
          {type.toString().split(",").join(", ")}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Mrinal Banchhor | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by CodeBucks, a Next.js developer with  expertise in React.js and full-stack development. Browse software engineering articles and tutorials for tips on creating your own portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Research Work & Projects"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={projectsData[0].name}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={projectsData[0].deployed_url}
                github={projectsData[0].github_url}
                type={[projectsData[0].category]}
                image={projectsData[0].image}
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title={projectsData[4].name}
                link={projectsData[4].deployed_url}
                github={projectsData[4].github_url}
                type={[projectsData[4].category]}
                image={projectsData[4].image}
              />
            </div> */}

            {/* <div className="col-span-12">
              <Project
                title={projectsData[2].name}
                link={projectsData[2].deployed_url}
                github={projectsData[2].github_url}
                type={[projectsData[2].category]}
                image={projectsData[2].image}
              />
            </div> */}
            <div className="col-span-12">
              <FeaturedProject
                title={projectsData[1].name}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={projectsData[1].deployed_url}
                github={projectsData[1].github_url}
                type={[projectsData[1].category]}
                image={projectsData[1].image}
              />
            </div>

             <div className="col-span-12">
              <FeaturedProject
                title={projectsData[2].name}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link={projectsData[2].deployed_url}
                github={projectsData[2].github_url}
                type={[projectsData[2].category]}
                image={projectsData[2].image}
              />
            </div>
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title={projectsData[3].name}
                link={projectsData[3].deployed_url}
                github={projectsData[3].github_url}
                type={[projectsData[3].category]}
                image={projectsData[3].image}
              />
            </div> */}

            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title={projectsData[6].name}
                link={projectsData[6].deployed_url}
                github={projectsData[6].github_url}
                type={[projectsData[6].category]}
                image={projectsData[6].image}
              />
            </div> */}

          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
