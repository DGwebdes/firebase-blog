import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };
    return (
        <nav className="py-4 px-10 bg-gray-200 flex justify-between">
            <Link to="/" className="text-lg font-bold">
                LOGO
            </Link>
            {user ? (
                <div className="flex gap-5">
                    <button
                        className="text-lg text-red-500"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    <Link
                        to="/create"
                        className="text-lg font-bold text-blue-500"
                    >
                        New Post
                    </Link>
                </div>
            ) : (
                <Link className="text-lg text-blue-500" to="/login">
                    Login
                </Link>
            )}
        </nav>
    );
};

export default Navbar;
