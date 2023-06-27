import React, { useState } from "react";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  // Define any props you need for the component
}

const Navbar: React.FC<Props> = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      {
        /* Add your component content here */
        <nav
          className={`${styles.navbarAdjust} navbar navbar-expand-md navbar-dark bg-dark`}
        >
          <div className="container-fluid">
            <a className={`${styles.navbarLogo} navbar-brand h1 mb-0`} href="#">
              Aquario
            </a>

            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarNav"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    My Fish
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Posts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Auctions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Research
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Selling
                  </a>
                </li>
              </ul>
            </div>
            <form className={`d-flex`}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      }
    </div>
  );
};

export default Navbar;
