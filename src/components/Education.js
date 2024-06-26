import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="education-section" className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="License de Concepteur Développeur d'Applications (CDA)"
            time="2023-aujourd'hui"
            place="EPSI Nantes"
            info="Formation en Alternance pour approfondir mes competences en tant que développeur fullstack"
          />

          <Details
            type="BTS Services informatiques aux organisations (SIO)"
            time="2021-2023"
            place="EPSI Nantes"
            info="Pour approfondir mes compétences et avoir une approche professionnel du monde du travail
                        dans le numérique j'ai choisie EPSI chez qui je suis un parcours BTS SIO"
          />

          <Details
            type="Baccalauréat STI2D option sin"
            time="2019-2021"
            place="Lycée Livet Nantes"
            info="Apres une découverte de l'informatique j'ai décidé de m'orienter vers la filaire STI2D pour acquérir des compétences grâce à la pratique."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
