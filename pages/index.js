import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Features";
import Pricing from "../components/Pricing";


export default function Home() {
  return (
    <div className="bg-white dark:bg-black">

      <NextSeo
        title="The Forge"
        description="The Forge - where ideas are built."
        canonical="https://theforge.vercel.app/"
        openGraph={{
          url: "https://theforge.vercel.app/",
          title: "The Forge",
          description: "The Forge - where ideas are built.",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "The Forge",
        }}
        twitter={{
          handle: "@ViswanathKartha",
          site: "https://theforge.vercel.app/",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              where ideas are built
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                THE FORGE
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              THE FORGE is a 168-hour hackathon where you can build anything you
              want. You can build, or fail building yet learn something new.
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="/guidelines"
              >
                <span className="flex justify-center">Guidelines</span>
              </a>
              <br className="sm:hidden" />
              <Link href="404">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">
                    the master smith 🔨 (coming soon)
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-1/2">
            <div className="relative z-10">
              <img
                className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                src="/images/first_poster.jpeg"
                alt="Placeholder Image"
              />
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
              Maybe we&apos;re bringing brightness too?
            </p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        /> */}
      </section>
      <Sponsors />
      {/* <Features /> */}
      <Footer />
    </div>
  );
}
