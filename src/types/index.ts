export interface Sponsor {
  id: string;
  name: string;
  company: string;
  interestedFields: string[];
  budget: {
    min: number;
    max: number;
  };
  location: string;
  description: string;
}

export interface EventManager {
  id: string;
  name: string;
  organization: string;
  eventType: string;
  requiredBudget: number;
  location: string;
  description: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'sponsor' | 'eventManager';
  profile: Sponsor | EventManager;
}