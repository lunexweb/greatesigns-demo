# GREAT SIGNS Website

A professional signage company website built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Professional signage services showcase
- Company information and team details
- Contact information and location details
- Clean, accessible navigation

## Technologies Used

- **Vite** - Fast build tool and development server
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd great-signs-red-white-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── Navigation.tsx   # Main navigation component
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   └── NotFound.tsx    # 404 page
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## Customization

The website is designed for GREAT SIGNS, a professional signage company based in Durban, South Africa. To customize for your business:

1. Update company information in the page components
2. Replace images in the `src/assets/` directory
3. Modify colors and styling in `src/index.css`
4. Update contact information and location details

## Deployment

The project can be deployed to any static hosting service such as:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project with `npm run build` and deploy the `dist` folder.