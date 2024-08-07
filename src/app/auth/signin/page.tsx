"use strict"
import Signin from "@/components/Common/Auth/Signin";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sign in Page - FTANAILS",
  description: "This is Login page for Startup Pro",
  // other metadata
};


export default function SigninPage () {

  return (
    <>
      <Signin />
    </>
  );
};

