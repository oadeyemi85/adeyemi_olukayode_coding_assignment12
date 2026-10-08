# Assignment 12: React & Storybook Component Library

This repository contains a React and TypeScript component library with Storybook. The application and its Dockerfile are in the `my-component-library` folder.

## Run locally

Requires Node.js 18 or later and npm.

```powershell
cd .\my-component-library
npm install
npm start
```

The development server opens at `http://localhost:3000`.

## Run with Docker

Requires Docker Desktop to be installed and running. From the repository root:

```powershell
docker build -t ui-garden .\my-component-library
docker run --rm -p 8083:8083 ui-garden
```

Open `http://localhost:8083`. To use port `8803` on your computer instead, map it to the container's port `8083`:

```powershell
docker run --rm -p 8803:8083 ui-garden
```