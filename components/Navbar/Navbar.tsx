import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface Dimension {
  width: number;
  height: number;
}

const Navbar: React.FC = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState<boolean>(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const [screenSize, setScreenSize] = useState<Dimension>({
    width: 800,
    height: 0,
  });

  function getCurrentDimension(): Dimension {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  }

  useEffect(() => {
    setScreenSize(getCurrentDimension());
  }, []);

  useEffect(() => {
    // function to get screen width
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div>
      {
        <nav
          className={`${
            styles.navbarAdjust
          } navbar navbar-expand-md navbar-dark bg-dark ${
            screenSize.width > 1600 && "py-3"
          }`}
        >
          <div className="container-fluid">
            <a
              className={`${styles.navbarLogo} navbar-brand h1 mb-0 ${
                screenSize.width > 1600 && "fs-3"
              }`}
              href="#"
            >
              Aquario
            </a>
            {screenSize.width < 768 && (
              <div className={styles.formContainer}>
                <form className={`d-flex`}>
                  <input
                    className={`form-control me-2 ${
                      screenSize.width > 1600 && "fs-5"
                    }`}
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
            )}

            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarNav"
            >
              <ul
                className={`navbar-nav mr-auto ${
                  screenSize.width > 1600 && "fs-5"
                }`}
              >
                <li className={`${styles.navLink} nav-item`}>
                  <a className="nav-link" href="#">
                    My Fish
                  </a>
                </li>
                <li className={`${styles.navLink} nav-item`}>
                  <a className="nav-link" href="#">
                    Posts
                  </a>
                </li>
                <li className={`${styles.navLink} nav-item`}>
                  <a className="nav-link" href="#">
                    Auctions
                  </a>
                </li>
                <li className={`${styles.navLink} nav-item`}>
                  <a className="nav-link" href="#">
                    Research
                  </a>
                </li>
                <li className={`${styles.navLink} nav-item`}>
                  <a className="nav-link" href="#">
                    Selling
                  </a>
                </li>
              </ul>
            </div>
            {screenSize.width >= 768 && (
              <div className={styles.formContainer}>
                <form className={`d-flex`}>
                  <input
                    className={`form-control me-2 ${
                      screenSize.width > 1600 && "fs-5"
                    }`}
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
            )}
          </div>
        </nav>
      }
    </div>
  );
};

export default Navbar;
