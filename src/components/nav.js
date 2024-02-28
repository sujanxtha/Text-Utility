import React from 'react'
import { Link } from 'react-router-dom'; 

import PropTypes from 'prop-types'


export default function nav(props) {
    return (
        <>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Simple To-do app</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Pricing</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="#">Action</Link>
                                    <Link className="dropdown-item" to="#">Another action</Link>
                                    <Link className="dropdown-item" to="#">Something else here</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}
