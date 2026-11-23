import React from "react";
import { Link } from "react-router";

function JobCard({ job, onToggleApply, appliedCount }) {
  return (
    <div className="job-card">
      <div className="card-header">
        <h3>{job.title}</h3>
        <span className="badge">
          {job.experienceRequired === 0
            ? "Fresher Friendly"
            : `${job.experienceRequired} yrs exp`}
        </span>
      </div>

      <p className="company"><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Mode:</strong> {job.mode}</p>
      <p><strong>Package:</strong> {job.packageLPA} LPA</p>

      <div className="card-actions">
        {job.isApplied ? (
          <button
            onClick={() => onToggleApply(job.id)}
            className="btn btn-withdraw"
          >
            Withdraw
          </button>
        ) : job.openings === 0 ? (
          <button disabled className="btn btn-disabled">
            Hiring Closed
          </button>
        ) : appliedCount >= 3 ? (
          <button disabled className="btn btn-disabled">
            Limit reached (3/3)
          </button>
        ) : (
          <button
            onClick={() => onToggleApply(job.id)}
            className="btn btn-apply"
          >
            Apply
          </button>
        )}

        <Link to={`/jobs/${job.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
