# React + TypeScript + Vite

# Spreadsheet Prototype (Frontend-Only)

This project is a static React-based prototype replicating a spreadsheet-style interface inspired by Google Sheets / Airtable, built according to a Figma specification.

## Overview

The prototype closely mirrors the design provided in the Figma link below. It is fully static, with no backend functionality, and built to demonstrate pixel-accurate layout, interactive table controls, and a structured component-based approach using React, TypeScript, and Tailwind CSS.

**Figma Reference**:  
https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535

## Tech Stack

- React 18 (via Vite)
- TypeScript (strict mode enabled)
- Tailwind CSS (utility-first styling)
- react-table (for spreadsheet-like data grid behavior)
- ESLint + Prettier (for linting and formatting)

## Features

- Spreadsheet grid with scrollable rows and sticky headers
- Top and sub-header controls, closely matching the design
- Colored cell backgrounds, custom cell renderers (status, priority)
- Interactive buttons and dropdowns that log actions to console
- Responsive layout using Tailwind utilities
- Pixel-close alignment with Figma spec

## Install dependencies
- npm install


## Start development server
- npm run dev


## Run lint and type checks
- npm run lint
- npm run type-check