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
        Browse and apply to jobs. Max 3 applications allowed.
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

      <Link to="/jobs" className="btn btn-primary">
        Explore Jobs
      </Link>
    </div>
  );
}

export default Home;
