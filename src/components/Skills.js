import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
              py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
              lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
              xs:text-dark xs:dark:text-light xs:font-bold
              "
            whileHover={{ scale:1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div id="skills-section" className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Compétence</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            ">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                    p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{ scale: 1.05 }}
                >
                    FullStack
                </motion.div>

                <Skill name="Java" x="-11vw" y="-7vw" />
                <Skill name="Python" x="-21vw" y="-19vw" />
                <Skill name="C#" x="12vw" y="-8vw" />
                <Skill name="C++" x="2vw" y="-18vw" />
                <Skill name="PostMan" x="22vw" y="-17vw" />

                <Skill name="Base de donnée" x="25vw" y="2vw" />
                <Skill name="Git" x="12vw" y="10vw" />
                <Skill name="Docker" x="27vw" y="12vw" />
                <Skill name="Marketing" x="21vw" y="19vw" />

                <Skill name="HTML" x="-11vw" y="9vw" />
                <Skill name="CSS" x="-21vw" y="16vw" />
                <Skill name="Javascript" x="-4vw" y="19vw" />
                <Skill name="PHP" x="-26vw" y="5vw" />


            </div>
        </div>
    );
};

export default Skills;
