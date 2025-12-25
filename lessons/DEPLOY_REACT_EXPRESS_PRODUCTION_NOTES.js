/*
===========================================================
DEPLOYING A REACT + EXPRESS APP (BEGINNER PRODUCTION GUIDE)
===========================================================

OVERVIEW
--------
This method deploys a React frontend and an Express backend
as ONE single production app.

React is built into static files (HTML, CSS, JS),
and Express serves those files while also handling API routes.

This is NOT the only way to deploy React, but it is:
✔ Simple
✔ Beginner-friendly
✔ Great for small full-stack apps
✔ Easy to deploy on platforms like Railway

-----------------------------------------------------------
STEP 1: BUILD THE REACT APP (PRODUCTION MODE)
-----------------------------------------------------------

- In the React frontend folder, run:

  npm run build
  (or yarn build)

- This creates a `dist/` folder.
- `dist/` contains compiled production files:
  - index.html
  - CSS
  - JavaScript bundles
- IMPORTANT:
  The dev server (npm run dev) is NOT used in production.

-----------------------------------------------------------
STEP 2: MOVE `dist/` INTO THE EXPRESS BACKEND
-----------------------------------------------------------

- Copy the generated `dist/` folder
- Paste it into the ROOT of your Express backend project

Your backend should now look like:
  /backend
    /dist
    server.js
    package.json

⚠ GOTCHA:
If `dist` is in `.gitignore`, it WILL NOT be deployed.
Remove `dist` from `.gitignore` before pushing to GitHub.

-----------------------------------------------------------
STEP 3: SERVE REACT USING EXPRESS
-----------------------------------------------------------

In `server.js`:

- Use Express static middleware to serve `dist`

Example idea (not full code):
- app.use(express.static("dist"))

RESULT:
- Visiting `/` serves React
- Visiting `/api/...` serves JSON from Express

-----------------------------------------------------------
STEP 4: UNDERSTANDING HOW PRODUCTION WORKS
-----------------------------------------------------------

- Express now serves:
  ✔ React frontend (from dist)
  ✔ API backend routes

- React JSX files (App.jsx etc.) are NOT used anymore.
- Only the compiled files in `dist/` are used.

⚠ GOTCHA:
If you change React code:
- It will NOT update automatically
- You MUST:
  1. Rebuild React (npm run build)
  2. Replace the old `dist` folder
  3. Commit & redeploy

-----------------------------------------------------------
STEP 5: PUSH TO GITHUB
-----------------------------------------------------------

- Initialize git in backend folder
- Make sure `dist/` IS INCLUDED
- Commit and push to GitHub

This repo is what Railway deploys.

-----------------------------------------------------------
STEP 6: DEPLOY ON RAILWAY
-----------------------------------------------------------

- Create a Railway project
- Deploy FROM GitHub repo
- Select the Express backend repo

⚠ UI GOTCHA (Railway):
Railway no longer auto-shows a URL.

YOU MUST:
1. Click the deployed service
2. Go to Settings / Networking
3. Click "Generate Domain"

Railway will create a URL like:
  https://your-app-name.up.railway.app

-----------------------------------------------------------
STEP 7: VERIFY DEPLOYMENT
-----------------------------------------------------------

- Visit ROOT URL:
  → Shows React app

- Visit API route:
  → /api/users (example)
  → Shows JSON response

This confirms:
✔ React frontend works
✔ Express API works
✔ Both are deployed together

-----------------------------------------------------------
HOW GOOD IS THIS METHOD?
-----------------------------------------------------------

PROS:
✔ Easy mental model (one app)
✔ No CORS issues
✔ Simple Railway deployment
✔ Great for learning + small projects

CONS:
✘ Manual rebuild required for frontend
✘ Not ideal for large teams
✘ Frontend & backend tightly coupled

BEST USED FOR:
✔ Learning full-stack deployment
✔ Portfolio projects
✔ Small production apps

-----------------------------------------------------------
SUMMARY
-----------------------------------------------------------

You are deploying:
✔ ONE Express app
✔ That SERVES React
✔ And HANDLES APIs
✔ From the same domain

This is a VALID production pattern — just not the only one.
===========================================================
*/
