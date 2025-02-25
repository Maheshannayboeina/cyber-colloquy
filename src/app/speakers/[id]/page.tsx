// src/app/speakers/[id]/page.tsx
import React from 'react';
import Image from 'next/image';
import { speakerData } from '@/components/speakers-data';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon

interface Params {
  id: string;
}

// Correct PageProps definition
interface PageProps {
  params: Params;
}


export default function SpeakerPage({ params }: PageProps) {
  const { id } = params;
  const speaker = speakerData.find((speaker) => speaker.id === id);

  if (!speaker) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Speaker Not Found</h1>
          <p className="text-gray-400">Sorry, the speaker you are looking for could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto py-16">
        <div className="bg-gray-800 bg-opacity-70 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-8">
              <div className="relative h-96"> {/* Fixed height for image */}
                <Image
                  src={speaker.imageUrl}
                  alt={speaker.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-semibold text-gray-100 mb-4">{speaker.name}</h1>
              <h2 className="text-xl text-gray-300 mb-4">{speaker.title}</h2>
              <p className="text-gray-200 leading-relaxed mb-6">{speaker.description}</p>
              {speaker.linkedinUrl && (
                <a
                  href={speaker.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-5 rounded-xl transition duration-300"
                >
                  <FaLinkedin className="mr-2" /> {/* LinkedIn Icon */}
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}