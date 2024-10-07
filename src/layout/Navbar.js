import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            REACT CURD
          </Link>
          <Link className="btn btn-outline-light fw-bold text-black bg-white" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  );
}
