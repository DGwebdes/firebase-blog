import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <Link to="/" className="text-lg font-bold">
                <img src="/potion.png" alt="blog-logo-icon" className="w-10" />
            </Link>

            <div className="flex gap-5 items-center">
                <p className="dark:text-gray-400">
                    ©{" "}
                    <span className="text-sm ">{new Date().getFullYear()}</span>
                </p>
            </div>
        </>
    );
};

export default Footer;
