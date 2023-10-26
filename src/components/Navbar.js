import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p class="text-light bg-dark display-5">PerTak</p>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/works"
                >
                  Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addwork">
                  Add Work
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/works">
                      Back-End
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/works">
                      Front-End
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/works">
                      Sql
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/works">
                      Database
                    </a>
                  </li>
                </ul>
              </li>
              
            </ul>
            <ul>
              <a href="/works">
              <FontAwesomeIcon className="fa-2x" icon={faUser}  color="gold"/>
              </a>
            </ul>
            <ul>
              <form className="d-flex" role="search">
                <button type="button" class="btn btn-danger btn-lg">
                  <Link className="nav-link " to="/">
                    Exit
                  </Link>
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
