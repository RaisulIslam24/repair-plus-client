import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <Link className="mainHeader" to="/home"><strong>REPAIR PLUS</strong></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <li>
                                <Link className="header me-5" to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className="header me-5" to="/home">About us</Link>
                            </li>
                            <li>
                                <Link className="header me-5" to="/home">Contact</Link>
                            </li>
                            <li>
                                <Link className="header me-5" to="/admin">Admin</Link>
                            </li>
                            <li>
                                <Link className="header" to="/login">
                                    {loggedInUser.displayName || loggedInUser.displayName || loggedInUser.name || <button className="btn btn-danger btn-sm">Login</button>}
                                </Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;