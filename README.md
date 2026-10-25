# Assignment 12: React & Storybook Component Library ("UI Garden")

A UI component library built with **Create React App (TypeScript)**, **styled-components** and **Storybook**, tested with **Jest + React Testing Library**, and packaged with **Docker** so the production build runs at **http://localhost:8083** (also **http://127.0.0.1:8083**).

| Item | Value |
|------|-------|
| Author | Olukayode Adeyemi |
| Project folder | `my-component-library/` (app, Storybook, `Dockerfile`) |
| Docker image name | `adeyemi_olukayode_ui_garden` |
| **Docker container name** | `adeyemi_olukayode_coding_assignment12` |
| **Docker working directory** (site files) | `/adeyemi_olukayode_ui_garden` |
| Site URL | http://localhost:8083 |

Commands below are written for **PowerShell** on Windows. They also work in macOS/Linux terminals if you replace `.\` with `./`.

---

## 1. Components in the library

Button, Label, Text, Table (with TableHeader, TableRow, TableCell, TableFooter), Dropdown, RadioButton, Img, HeroImage and Card — **13 components** in total.

Every component folder in `my-component-library/src/components/<Name>/` contains:

```
<Name>.tsx            the component (styled with styled-components)
<Name>.stories.tsx    Storybook stories (Default + Disabled) and controls
<Name>.types.ts       TypeScript prop types
<Name>.tests.tsx      unit tests (visible + disabled background colour)
index.ts              barrel file that exports the component and its types
```

---

## 2. Prerequisites

| Tool | Version | Check with |
|------|---------|-----------|
| Node.js | 20.19 or newer (LTS) | `node -v` |
| npm | 9 or newer | `npm -v` |
| Docker Desktop | installed **and running** | `docker -v` |
| Git | any recent version | `git --version` |

---

## 3. Project setup

```powershell
git clone <your-github-repo-url>
cd my-react-typescript-project
cd my-component-library
npm install --legacy-peer-deps
```

`--legacy-peer-deps` is needed because Create React App 5 declares older peer dependency ranges than React 19 and Storybook 10. The same flag is used inside the `Dockerfile`.

---

## 4. Run the app locally (development)

```powershell
npm start
```

Opens the component showcase at **http://localhost:3000**. Press `Ctrl + C` to stop it.

---

## 5. Run Storybook

```powershell
npm run storybook
```

Open **http://localhost:6006**. In Storybook:

1. Pick a component in the left sidebar (for example *Components → Button*).
2. Choose the **Default** story, then the **Disabled** story.
3. Use the **Controls** panel at the bottom to change the text, the background colour (colour picker) and the `disabled` toggle live.
4. A disabled component turns grey (`#cccccc`) and shows the `not-allowed` cursor when you hover over it.
5. Use the **Viewport** option in the toolbar (or resize the window) to check that components are responsive.

Press `Ctrl + C` to stop Storybook. To produce a static copy: `npm run build-storybook` (output goes to `storybook-static/`).

---

## 6. Run the tests

Each component has **two tests**:

1. **Visible** – the component renders and `toBeVisible()` passes.
2. **Disabled colour** – when `disabled` is set, the background colour changes to grey (`#cccccc`) and the cursor is `not-allowed`.

Because the test files are named `*.tests.tsx` (as the assignment requires) and Create React App only auto-detects `*.test.tsx`, run the component tests by pointing Jest at that pattern:

```powershell
npx react-scripts test --watchAll=false --testMatch "<rootDir>/src/**/*.tests.tsx"
```

Expected result: **13 test suites passed, 26 tests passed**.

The app-level smoke test is run with the standard command:

```powershell
npm test -- --watchAll=false
```

Expected result: **1 test suite passed, 1 test passed** (`App.test.tsx`).

---

## 7. Build and run with Docker (localhost:8083)

The `Dockerfile` is a **multi-stage build**:

1. **Builder stage** (`node:18-alpine`) – sets `WORKDIR /adeyemi_olukayode_ui_garden`, installs dependencies and runs `npm run build` to create the **production build** of the Create React App.
2. **Runner stage** (`nginx:alpine`) – sets `WORKDIR /adeyemi_olukayode_ui_garden`, copies the production build into that directory and serves it with nginx, which listens on **port 8083**.

### 7.1 Build the image

Run this from the **repository root** (the folder that contains `my-component-library`):

```powershell
docker build -t adeyemi_olukayode_ui_garden .\my-component-library
```

(If your terminal is already inside `my-component-library`, use `docker build -t adeyemi_olukayode_ui_garden .` instead.)

### 7.2 Run the container with the required name

```powershell
docker run -d --name adeyemi_olukayode_coding_assignment12 -p 8083:8083 adeyemi_olukayode_ui_garden
```

* `-d` runs it in the background
* `--name adeyemi_olukayode_coding_assignment12` gives the container the name required by the assignment
* `-p 8083:8083` maps port 8083 on your computer to port 8083 in the container

### 7.3 Open the site

* http://localhost:8083
* http://127.0.0.1:8083

### 7.4 Stop and clean up

```powershell
docker stop adeyemi_olukayode_coding_assignment12
docker rm adeyemi_olukayode_coding_assignment12
```

If you see *"container name is already in use"*, remove the old container first with `docker rm -f adeyemi_olukayode_coding_assignment12` and run step 7.2 again. If you see *"port is already allocated"*, another container is using 8083: run `docker ps`, then stop it with `docker stop <name>`.

---

## 8. Verification checklist

| Requirement | How to verify |
|-------------|---------------|
| Create React App + Storybook | `npm start` opens the app on :3000 and `npm run storybook` opens Storybook on :6006 |
| All 13 components present | Storybook sidebar lists Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage, Card |
| Required files in each component folder | Open any `src/components/<Name>/` folder: `.tsx`, `.stories.tsx`, `.types.ts`, `.tests.tsx`, `index.ts` |
| styled-components used | Each component file imports `styled` from `styled-components` |
| Responsive | Resize the browser or use the Storybook Viewport menu: widths use `100%` with `max-width`, the table scrolls horizontally, and the hero image changes size under 768px |
| Controls for text and background colour | Storybook **Controls** panel changes text, background colour and `disabled` |
| Default and Disabled state | Every component has a **Default** story and a **Disabled** story (grey with `not-allowed` cursor) |
| Two tests per component | Run the command in section 6: 26 component tests pass |
| Production build in Docker | Section 7: the site loads at http://localhost:8083 |
| Container name | `docker ps --filter "name=adeyemi_olukayode_coding_assignment12"` shows the container and `0.0.0.0:8083->8083/tcp` |
| Working directory | `docker exec adeyemi_olukayode_coding_assignment12 pwd` prints `/adeyemi_olukayode_ui_garden` |
| Site files in working directory | `docker exec adeyemi_olukayode_coding_assignment12 ls build` lists `index.html` and `static` |

---

## 9. How it works (summary of the steps taken)

1. **Created the project** with Create React App using the TypeScript template, then added **Storybook** (`storybook init`) so each component can be viewed and tested on its own.
2. **Built 13 components**, each in its own folder with the five required files. Props such as `text`, `backgroundColor` and `disabled` are defined in `<Name>.types.ts`.
3. **Styled with styled-components.** Each component reads its props to set the CSS; a `disabled` block overrides the colours with grey (`#cccccc`) and sets `cursor: not-allowed`. `shouldForwardProp` stops styling-only props from reaching the DOM.
4. **Made them responsive** with fluid widths (`width: 100%`, `max-width`), `@media` queries and a scrolling wrapper around the table.
5. **Wrote Storybook stories** with a Default and a Disabled version of every component, plus `argTypes` controls for text, background colour and `disabled`.
6. **Wrote tests** with React Testing Library and jest-dom: one checks the component is visible, one checks the background colour and cursor in the disabled state.
7. **Containerised the app** with a multi-stage Dockerfile: Node builds the optimised production files, then nginx serves only those static files from `/adeyemi_olukayode_ui_garden` on port 8083. The result is a small image without Node or `node_modules`.

---

## 10. Troubleshooting

| Problem | Fix |
|---------|-----|
| `open Dockerfile: no such file or directory` | You are in the wrong folder. The Dockerfile is inside `my-component-library`; `cd` into it or pass `.\my-component-library` as the build path |
| `ERR_CONNECTION_REFUSED` on localhost:8083 | The container is not running or the port mapping is wrong. Check `docker ps`; the PORTS column must show `0.0.0.0:8083->8083/tcp` |
| Storybook fails with a node version message | Install Node 20.19 or newer |
| Storybook cannot find the `public` folder on macOS/Linux | In `.storybook/main.ts` change `"..\\public"` to `"../public"` (the Windows-style path works on Windows) |
| `npm install` shows peer dependency errors | Use `npm install --legacy-peer-deps` |