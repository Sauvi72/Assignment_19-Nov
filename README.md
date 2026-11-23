# Job Portal Web Application

## Student Details
- **Student Name:** Saurav Kumar
- **Roll Number:** [Your Roll Number]
- **Assigned Problem Statement:** P5 — Job Portal

---

## Instructions to Run the Application

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. Open the browser and visit the local server URL (typically `http://localhost:5173`).

---

## Project Structure
```
src/
├── data/
│   └── jobs.js
├── components/
│   ├── Navbar.jsx
│   └── JobCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Jobs.jsx
│   ├── JobDetails.jsx
│   └── AppliedJobs.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Features Implemented
- **Home (`/`)**: Displays title, introduction, and summary counts (Total Jobs, Applied Jobs, Remote Jobs).
- **Jobs (`/jobs`)**:
  - Filter jobs by work mode (`All`, `Remote`, `Onsite`, `Hybrid`) using dropdown.
  - Reusable `JobCard` showing job details, salary package (LPA), and experience badge (`Fresher Friendly` or `N yrs exp`).
  - Apply and Withdraw application toggles.
  - If `openings === 0`, displays `Hiring Closed`.
  - Maximum 3 applications limit. When 3 applications are used, shows a warning banner at the top and changes unapplied buttons to `Limit reached (3/3)`.
- **Job Details (`/jobs/:id`)**:
  - Dynamic routing with `useParams()`.
  - Displays openings, experience required, and skills list using `map()`.
  - Apply / Withdraw actions consistent with the portal rules.
- **Applied Jobs (`/applied`)**:
  - Displays only applied jobs.
  - Displays application quota status (`Applications used: N/3`) or `No applications yet`.
  - Ability to withdraw directly from the applied page.
