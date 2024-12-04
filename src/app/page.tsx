// src/app/page.tsx
'use client';

import React, { useState } from 'react';

const JonesyWebsite = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-[#1E90FF] text-white relative">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/placeholder.png" alt="Jonesy" className="w-10 h-10 hover:rotate-12 transition-transform" />
            <h3 className="text-xl font-bold">JONESY</h3>
          </div>
          
          {/* Market Stats */}
          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <span className="block text-sm opacity-80">Market Cap</span>
              <span className="font-bold">$990,003</span>
            </li>
            <li>
              <span className="block text-sm opacity-80">24h Volume</span>
              <span className="font-bold">$4,545,945.31</span>
            </li>
            <li>
              <span className="block text-sm opacity-80">Price</span>
              <span className="font-bold">$0.0009909</span>
            </li>
          </ul>

          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-bold transition-colors">
            BUY NOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-8xl font-bold mb-6">$JONESY</h1>
            <p className="text-xl mb-6 font-mono">
              CA: 3uPg7L1n575iWD6kKGGGg7etcGurS9UsR1tcs7b3pump
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com/jonesyctoo" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-[#1786cc] p-3 rounded-full hover:bg-[#1786cc]/80 transition-colors">
                <img src="/twitter.png" alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="https://t.me/jonesyctoo" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="bg-[#1786cc] p-3 rounded-full hover:bg-[#1786cc]/80 transition-colors">
                <img src="/telegram.png" alt="Telegram" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img src="/jonesy.png" alt="Jonesy Character" 
                 className="w-full max-w-[500px] mx-auto" />
          </div>
        </div>
      </div>

      

      {/* About Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* What is Fortnite */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-[1.02] transition-transform">
              <h2 className="text-3xl font-bold mb-4 bg-purple-500 inline-block px-4 py-1 rounded-lg">
                What is Fortnite?
              </h2>
              <p className="text-lg leading-relaxed">
                Fortnite, developed by Epic Games, is a widely popular online 
                multiplayer game with three main modes: Battle Royale, Save the 
                World, and Creative. The Battle Royale mode, launched in September 
                2017, pits 100 players against each other on a shrinking map to be the 
                last one standing. This free-to-play mode quickly gained immense 
                popularity due to its engaging gameplay, building mechanics, and 
                frequent updates.
              </p>
            </div>

            {/* Who is Jonesy */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-[1.02] transition-transform">
              <h2 className="text-3xl font-bold mb-4 bg-yellow-400 inline-block px-4 py-1 rounded-lg">
                Who is Jonesy?
              </h2>
              <p className="text-lg leading-relaxed">
                Jonesy Christ is one of the most important players in Fortnite history. 
                He is the central figure in fortology, came to the island to save players 
                from one another and the storm. Jonesy preached for no builds, Team Rumble 
                and OG Fortnite and was heavily against sweating.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JonesyWebsite;