import React from 'react'
import PropTypes from "prop-types"

function Navbar(props) {

  return (
    <div className="Container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.Mode}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">{props.title}</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="pa
                ge" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.Mode === "light"?"dark":"light"}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     title: "Set Title Here",
//     aboutText: "Set about Text"
// }

export default Navbar