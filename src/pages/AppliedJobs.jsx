import React from "react";
import JobCard from "../components/JobCard.jsx";

function AppliedJobs({ jobs, onToggleApply }) {
  const appliedJobs = jobs.filter((job) => job.isApplied);

  return (
    <div className="page applied-page">
      <h2>Applied Jobs</h2>

      <p><strong>Applications used:</strong> {appliedJobs.length}/3</p>

      {appliedJobs.length === 0 ? (
        <p className="no-data">No applications yet</p>
      ) : (
        <div className="job-list">
          {appliedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onToggleApply={onToggleApply}
              appliedCount={appliedJobs.length}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AppliedJobs;
