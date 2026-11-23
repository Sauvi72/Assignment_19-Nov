import React from "react";
import { Link } from "react-router";

function Home({ jobs }) {
  const totalJobs = jobs.length;
  const appliedJobs = jobs.filter((job) => job.isApplied).length;
  const remoteJobs = jobs.filter((job) => job.mode === "Remote").length;

  return (
    <div className="page home-page">
      <h1>Welcome to Job Portal</h1>
      <p className="intro-text">
        Find your dream job across top tech companies. Browse fresh openings,
        filter by work mode, and apply directly.
      </p>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Jobs</h3>
          <p className="stat-number">{totalJobs}</p>
        </div>

        <div className="stat-card">
          <h3>Applied Jobs</h3>
          <p className="stat-number">{appliedJobs}</p>
        </div>

        <div className="stat-card">
          <h3>Remote Jobs</h3>
          <p className="stat-number">{remoteJobs}</p>
        </div>
      </div>

      <div className="home-action">
        <Link to="/jobs" className="btn btn-primary">
          Explore Jobs
        </Link>
      </div>
    </div>
  );
}

export default Home;
