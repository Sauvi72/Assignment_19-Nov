import React, { useState } from "react";
import JobCard from "../components/JobCard.jsx";

function Jobs({ jobs, onToggleApply }) {
  const [selectedMode, setSelectedMode] = useState("All");

  const appliedCount = jobs.filter((job) => job.isApplied).length;

  const filteredJobs = jobs.filter((job) => {
    if (selectedMode === "All") return true;
    return job.mode === selectedMode;
  });

  return (
    <div className="page jobs-page">
      <h2>Job Openings</h2>

      {appliedCount >= 3 && (
        <div className="warning-box">
          You have used all 3 applications. Withdraw one to apply elsewhere.
        </div>
      )}

      <div className="filter-section">
        <label>Filter by Mode: </label>
        <select value={selectedMode} onChange={(e) => setSelectedMode(e.target.value)}>
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <p>No jobs for this mode.</p>
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
