"use client";
import { SessionProvider } from "next-auth/react";

export default function PostLayout({
  children, // will be a page or nested layout
}) {
  return <SessionProvider>{children}</SessionProvider>;
}