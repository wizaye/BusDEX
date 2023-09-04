'use client';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    const signOutResult = await signOut();
    if (signOutResult.error) {
      // router.push('/login'); // Redirect to the login page on successful sign-out
    }else{
      router.push('/login')
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This content is rendered on the server.</p>
      {session ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <p>You are not signed in.</p>
      )}
    </div>
  );
};

export default Home;

