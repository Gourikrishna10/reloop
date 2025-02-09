import React from 'react';
import { Handshake, Calendar, Users } from 'lucide-react';

interface HeroProps {
  onFindSponsors: () => void;
  onBecomeSponsor: () => void;
}

export function Hero({ onFindSponsors, onBecomeSponsor }: HeroProps) {
  const handleFindSponsors = (e: React.MouseEvent) => {
    e.preventDefault();
    onFindSponsors();
  };

  const handleBecomeSponsor = (e: React.MouseEvent) => {
    e.preventDefault();
    onBecomeSponsor();
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Connect Events with Perfect Sponsors
          </h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto">
            SponsorSpace brings event managers and sponsors together, making event sponsorship simple, efficient, and effective.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <button 
              onClick={handleFindSponsors}
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-indigo-600 hover:bg-gray-100"
            >
              Find Sponsors
            </button>
            <button 
              onClick={handleBecomeSponsor}
              className="rounded-md bg-indigo-500 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-400"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="flex justify-center">
              <Handshake className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Perfect Matches</h3>
            <p className="mt-2">Find sponsors that align with your event's vision and goals</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Calendar className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Streamlined Process</h3>
            <p className="mt-2">Quick and easy sponsorship management process</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <Users className="h-12 w-12" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Growing Network</h3>
            <p className="mt-2">Connect with a vast network of sponsors and event managers</p>
          </div>
        </div>
      </div>
    </div>
  );
}