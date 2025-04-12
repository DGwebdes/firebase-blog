import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Layout from "./Layout";

const Login = () => {
    const navigate = useNavigate();
    const { GoogleSignIn } = useAuth();
    const [error, setError] = useState("");

    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignIn();
            navigate("/");
        } catch (err) {
            setError("Cannot login with google", err.message);
        }
    };

    return (
        <Layout>
            <div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg inset-0">
                <h1 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
                    Login
                </h1>

                {error && (
                    <p className="text-red-500 text-xl text-center mb-4">
                        {error}
                    </p>
                )}

                <div className="mt-4 flex items-center">
                    <div className="border-b w-full"></div>
                    <span className="mx-4 text-sm text-gray-500 dark:text-gray-400">
                        or
                    </span>
                    <div className="border-b w-full"></div>
                </div>

                <button
                    className="mt-6 w-full bg-red-500 text-white px-6 py-3 rounded-lg flex justify-center items-center hover:bg-red-600 transition-all dark:bg-red-600 dark:hover:bg-red-500"
                    onClick={handleGoogleSignIn}
                >
                    <img
                        src="/google-icon.svg"
                        alt="Google"
                        className="w-6 h-6 mr-3"
                    />
                    Sign in With Google
                </button>
            </div>
        </Layout>
    );
};

export default Login;
