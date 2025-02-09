import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, DollarSign, Briefcase, History, Target } from 'lucide-react';

interface SponsorForm {
  name: string;
  age: number;
  phone: string;
  email: string;
  interestFields: string[];
  donationAmount: number;
  preferredLocations: string[];
  donationHistory: {
    eventName: string;
    amount: number;
    date: string;
  }[];
}

const initialForm: SponsorForm = {
  name: '',
  age: 0,
  phone: '',
  email: '',
  interestFields: [],
  donationAmount: 0,
  preferredLocations: [],
  donationHistory: []
};

const interestFieldOptions = [
  'Technology',
  'Education',
  'Healthcare',
  'Sports',
  'Arts & Culture',
  'Environment',
  'Social Causes',
  'Business',
  'Science',
  'Entertainment'
];

export function SponsorRegistration() {
  const [form, setForm] = useState<SponsorForm>(initialForm);
  const [newLocation, setNewLocation] = useState('');
  const [newHistoryEntry, setNewHistoryEntry] = useState({
    eventName: '',
    amount: 0,
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase integration
    console.log('Form submitted:', form);
  };

  const addLocation = () => {
    if (newLocation.trim()) {
      setForm({
        ...form,
        preferredLocations: [...form.preferredLocations, newLocation.trim()]
      });
      setNewLocation('');
    }
  };

  const addHistoryEntry = () => {
    if (newHistoryEntry.eventName && newHistoryEntry.amount && newHistoryEntry.date) {
      setForm({
        ...form,
        donationHistory: [...form.donationHistory, { ...newHistoryEntry }]
      });
      setNewHistoryEntry({ eventName: '', amount: 0, date: '' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Become a Sponsor</h1>
        <p className="text-xl text-gray-600">Join our network of impactful sponsors and support amazing events</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Personal Information</h2>
            
            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <User className="h-5 w-5" />
                Full Name
              </span>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <User className="h-5 w-5" />
                Age
              </span>
              <input
                type="number"
                required
                min="18"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={form.age || ''}
                onChange={(e) => setForm({ ...form, age: parseInt(e.target.value) })}
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Phone Number
              </span>
              <input
                type="tel"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email
              </span>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
          </div>

          {/* Sponsorship Preferences */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Sponsorship Preferences</h2>
            
            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <Target className="h-5 w-5" />
                Interest Fields
              </span>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {interestFieldOptions.map((field) => (
                  <label key={field} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      checked={form.interestFields.includes(field)}
                      onChange={(e) => {
                        const updatedFields = e.target.checked
                          ? [...form.interestFields, field]
                          : form.interestFields.filter(f => f !== field);
                        setForm({ ...form, interestFields: updatedFields });
                      }}
                    />
                    <span className="text-sm text-gray-700">{field}</span>
                  </label>
                ))}
              </div>
            </label>

            <label className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Planned Donation Amount (USD)
              </span>
              <input
                type="number"
                required
                min="0"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={form.donationAmount || ''}
                onChange={(e) => setForm({ ...form, donationAmount: parseInt(e.target.value) })}
              />
            </label>

            <div className="block">
              <span className="text-gray-700 font-medium flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Preferred Locations
              </span>
              <div className="mt-1 flex gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="Add a location"
                />
                <button
                  type="button"
                  onClick={addLocation}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Add
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {form.preferredLocations.map((location, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Donation History */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <History className="h-6 w-6" />
            Donation History
          </h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Event Name"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={newHistoryEntry.eventName}
                onChange={(e) => setNewHistoryEntry({ ...newHistoryEntry, eventName: e.target.value })}
              />
              <input
                type="number"
                placeholder="Amount (USD)"
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={newHistoryEntry.amount || ''}
                onChange={(e) => setNewHistoryEntry({ ...newHistoryEntry, amount: parseInt(e.target.value) })}
              />
              <div className="flex gap-2">
                <input
                  type="date"
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={newHistoryEntry.date}
                  onChange={(e) => setNewHistoryEntry({ ...newHistoryEntry, date: e.target.value })}
                />
                <button
                  type="button"
                  onClick={addHistoryEntry}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Add
                </button>
              </div>
            </div>

            {form.donationHistory.length > 0 && (
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {form.donationHistory.map((entry, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {entry.eventName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${entry.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(entry.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register as Sponsor
          </button>
        </div>
      </form>
    </div>
  );
}