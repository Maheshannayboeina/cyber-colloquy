import React from "react";
import { Container } from "@/components/Container";
import Link from "next/link";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
          Explore the World of Cyber Events.
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Discover a wide range of cyber security events, from workshops to conferences and competitions.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/events"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5"
          >
            Get Started!
          </Link>
        </div>
      </div>
    </Container>
  );
};
