import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
import Products from "./products"

export const Header = () => {
    return (
        <div className="links">
                <Link to="/products" className="products-icon">
                    <Products />
                </Link>
        </div>
    );
};