import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">

                <Link className="navbar-brand left-nav" to="/">Google Books</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link to="/search"
                                className={
                                    window.location.pathname === "/search"
                                        ? "nav-link active"
                                        : "nav-link"} >Search</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to="/saved"
                                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Saved Books</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;