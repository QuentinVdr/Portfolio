import { LinkArrow } from "@/components/Icons";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  report,
}) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
        {report && (
          <div className="flex items-center self-start lg:self-center mt-3">
            <Link
              href={report}
              target={"_blank"}
              className="flex items-center bg-dark text-light p-2 px-4
                                          rounded-lg text-base font-semibold hover:bg-light hover:text-dark
                                          border-2 border-solid border-transparent hover:border-dark
                                          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                                          hover:dark:border-light md:p-1.5 md:px-3"
              download={true}
            >
              Rapport
              <LinkArrow className={"w-6 ml-1"} />
            </Link>
          </div>
        )}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="experience-section" className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
              md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Alternant, Développeur FullStack"
            company="Infotel"
            companyLink="https://infotel.com/"
            time="Juillet 2023 - Septembre 2024"
            address="44800 Saint-Herblain"
            work="J'ai pu contribué à la création d'un outil de suivi des candidatures pour les charges de recrutements
            d'Infotel. Ce qui m'a permit de développer mon esprit de travail d'équipe et ma communication suite aux
            échangés avec les charges de recrutements, pour adapté notre applications au besoin des utilisateurs."
          />

          <Details
            position="Stagiaire, Développeur FullStack"
            company="Infotel"
            companyLink="https://infotel.com/"
            time="janvier 2023"
            address="44800 Saint-Herblain"
            work="J'ai travailler en autonomie sur une application WEB permettant de facilité le
                      référencement des clients et des confrere de infotel. J'ai travailler sur l'ajouter d'une carte
                      interactive qui permet de visualiser les clients de manière géographique. J'ai aussi mis à
                      jours les formulaire d'ajout de client pour rendre la saisie de la position facile et j'ai
                      adapter la base de donnée et l'API assurer le fonctionnement de cet ajout."
            report="/RapportStageVerdierQuentinINFOTEL2023.pdf"
          />

          <Details
            position="Stagiaire, Développeur Back-End"
            company="MyMoneyBank"
            companyLink="https://www.mymoneybank.fr/"
            time="été 2022"
            address="44300 Nantes"
            work="Durant cette suite de stage pendant l'été j'ai intégrer la mis a jours de la librairies
                        d'API sur les api destiné à l'utiliser jusqu'à la mise en productions les APIs modifier. Ensuite
                        j'ai fait beaucoup de Maintenance sur les APIs du service. J'ai créer de la documentations pour
                        les APIs pour facilités la suite de la maintenance, mis a jour les librairies utiliser et
                        refait des tests unitaires ou d'intégrations."
          />

          <Details
            position="Stagiaire, Développeur Back-End"
            company="MyMoneyBank"
            companyLink="https://www.mymoneybank.fr/"
            time="mai 2022"
            address="44300 Nantes"
            work="Durant ce stage j'ai découvre la vie d'entreprise et les API en language JAVA. J'ai
                        travailler en autonomie avec l'aide de mon tuteur de stage pour la découverte. J'ai travailler
                        sur une librairies internes d'API pour la gestion des flux des prospects ou j'ai ajouter une
                        fonctionnalité d'alerte dans teams en cas de prospect avec une erreurs de saisie dans un champs
                        qui empêche l'insertion en base de données."
            report="/RapportStageVerdierQuentinMMB2022.pdf"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
