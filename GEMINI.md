# GEMINI.md - DGS Landscaping Website

This file provides instructional context for Gemini CLI when working on the **DGS Landscaping** project.

## Project Overview

DGS Landscaping is a modern web application built with a future-looking stack. It serves as the primary digital presence for DGS Landscaping, highlighting their premium landscaping services, portfolio, and story.

### Core Technologies
- **Framework**: [Next.js 16.2.2](https://nextjs.org/) (App Router)
- **Library**: [React 19.2.4](https://react.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Language**: [TypeScript 5.0+](https://www.typescriptlang.org/)
- **Fonts**: Geist, Geist Mono, Plus Jakarta Sans (via `next/font`)

## Building and Running

The following scripts are defined in `package.json`:

- **Development Server**: `npm run dev` (Runs on `http://localhost:3000`)
- **Production Build**: `npm run build`
- **Start Production Server**: `npm run start`
- **Linting**: `npm run lint`

## Development Conventions

### ⚠️ Critical Note on Next.js 16
This project uses **Next.js 16**, which may contain breaking changes and different conventions from earlier versions. 
- Refer to `AGENTS.md` for specific warnings.
- Consult internal documentation in `node_modules/next/dist/docs/` before implementing new patterns.

### Architecture & Structure
- **App Router**: Routing is handled in the `app/` directory.
- **Components**: Reusable UI components reside in the `components/` directory.
- **Server vs. Client Components**: Use `"use client"` only for components requiring interactivity or browser APIs (e.g., `Navbar.tsx`).
- **Layouts**: Global layout is managed in `app/layout.tsx`.

### Styling & Design System
- **Tailwind CSS 4**: Utilizes the new `@import "tailwindcss";` and `@theme inline` patterns in `app/globals.css`.
- **Custom Theme**: Defined in `app/globals.css`. Key colors:
  - `primary-green`: #345E37
  - `dark-green`: #1B3518
  - `accent-green`: #5D8233
  - `cream`: #FAF9F6
- **Typography**: Headings use `var(--font-heading)` (Plus Jakarta Sans). Body uses `var(--font-sans)` (Geist).

### Coding Standards
- **TypeScript**: Use strict typing where possible.
- **Functional Components**: All React components should be functional and exported as defaults or named exports following existing patterns.
- **Accessibility**: Use semantic HTML tags and ensure proper contrast and ARIA attributes.

## Directory Structure

- `app/`: Routing logic, layouts, and global styles.
- `components/`: UI components (Navbar, Hero, Footer, etc.).
- `public/`: Static assets (images, logos).
- `node_modules/`: Project dependencies and Next.js 16 documentation.

## Key Files

- `app/layout.tsx`: Root layout with font and metadata configuration.
- `app/page.tsx`: Home page entry point.
- `app/globals.css`: Tailwind 4 configuration and global theme variables.
- `package.json`: Project dependencies and scripts.
- `AGENTS.md`: Specific instructions for AI agents regarding breaking changes.
