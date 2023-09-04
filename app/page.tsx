import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        {/* <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Clone and deploy your own with{" "}
          <span className="text-blue-600">Vercel</span>
        </a> */}
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Solving Billing issues{" "}
          <span className="relative whitespace-nowrap text-violet-600">
            <SquigglyLines />
            <span className="relative">for free</span>
          </span>{" "}
          of cost.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Just login and fill in your details for the first time and go new digital. 100% free – revamp your business today.
        </h2>
        <div className="container mx-0 justify-center flex">
          <Link
          className="bg-violet-700 rounded-xl text-white hover:text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-violet-500 transition mr-2"
          href="/header"
        >
          Get Started
        </Link>
        <Link
          className="bg-transparent-600  hover:outline-0 rounded-xl text-white   font-medium px-4 py-3 sm:mt-10 mt-7 hover:bg-violet-500 transition"
          href="/login"
        >
          Login
        </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
