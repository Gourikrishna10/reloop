import React, { useState } from 'react';
import { Search, Filter, DollarSign, Users, Target, FileText } from 'lucide-react';

interface SearchFilters {
  eventType: string;
  budget: number;
  targetAudience: string;
  location: string;
  description: string;
}

const initialFilters: SearchFilters = {
  eventType: '',
  budget: 0,
  targetAudience: '',
  location: '',
  description: ''
};

const eventTypes = [
  'Technology Conference',
  'Music Festival',
  'Sports Event',
  'Charity Fundraiser',
  'Educational Workshop',
  'Cultural Exhibition',
  'Business Summit',
  'Food Festival',
  'Art Exhibition',
  'Environmental Initiative'
];

export function SponsorSearch() {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // TODO: Implement actual search functionality with Supabase
    console.log('Searching with filters:', filters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Sponsor</h1>
        <p className="text-xl text-gray-600">Tell us about your event and we'll match you with the right sponsors</p>
      </div>

      <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Event Type
              </span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={filters.eventType}
                onChange={(e) => setFilters({ ...filters, eventType: e.target.value })}
              >
                <option value="">Select Event Type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Required Budget
              </span>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter amount in USD"
                value={filters.budget}
                onChange={(e) => setFilters({ ...filters, budget: Number(e.target.value) })}
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <Target className="h-5 w-5" />
                Target Audience
              </span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="e.g., Tech Professionals, Students, etc."
                value={filters.targetAudience}
                onChange={(e) => setFilters({ ...filters, targetAudience: e.target.value })}
              />
            </label>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <Users className="h-5 w-5" />
                Event Location
              </span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="City, Country"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Event Description
              </span>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows={4}
                placeholder="Describe your event, its purpose, and what makes it unique..."
                value={filters.description}
                onChange={(e) => setFilters({ ...filters, description: e.target.value })}
              />
            </label>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Search className="h-5 w-5 mr-2" />
            Find Sponsors
          </button>
        </div>
      </form>

      {isSearching && (
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Matching Sponsors</h2>
            <button className="flex items-center text-gray-600 hover:text-indigo-600">
              <Filter className="h-5 w-5 mr-2" />
              Filter Results
            </button>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
            <p>Searching for matching sponsors...</p>
          </div>
        </div>
      )}
    </div>
  );
}