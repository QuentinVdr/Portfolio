import AnimatedText from "@/components/AnimatedText";
import {GithubIcon} from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimeSearch from "public/images/projects/AnimeSearch.png";
import ZooSymfony from "public/images/projects/ZooSymfony.png";
import ChatonDBSymfony from "public/images/projects/ChatonDBSymfony.png";
import ProjectBICE from "public/images/projects/ProjectBICE.png";
import {motion} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const DeployedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article
            className="w-full flex items-center justify-between relative  rounded-br-2xl
                        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
                        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
            />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <div className="w-full h-auto">
                    <FramerImage
                        src={img}
                        alt={title}
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.2}}
                        priority
                        sizes="(max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              50vw"
                    />
                </div>
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                  {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <motion.a
                        href={github}
                        target={"_blank"}
                        className="w-10"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Lien vers le repository github du projet"
                    >
                        {" "}
                        <GithubIcon />
                    </motion.a>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                                    dark:bg-light dark:text-dark sm:px-4 sm:text-base"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const NoDeployedProject = ({type, title, summary, img, github}) => {
    return (
        <article
            className="w-full flex items-center justify-between relative  rounded-br-2xl
                        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
                        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
            />
            <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage
                    src={img}
                    alt={title}
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          50vw"
                    className="w-full h-auto"
                />
            </div>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                  {type}
                </span>
                <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
                    {title}
                </h2>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <motion.a
                        href={github}
                        target={"_blank"}
                        className="w-10"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Lien vers le repository github du projet"
                    >
                        {" "}
                        <GithubIcon />
                    </motion.a>
                </div>
            </div>
        </article>
    );
};

const Project = ({type, title, summary, img, github}) => {
    return (
        <article
            className="w-full flex flex-col items-center justify-center rounded-2xl
                        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
                            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
            />
            <Link
                href={github}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.2}}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                  {type}
                </span>
                <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
                    {title}
                </h2>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="w-full flex items-center">
                    <motion.a
                        href={github}
                        target={"_blank"}
                        className="w-8 md:w-6"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Lien vers le repository github du projet"
                    >
                        {" "}
                        <GithubIcon />
                    </motion.a>
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (<>
            <Head>
                <title>Quentin VERDIER | Projets</title>
                <meta
                    name="description"
                    content="Les projets reacliser par un jeune developper fullstack"
                />
            </Head>
            <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Mes réalisations"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <DeployedProject
                                type="Project decouverte"
                                title="Anime Search"
                                summary="Projet decouverte de React avec utilisation d'une API permetant de récuperer
                                des informations sur un animé appartir de son nom"
                                img={AnimeSearch}
                                link="https://searchanimereact.netlify.app/"
                                github="https://github.com/QuentinVdr/animesearchapi"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project fin de module"
                                title="Zoo Symfony"
                                summary="Projet local Symfony en binome en relation avec un base de donnée pour gérer un zoo"
                                img={ZooSymfony}
                                github="https://github.com/QuentinVdr/ZooSymfony"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type="Project fin de module"
                                title="Chaton Database Symfony"
                                summary="Projet solo local Symfony en utilisant un base de donnée destiné a gerer et répertorié des chatons et des proprietaires"
                                img={ChatonDBSymfony}
                                github="https://github.com/QuentinVdr/SymfonyChatonDB"
                            />
                        </div>
                        <div className="col-span-12">
                            <NoDeployedProject
                                type="Projet BTS"
                                title="Application BICE"
                                summary="Une application pour facilité la gestion des interventions et des stocks d'une
                            brigade de pompier nommé BICE"
                                img={ProjectBICE}
                                github="https://dev.azure.com/quentinverdier/RescueInventory/_git/RescueInventoryAPI"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>);
};

export default projects;
