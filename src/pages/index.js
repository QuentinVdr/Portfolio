import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import {motion, useInView, useMotionValue, useSpring} from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/photo.png";
import Link from "next/link";
import {GithubIcon, LinkArrow, LinkedInIcon, MailIcon} from "@/components/Icons";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 1000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

export default function Home() {
    return (
        <>
            <Head>
                <title>Quentin VERDIER | Portfolio</title>
                <meta name="description" content="Portfolio de Quentin VERDIER Développeur junior back-end et full-stack" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Jeune developpeur passionné!"
                        className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 col-start-2 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biographie
                            </h2>
                            <p className="font-medium">
                                Hey, Je suis Quentin VERDIER, un développeur junior en Back-end et Fullstack.
                                Je suis passionner par la création d&apos;application fonctionnelle et
                                facile a utiliser. J&apos;ai pour l&apos;instant quelque mois d&apos;experience
                                dans le monde professionnel. Mais j&apos;ai sur faire preuves a de multiple reprise
                                de critique et force de proposition.
                            </p>

                            <p className="my-4 font-medium">
                                Pour moi un développeur doit créer des outils ou application pour facilité la vie des
                                utilisateurs. Que se soit sur l&apos;aspect du design de l&apos;application ou pour les
                                performance.
                            </p>

                            <p className="font-medium">
                                Je travail principalement sur des application en back-end tel que des APIs.
                                Mais aussi sur des applications web ou des applications mobile. Pour découvrir de
                                nouvelle compétences ou approfondir mes connaissance sur des languages ou meme
                                mes competence en UX et UI design pour simplifier l&apos;utilisation de mes
                                applications.
                            </p>

                            <div className='flex flex-none items-center self-start lg:self-center mt-6 gap-5'>
                                <Link href="/PDF/CV_QuentinVERDIER.pdf" target={"_blank"}
                                      className="flex items-center bg-dark text-light p-2.5 px-6
                                      rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                                      border-2 border-solid border-transparent hover:border-dark
                                      dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                                      hover:dark:border-light md:p-2 md:px-4 md:text-base"
                                      download={true}>
                                    <p className="flex-none">
                                        Mon CV
                                    </p>
                                    <LinkArrow className={"w-6 ml-1"}/>
                                </Link>
                                <div className='flex gap-4'>
                                    <motion.a
                                        href="mailto:quent1.verdier@gmail.com"
                                        target={"_blank"}
                                        className="w-6"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Bouton pour m'envoyé un mail"
                                    >
                                        <MailIcon />
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/QuentinVdr"
                                        target={"_blank"}
                                        className="w-6"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Bouton pour voir mon profile github"
                                    >
                                        <GithubIcon />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/verdier-quentin/"
                                        target={"_blank"}
                                        className="w-6"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label="Bouton pour voir mon profile linkedin"
                                    >
                                        <LinkedInIcon />
                                    </motion.a>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="Quentin VERDIER"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};