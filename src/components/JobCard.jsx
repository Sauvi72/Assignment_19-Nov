import React from "react";
import { Link } from "react-router";

function JobCard({ job, onToggleApply, appliedCount }) {

  let btn;
  if (job.isApplied) {
    btn = <button onClick={() => onToggleApply(job.id)} className="btn btn-withdraw">Withdraw</button>;
  } else if (job.openings === 0) {
    btn = <button disabled className="btn btn-disabled">Hiring Closed</button>;
  } else if (appliedCount >= 3) {
    btn = <button disabled className="btn btn-disabled">Limit reached (3/3)</button>;
  } else {
    btn = <button onClick={() => onToggleApply(job.id)} className="btn btn-apply">Apply</button>;
  }

  return (
    <div className="job-card">
      <div className="card-header">
        <h3>{job.title}</h3>
        <span className="badge">
          {job.experienceRequired === 0 ? "Fresher Friendly" : `${job.experienceRequired} yrs exp`}
        </span>
      </div>

      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Mode:</strong> {job.mode}</p>
      <p><strong>Package:</strong> {job.packageLPA} LPA</p>

      <div className="card-actions">
        {btn}
        <Link to={`/jobs/${job.id}`} className="details-link">View Details</Link>
      </div>
    </div>
  );
}

export default JobCard;
