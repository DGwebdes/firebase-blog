import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <Link to="/" className="text-lg font-bold">
                LOGO
            </Link>

            <div className="flex gap-5 items-center">
                <Link className="text-lg text-blue-500" to="/login">
                    Login
                </Link>
            </div>
        </>
    );
};

export default Footer;
