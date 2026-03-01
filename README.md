# Million Dollar Dashboard

Modern admin dashboard template built with Next.js 15 and shadcn/ui. Clean monochromatic design with multiple authentication layouts.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features

- **Dashboard** - Stats, charts, transactions table, revenue breakdown
- **5 Auth Layouts** - Centered, simple, split gradient, card variants
- **Theme System** - Light/dark mode with customizable color themes
- **12 Font Options** - Plus Jakarta Sans (default), Inter, Geist, and more
- **Command Palette** - Quick navigation with ⌘K
- **Responsive** - Mobile-first design with fixed header and sidebar

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- Recharts
- TanStack Table

## Project Structure

```
src/
├── app/              # Routes and pages
├── components/       # React components
│   ├── dashboard/    # Dashboard-specific components
│   ├── features/     # Feature components
│   ├── layout/       # Header, sidebar
│   ├── profile/      # User profile components
│   └── ui/          # shadcn/ui components
├── lib/             # Utilities and mock data
├── stores/          # Zustand stores
└── types/           # TypeScript types
```

## License

MIT
