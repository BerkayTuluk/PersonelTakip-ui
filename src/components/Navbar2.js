import React from "react";
import { Link } from "react-router-dom";

function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
            <p className="display-6">PerTak</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <form className="d-flex " role="search">
              <ul>
                <li>
                  <button type="button" class="btn btn-light ">
                    <Link className="nav-link " to="/login-user">
                      Login     
                    </Link>
                  </button>
                </li>
              </ul>
              <ul>
                <li>
                  <button type="button" class="btn btn-light ">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
