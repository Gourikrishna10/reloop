import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SponsorSearch } from './components/SponserSearch';
import { SponsorRegistration } from './components/SponserRegistration';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'search' | 'register'>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {currentView === 'home' && (
        <Hero 
          onFindSponsors={() => setCurrentView('search')}
          onBecomeSponsor={() => setCurrentView('register')}
        />
      )}
      {currentView === 'search' && <SponsorSearch />}
      {currentView === 'register' && <SponsorRegistration />}
    </div>
  );
}

export default App