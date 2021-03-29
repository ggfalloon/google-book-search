import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-dark">
            <div class="container-fluid">

                <Link className="navbar-brand left-nav" to="/">Google Books</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/search"
                                className={
                                    window.location.pathname === "/search"
                                        ? "nav-link active"
                                        : "nav-link"} >Search</Link>
                        </li>
                        <li className="nav-item">
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