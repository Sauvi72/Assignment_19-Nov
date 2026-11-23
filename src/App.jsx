import React, { useState } from "react";
import { Routes, Route } from "react-router";
import jobsData from "./data/jobs.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import AppliedJobs from "./pages/AppliedJobs.jsx";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState(jobsData);

  function handleToggleApply(id) {
    const updated = jobs.map((job) => {
      if (job.id === id) {
        return { ...job, isApplied: !job.isApplied };
      }
      return job;
    });
    setJobs(updated);
  }

  const appliedCount = jobs.filter((job) => job.isApplied).length;

  return (
    <div className="app-container">
      <Navbar appliedCount={appliedCount} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home jobs={jobs} />} />
          <Route path="/jobs" element={<Jobs jobs={jobs} onToggleApply={handleToggleApply} />} />
          <Route path="/jobs/:id" element={<JobDetails jobs={jobs} onToggleApply={handleToggleApply} />} />
          <Route path="/applied" element={<AppliedJobs jobs={jobs} onToggleApply={handleToggleApply} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
