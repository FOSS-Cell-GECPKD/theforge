import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";


export default function Guidelines() {

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              the Forge
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                guidelines
              </span>
            </h1>
            <div className="mt-20 text-left max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              <h2 className="text-2xl font-semibold mb-4">Important Dates:</h2>
              <ul className="list-disc list-inside mb-6">
                <li><strong>July 7, 2024, 6 pm:</strong> Hackathon begins with the release of the tech stack poster.</li>
                <li><strong>July 11, 2024:</strong> Submission portal opens.</li>
                <li><strong>July 11-14, 2024:</strong> Submission period (teams can submit and edit their submissions, and continue to commit to GitHub).</li>
                <li><strong>July 14, 2024, 6 pm:</strong> Submission deadline (changes after this date and time will not be considered for judging).</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mb-4">Eligibility:</h2>
              <ul className="list-disc list-inside mb-6">
                <li>The hackathon is exclusively for GEC Palakkad students.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Team Formation:</h2>
              <ul className="list-disc list-inside mb-6">
                <li>Students can form teams of 1 to 3 members.</li>
                <li>Team changes are allowed until the submission deadline.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Deliverables:</h2>
              <ul className="list-disc list-inside mb-6">
                <li>A GitHub repository containing the developed product.</li>
                <li>A demo video (optional but recommended).</li>
                <li>Instructions on how to run the project (mandatory).</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Tech Stack Requirement:</h2>
              <ul className="list-disc list-inside mb-6">
                <li>The project must primarily utilize the provided tech stack.</li>
                <li>Teams are free to combine the tech stack with other technologies or topics, but the core feature of the project must showcase the assigned tech stack.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Judging Criteria:</h2>
              <ul className="list-disc list-inside mb-6">
                <li>Project quality and functionality.</li>
                <li>Effective utilization of the assigned tech stack.</li>
                <li>Practicality and use cases.</li>
                <li>Creativity and innovation.</li>
                <li>Effort and progress during the hackathon (regular commits recommended).</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Communication:</h2>
              <ul className="list-disc list-inside mb-6">
                <li>Join the WhatsApp group for updates and support.</li>
                <li>Posters and announcements will be shared through the group.</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Live Sessions:</h2>
              <ul className="list-disc list-inside mb-6">
                <li><strong>July 9, 2024:</strong> Intro session on the tech stack.</li>
                <li><strong>July 11, 2024:</strong> Session on using Git and GitHub.</li>
              </ul>

              <p className="text-md font-light mt-8 text-gray-500 dark:text-gray-400">
                Note: While submissions can be edited and updated until the deadline, any changes made after July 14, 2024, 6 pm will not be considered for judging purposes. However, teams will not be disqualified for making commits after the deadline.
              </p>
            </div>
            <div className="mt-6 text-center md:ml-6">
              {/* Add any additional buttons or links here */}
            </div>
          </div>
        </div>
      </section>
     
      <Footer />
    </div>
  );
}
