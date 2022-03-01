import React from "react";

function Navbar(prop) {
  
  

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light bg-${prop.mode}`} style={prop.myStyle}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="" style={prop.myStyle}>
            {prop.title}
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={prop.myStyle}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={prop.myStyle}>
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch" >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={prop.handleMode}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {prop.mode}Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
