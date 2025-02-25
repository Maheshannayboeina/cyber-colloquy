import React from 'react';
import Image from 'next/image';
import { speakerData } from '@/components/speakers-data';
import { FaLinkedin } from 'react-icons/fa';
import { Container } from '@/components/Container';

interface PageProps {
  params: Promise<{ id: string }>; // Make params a Promise
}

// Async function that awaits params
export default async function SpeakerPage({ params }: PageProps) {
  const { id } = await params; // Await params before destructuring
  const speaker = speakerData.find((speaker) => speaker.id === id);

  if (!speaker) {
    return (
      <Container className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Speaker Not Found</h1>
          <p className="text-gray-400">Sorry, the speaker you are looking for could not be found.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 p-6 sm:p-8">
            <div className="relative aspect-w-1 aspect-h-1 md:aspect-auto md:h-96">
              <Image
                src={speaker.imageUrl}
                alt={speaker.name}
                fill // Use "fill" instead of legacy "layout"
                className="rounded-2xl object-cover" // Use object-cover with Tailwind for object fitting
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3 p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-3 sm:mb-4">{speaker.name}</h1>
            <h2 className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">{speaker.title}</h2>
            <p className="text-gray-200 leading-relaxed mb-5 sm:mb-6">{speaker.description}</p>
            {speaker.linkedinUrl && (
              <a
                href={speaker.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2.5 px-4 sm:py-3 sm:px-5 rounded-xl transition duration-300"
              >
                <FaLinkedin className="mr-2" />
                Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
