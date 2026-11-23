import React, { useState } from "react";
import JobCard from "../components/JobCard.jsx";

function Jobs({ jobs, onToggleApply }) {
  const [selectedMode, setSelectedMode] = useState("All");

  const appliedCount = jobs.filter((job) => job.isApplied).length;

  // Filter jobs based on selected mode
  const filteredJobs = jobs.filter((job) => {
    if (selectedMode === "All") {
      return true;
    }
    return job.mode === selectedMode;
  });

  return (
    <div className="page jobs-page">
      <h2>Job Openings</h2>

      {/* Warning shown at top when 3 jobs are applied */}
      {appliedCount >= 3 && (
        <div className="warning-box">
          ⚠️ You have reached the limit of 3 applications. Withdraw an application to apply for other jobs.
        </div>
      )}

      {/* Dropdown filter for mode */}
      <div className="filter-section">
        <label htmlFor="modeFilter">Filter by Mode: </label>
        <select
          id="modeFilter"
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Jobs grid */}
      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <p>No jobs found for this mode.</p>
        ) : (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onToggleApply={onToggleApply}
              appliedCount={appliedCount}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Jobs;
