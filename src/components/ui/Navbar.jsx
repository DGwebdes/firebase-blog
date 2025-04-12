import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ToggleTheme from "../ui/ToggleTheme";
import { LogOut } from "lucide-react";
import { LogIn } from "lucide-react";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };
    return (
        <>
            <Link to="/" className="text-lg font-bold">
                <img src="/potion.png" alt="blog-logo-icon" className="w-10" />
            </Link>
            {user ? (
                <div className="flex gap-5 items-center">
                    <Link to="/posts">Blog</Link>

                    <Link
                        to="/create"
                        className="text-lg font-bold text-blue-500"
                    >
                        New Post
                    </Link>
                    <button
                        className="text-lg text-red-500"
                        onClick={handleLogout}
                    >
                        <LogOut />
                    </button>
                    <ToggleTheme />
                </div>
            ) : (
                <div className="flex gap-5 items-center">
                    <Link to="/posts">Blog</Link>
                    <Link className="text-lg text-blue-500" to="/login">
                        <LogIn />
                    </Link>
                    <ToggleTheme />
                </div>
            )}
        </>
    );
};

export default Navbar;
