import React from "react";
import { Link } from "react-router";

function Navbar({ appliedCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Job Portal</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/applied">Applied Jobs ({appliedCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
