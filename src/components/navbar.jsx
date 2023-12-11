import React from "react";
import {Link} from "react-router-dom";
import Cart from "./cart";
import Search from "./search";
import "./navbar.css";

export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/" className="store-link"> MY JEWELLERY STORE </Link>
            </div>
            <div className="links">
                <Link to="/search" className="search-icon">
                    <Search />
                </Link>
            </div>
            <div className="links">
                <Link to="/cart" className="cart-icon">
                    <Cart />
                </Link>
            </div>
        </div>
    );
};