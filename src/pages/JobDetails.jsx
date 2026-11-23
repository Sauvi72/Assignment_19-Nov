import React from "react";
import { useParams, Link } from "react-router";

function JobDetails({ jobs, onToggleApply }) {
  const { id } = useParams();

  // Find job using find()
  const job = jobs.find((item) => item.id === parseInt(id));

  const appliedCount = jobs.filter((item) => item.isApplied).length;

  if (!job) {
    return (
      <div className="page">
        <h2>Job Not Found</h2>
        <Link to="/jobs" className="btn btn-secondary">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="page job-details-page">
      <Link to="/jobs" className="back-link">
        ← Back to Jobs
      </Link>

      <div className="details-card">
        <div className="details-header">
          <h2>{job.title}</h2>
          <span className="badge">
            {job.experienceRequired === 0
              ? "Fresher Friendly"
              : `${job.experienceRequired} yrs exp`}
          </span>
        </div>

        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Mode:</strong> {job.mode}</p>
        <p><strong>Package:</strong> {job.packageLPA} LPA</p>
        <p><strong>Openings:</strong> {job.openings}</p>
        <p><strong>Experience Required:</strong> {job.experienceRequired} years</p>

        {/* Skills list using map() */}
        <div className="skills-section">
          <strong>Skills Required:</strong>
          <div className="skills-list">
            {job.skills.map((skill, index) => (
              <span key={index} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="details-actions">
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
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
