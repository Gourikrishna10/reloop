# SPONSER_SPACE 🎯


## Basic Details
### Team Name: RELOOP


### Team Members
- Member 1: GOURIKRISHNA - BASELIOS  MATHEWS II COLLEGE OF ENGINEERING
- Member 2: NANDANA L - BASELIOS  MATHEWS II COLLEGE OF ENGINEERING
- Member 3: JENI B VARGHESE - BASELIOS  MATHEWS II COLLEGE OF ENGINEERING

### Hosted Project Link
https://reloop-ashy.vercel.app/

### Project Description
We help eventorganizers to find their sponsers. 

### The Problem statement
It helps sponsers to find out their best event to contribute.Also eventorganizers to find out the sponserss
### The Solution
We provide a platform for both eventorganizers and sponsers to communicate with each other.
## Technical Details


### Technologies/Components Used
For Software:
- react,javasript,html,talewind.css
- react,react-router-dom
- vite.js,git,vscode

### Implementation
For Software:
# Installation
npm install

# Run
npm start
npm run dev

### Project Documentation
For Software:```markdown
# SponsorSpace Project Documentation

## Overview

SponsorSpace is a platform designed to connect event managers with potential sponsors, streamlining the event sponsorship process.  This documentation covers the project's frontend implementation using React and Tailwind CSS.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx         # Hero section of the landing page
│   ├── Navbar.tsx       # Navigation bar
│   ├── AuthModal.tsx    # Authentication modal (login/signup)
│   ├── SponsorRegistration.tsx # Sponsor registration form
│   └── SponsorSearch.tsx    # Sponsor search form
├── App.tsx             # Main application component
├── index.tsx           # Entry point of the application
├── ... other files
```

## Components

### 1. Hero.tsx

*   **Purpose:**  Displays the main call to action and introductory information for the landing page.
*   **Props:**
    *   `onFindSponsors`: Function to handle "Find Sponsors" button click.
    *   `onBecomeSponsor`: Function to handle "Become a Sponsor" button click.
*   **Functionality:**
    *   Presents a compelling headline, description, and buttons for finding sponsors or becoming a sponsor.
    *   Includes informational sections with icons (Handshake, Calendar, Users) highlighting key platform features.
*   **Technology:** React, Tailwind CSS, lucide-react (icons)

### 2. Navbar.tsx

*   **Purpose:**  Provides site navigation and authentication options.
*   **Functionality:**
    *   Displays the platform logo and a menu icon.
    *   Includes "Login" and "Sign Up" buttons that trigger the `AuthModal`.
*   **Technology:** React, Tailwind CSS, lucide-react (icons)
*   **State:**
    *   `authModal`: Stores the type of auth modal to open ('login', 'signup', or null).

### 3. AuthModal.tsx

*   **Purpose:**  Handles user authentication (login and signup).
*   **Props:**
    *   `isOpen`: Boolean to control modal visibility.
    *   `onClose`: Function to close the modal.
    *   `type`: String ('login' or 'signup') to determine form type.
    *   `onSwitchType`: Function to toggle between login and signup forms.
*   **Functionality:**
    *   Displays a modal with either a login or signup form based on the `type` prop.
    *   Handles form submission (currently logs form data to the console – Supabase integration is TODO).
    *   Provides a "Don't have an account?" or "Already have an account?" link to switch between forms.
*   **Technology:** React, Tailwind CSS, lucide-react (icons)
*   **State:**
    *   `email`: Stores the email input value.
    *   `password`: Stores the password input value.
    *   `name`: Stores the full name input value (signup only).
    *   `role`: Stores the user role ('sponsor' or 'event_manager') (signup only).

### 4. SponsorRegistration.tsx

*   **Purpose:**  Allows sponsors to register on the platform.
*   **Functionality:**
    *   Provides a form for sponsors to enter their personal information, sponsorship preferences, and donation history.
    *   Handles form submission (currently logs form data to the console – Supabase integration is TODO).
    *   Allows adding preferred locations and donation history entries dynamically.
*   **Technology:** React, Tailwind CSS, lucide-react (icons)
*   **State:**
    *   `form`: Stores the complete sponsor form data.
    *   `newLocation`: Stores the input value for adding a new preferred location.
    *   `newHistoryEntry`: Stores the input values for adding a new donation history entry.

### 5. SponsorSearch.tsx

*   **Purpose:**  Allows event managers to search for potential sponsors.
*   **Functionality:**
    *   Provides a form with filters for event type, budget, target audience, location, and description.
    *   Handles search submission (currently logs filter data to the console – Supabase integration is TODO).
    *   Displays search results (currently placeholder content).
*   **Technology:** React, Tailwind CSS, lucide-react (icons)
*   **State:**
    *   `filters`: Stores the search filter criteria.
    *   `isSearching`: Boolean to track whether a search is in progress.

## Technologies Used

*   **React:** JavaScript library for building user interfaces.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
*   **lucide-react:** Icon library.
*   **TypeScript:** (Implied) Used for type safety and improved code maintainability.

## Installation

1.  Clone the repository: `git clone <repository_url>`
2.  Navigate to the project directory: `cd <project_directory>`
3.  Install dependencies: `npm install` or `yarn install`

## Running the Application

1.  Start the development server: `npm start` or `yarn start`
2.  Open your browser to `http://localhost:3000` (or the appropriate port).

## Future Development (TODOs)

*   **Supabase Integration:** Implement Supabase authentication and database integration for user management, sponsor registration, and sponsor search functionality.
*   **Backend Development:** Develop the backend API endpoints to handle data processing and communication with Supabase.
*   **Search Functionality:** Implement the actual search logic based on the selected filters.
*   **Result Display:** Create a component to display the search results in a user-friendly format.
*   **Filtering and Sorting:** Add filtering and sorting options to the search results.
*   **Testing:** Write unit and integration tests to ensure code quality and prevent regressions.
*   **Deployment:** Deploy the application to a hosting platform.

## Contact

reloop
gourirkish2004@gmail.com
```

This documentation provides a good overview of your project.  Remember to keep it updated as your project evolves!  Adding diagrams (component hierarchy, data flow) can also be very helpful, especially as the project grows in complexity.


# Screenshots (Add at least 3)
![image](https://github.com/user-attachments/assets/a11cf839-02aa-433f-b7ac-335943dbaff5)
this is our home page

![Screenshot2](Add screenshot 2 here with proper name)
![image](https://github.com/user-attachments/assets/109da2dc-d4f5-40d8-84b4-6413cbd57a9f)
this is our page helps to become a sponser

![Screenshot3](Add screenshot 3 here with proper name)
![image](https://github.com/user-attachments/assets/5d9ce616-2b3b-4e1b-bbac-9a015cd7d296)
this is our page for event organizers to find sponsers


For Hardware:

# Schematic & Circuit
![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

# Build Photos
![Team](Add photo of your team here)


![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

### Project Demo
# Video

*Explain what the video demonstrates*

# Additional Demos
[Add any extra demo materials/links]

## Team Contributions
- GOURIKRISHNA:33%
- NANDANA L: 34%
- JENI B VARGHESE:33%

---
Made with ❤️ at TinkerHub
