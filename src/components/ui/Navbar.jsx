import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ToggleTheme from "../ui/ToggleTheme";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };
    return (
        <nav className="py-4 px-10 bg-gray-200 dark:bg-gray-900 text-black dark:text-white flex justify-between transition-colors duration-300">
            <Link to="/" className="text-lg font-bold">
                LOGO
            </Link>
            {user ? (
                <div className="flex gap-5 items-center">
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
                    <ToggleTheme />
                </div>
            ) : (
                <div className="flex gap-5 items-center">
                    <Link className="text-lg text-blue-500" to="/login">
                        Login
                    </Link>
                    <ToggleTheme />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
