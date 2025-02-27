# Pokemon Explorer

A responsive web application built with Next.js and Chakra UI to explore Pokemon data fetched from the PokeAPI.

## Prerequisites
- **Node.js**: Version 18.18.0 or later (recommended). Download from [nodejs.org](https://nodejs.org/).
- **npm**: Comes with Node.js (version 9.x or later recommended). Verify with `npm -v`.
- **Git** (optional): For cloning the repository. Download from [git-scm.com](https://git-scm.com/).
- **Code Editor**: Recommended: Visual Studio Code.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mahesh2653/pokemon-explorer.git
   cd pokemon-explorer

2. **Install dependencies with** :
   ```bash
   npm install    


## Running the Project

1. **Start the Development Server:**
   ```bash
   npm run dev

2. **Open in Browser:**
   Navigate to http://localhost:3000 to view the Pokemon Explorer homepage.

3. **Test Functionality:**
   Search for Pokemon using the search bar.
   Click on a Pokemon to view details (e.g., http://localhost:3000/pokemon/1).


## Building for Production

1. **Build the Project:**
   ```bash
   npm run build

2. **Start the Production Server:**
   ```bash
   npm run start

3. **View in Browser:**
   Navigate to http://localhost:3000 to test the production build.


## Features

- Server-Side Rendered (SSR) homepage with a list of Pokemon.
- Search functionality to filter Pokemon by name.
- Detailed page for each Pokemon with images, types, abilities, stats, and moves.
- Responsive design using Chakra UI.

## Technologies Used

- **Next.js** : Framework for server-side rendering and routing.
- **React** : JavaScript library for building user interfaces.
- **Chakra UI** : Component library for styling and layout.
- **Axios** : HTTP client for fetching data from PokeAPI.
- **TypeScript** : Typed JavaScript for better code reliability.
- **PokeAPI** : API providing Pokemon data.