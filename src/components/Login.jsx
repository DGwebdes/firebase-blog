import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
        <div className="p-6">
            <h1 className="text-2xl font-bold">Login</h1>
            {error && <p className="text-red-500 text-xl">{error}</p>}

            <div className="mt-4 flex items-center">
                <div className="border-b w-full"></div>

                <div className="border-b w-full"></div>
            </div>
            <button
                className="mt-4 w-full bg-red-400 text-white px-4 py-2 rounded flex justify-center items-center"
                onClick={handleGoogleSignIn}
            >
                <img
                    src="/google-icon.svg"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                />
                Sign in With Google
            </button>
        </div>
    );
};

export default Login;
