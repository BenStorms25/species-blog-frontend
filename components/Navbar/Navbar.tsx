import React from "react";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {
  // Define any props you need for the component
}

const Navbar: React.FC<Props> = () => {
  return (
    <div>
      {
        /* Add your component content here */
        <nav
          className={`${styles.navbarAdjust} navbar navbar-expand-md navbar-dark bg-dark`}
        >
          <div className="container-fluid">
            <a className={`${styles.navbarLogo} navbar-brand`} href="#">
              Aquario
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
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
          </div>
        </nav>
      }
    </div>
  );
};

export default Navbar;
