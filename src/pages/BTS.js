import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, {useState} from "react";
import TransitionEffect from "@/components/TransitionEffect";

const BTS = () => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (<>
        <Head>
            <title>Quentin VERDIER | BTS SIO</title>
            <meta
                name="description"
                content="BTS SIO de quentin verdier. Qu'est ce que le BTS SIO ? Veille numérique de quentin verdier"
            />
        </Head>
        <TransitionEffect/>
        <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText
                    text="le BTS SIO"
                    className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                />
                <p className="font-medium mb-32 mx-16 md:mx-0">
                    Le <span className="font-extrabold">Brevet de Technicien Supérieur Services informatiques aux
                    Organisations (BTS SIO)</span> s’adresse à ceux qui souhaitent se former en deux ans aux métiers
                    d’administrateur réseau ou de développeur pour intégrer directement le marché du travail ou
                    continuer des études dans le domaine de l’informatique.
                </p>

                <h2 className="font-bold text-6xl mb-16 w-full text-center md:text-4xl xs:text-3xl sm:mb-8">
                    Qu&apos;est ce que c&apos;est ?
                </h2>
                <p className="font-medium mb-32 mx-16 md:mx-0">
                    Le <span className="font-extrabold">BTS SIO (Service Informatique aux Organisations)</span> est un
                    programme de niveau Bac+2, qui forme des informaticiens aussi bien doués pour le développement que
                    pour l’administration et la maintenance d’un réseau informatique.elle s’est déclinée en deux
                    spécialités distinctes : BTS SIO SISR et BTS SIO SLAM. Celles-ci, comportent des modules techniques
                    en liaison avec l’informatique, et d’autres de culture générale et de management. Elles proposent
                    également des périodes de stages en entreprise d’une durée de 10 semaines, afin d’initier les
                    étudiants aux réalités du domaine professionnel et de faire progresser leur employabilité.
                </p>

                <h2 className="font-bold text-6xl mb-16 w-full text-center md:text-4xl xs:text-3xl sm:mb-8">
                    Ma Veille Numérique
                </h2>
                <iframe src={`PDF/veille_numerique.pdf#view=fitH`} title="Ma veille numérique" height="100%" width="100%"
                        className="w-full h-[80vh]"/>
            </Layout>
        </main>
    </>);
};

export default BTS;