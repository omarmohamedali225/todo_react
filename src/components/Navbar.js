import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [nav,setNav] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to='/'>
          ToDO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>nav ? setNav(false) : setNav(true)}
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={nav ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item p-2">
              <Link className="nav-link active" aria-current="page" to={'/'} onClick={()=>setNav(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link" to={'/note'} onClick={()=>setNav(false)}>
                Note
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
