# ReactMeals

A React + Vite food-ordering web app. Browse a list of available meals and add items to a shopping cart for checkout.

## Tech Stack

- **React 18** — UI library
- **Vite 4** — build tool and dev server
- **ESLint** — linting
- **gh-pages** — deployment to GitHub Pages
- A **backend** directory for the app's server-side/data layer

## Project Structure

```
reactmeals/
├── .github/workflows/   # CI/CD configuration
├── backend/             # Backend service / data source
├── public/images/       # Static image assets
├── src/                 # React application source
├── index.html           # App entry HTML
├── vite.config.js        # Vite configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/HaidraSuleiman/reactmeals.git
cd reactmeals
npm install
```

### Running Locally

```bash
npm run dev
```

This starts the Vite dev server. Open the printed local URL in your browser.

> If the `backend` directory requires its own dependencies or environment variables to serve meal data, follow the setup instructions inside `backend/` before starting the frontend.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the codebase |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Deployment

This project is set up to deploy to GitHub Pages via the `gh-pages` package:

```bash
npm run deploy
```

## License

No license specified yet. Add a `LICENSE` file to clarify usage rights for this repository.
