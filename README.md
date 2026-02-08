# Tahwul - Audit Dashboard

Digital Transformation & Compliance Tracking Platform

## Live Demo

- **Dashboard:** https://tahwul-audit-dashboard.vercel.app/
- **Digital Transformation:** https://tahwul-audit-dashboard.vercel.app/digital-transformation

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## How I Built This

### Tech Stack
- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Charts:** Recharts
- **Icons:** Lucide React

### Architecture Approach
- **Server Components First:** Used React Server Components by default, only adding `'use client'` for interactive elements (charts, dropdowns, navigation state)
- **Component Structure:** Organized components by feature (`dashboard/`, `details/`, `layout/`, `ui/`)
- **Data Layer:** Centralized mock data in `data/` folder with TypeScript types in `types/`
- **Reusable UI:** Built atomic components (`Card`, `Avatar`, `Badge`, `Tabs`, `Button`) for consistency

### Folder Structure
```
├── app/                    # Pages (App Router)
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── layout/             # Sidebar, Header
│   ├── dashboard/          # Dashboard widgets
│   └── details/            # Details page components
├── data/                   # Mock data (TypeScript)
├── types/                  # TypeScript interfaces
└── lib/                    # Utilities
```

## Assumptions Made

1. **Mock Data:** Used static TypeScript data instead of JSON files for better type safety and IDE support
2. **Desktop-First:** Implemented responsive design with desktop-first approach as specified
3. **Chart Library:** Chose Recharts for data visualization due to its React-friendly API and customization options
4. **Font:** Used Cairo font to match the Arabic-friendly design aesthetic
5. **Color Palette:** Extracted primary colors from the Figma design (`#1d3557` for dark blue, standard Tailwind colors for status indicators)
6. **Navigation:** Implemented collapsible sidebar with compress/expand functionality for better UX

## What I Would Improve With More Time

1. **Testing:** Add unit tests with Jest and React Testing Library for components
2. **Accessibility:** Implement full ARIA labels, keyboard navigation, and screen reader support
3. **Animations:** Add subtle transitions and micro-interactions using Framer Motion
4. **Dark Mode:** Implement theme switching with CSS variables
5. **Loading States:** Add skeleton loaders and suspense boundaries
6. **Error Handling:** Implement error boundaries and fallback UI
7. **Performance:** Add image optimization, lazy loading, and bundle analysis
8. **Documentation:** Add Storybook for component documentation
9. **Internationalization:** Add RTL support and Arabic translations
10. **API Integration:** Replace mock data with actual API calls using React Query or SWR
