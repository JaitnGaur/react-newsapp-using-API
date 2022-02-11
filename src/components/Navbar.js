import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg  ${props.dark === true ? "bg-dark navbar-dark" : "bg-light navbar-light"}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Tech">Tech</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link>
                        </li>
                    </ul>
                    {
                        props.search === true && <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    }
                </div>
            </div>
        </nav>);
};


Navbar.propTypes = {
    dark: PropTypes.bool,
    title: PropTypes.string,
    search: PropTypes.bool,
}

Navbar.defaultProps = {
    dark: "true",
    title: "SITE NAME",
    search: true,
}