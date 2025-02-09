import React, { useState } from 'react';
import { Menu, LogIn, UserPlus, X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
  onSwitchType: (type: 'login' | 'signup') => void;
}

function AuthModal({ isOpen, onClose, type, onSwitchType }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'sponsor' | 'event_manager'>('sponsor');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement Supabase authentication
      console.log('Form submitted:', { email, password, name, role });
      // Clear form after successful submission
      setEmail('');
      setPassword('');
      setName('');
      onClose();
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleSwitchType = (e: React.MouseEvent, newType: 'login' | 'signup') => {
    e.preventDefault();
    onClose();
    setTimeout(() => onSwitchType(newType), 100);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {type === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {type === 'signup' && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                    I am a
                  </label>
                  <select
                    id="role"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={role}
                    onChange={(e) => setRole(e.target.value as 'sponsor' | 'event_manager')}
                  >
                    <option value="sponsor">Sponsor</option>
                    <option value="event_manager">Event Manager</option>
                  </select>
                </div>
              </>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                minLength={6}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {type === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          {type === 'login' ? (
            <p className="mt-4 text-sm text-gray-600 text-center">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={(e) => handleSwitchType(e, 'signup')}
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="mt-4 text-sm text-gray-600 text-center">
              Already have an account?{' '}
              <button
                type="button"
                onClick={(e) => handleSwitchType(e, 'login')}
                className="text-indigo-600 hover:text-indigo-500"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [authModal, setAuthModal] = useState<'login' | 'signup' | null>(null);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-indigo-600">SponsorSpace</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="button"
                onClick={() => setAuthModal('login')}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </button>
              <button
                type="button"
                onClick={() => setAuthModal('signup')}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={authModal !== null}
        onClose={() => setAuthModal(null)}
        type={authModal || 'login'}
        onSwitchType={setAuthModal}
      />
    </>
  );
}