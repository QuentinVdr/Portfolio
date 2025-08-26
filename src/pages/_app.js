import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <script defer src="https://umami.quentin-verdier.com/script.js" data-website-id="86971985-a6ee-47dc-8a73-60b74e806fd1"></script>
        </Head>
        <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
            <NavBar />
            <AnimatePresence initial={false} mode="wait">
                <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            <Footer />
        </main>
    </>
    );
}
