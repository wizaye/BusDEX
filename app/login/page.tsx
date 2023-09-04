'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Particles from '../../components/BackgroundDots';
const Login = () => {
  const router = useRouter();

  const handleSignIn = async (provider) => {
    const result = await signIn(provider, { callbackUrl: '/home' });
    if (!result?.error) {
      router.push('/home', { scroll: false });
    }
  };

  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-2 mt-2">
      <Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={1000}
			/>
      <h1 className="text-4xl text-white font-bold mb-4">Login Into BusDEX</h1>

      <div className="border border-gray-700 rounded-lg py-10 px-10 text-gray-400 text-lg mt-5 transition duration-300 ease-in-out rounded-md p-8 shadow-md flex flex-col items-center space-y-4">
        <button
          className="bg-white text-stone-600 border border-blue-500 rounded-md py-3 px-5 flex items-center justify-between space-x-2 hover:bg-stone-100 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => handleSignIn('google')}
        >
          <svg 
          aria-hidden="true"
          className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
          xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            
            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>Sign in with Google</span>
        </button>

        <button
          className="bg-white text-stone-600 border border-blue-500 rounded-md py-3 px-5 flex items-center justify-between space-x-2 hover:bg-stone-100 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => handleSignIn('github')}
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
          <span>Sign in with GitHub</span>
        </button>
      </div>
      <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mt-5 transition duration-300 ease-in-out"
        >
          Clone and deploy your own with{" "}
          <span className="text-blue-600">Vercel</span>
        </a>
        <div className="text-gray-500 mt-10">
        Made with ❤️.{" "}
        <br/>
        Powered by{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          Vercel.
        </a>
      </div>
      </main>
    </div>
    
  );
};

export default Login;
