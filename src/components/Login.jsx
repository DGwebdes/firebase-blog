import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login, GoogleSignIn } = useAuth();
    const [error, setError] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await login(email, password);
            navigate("/");
        } catch (err) {
            alert("Oops, try again.");
            console.log("Error occurred: ", err);
        }
    };

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
            <form onSubmit={handleLogin} className="mt-4">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    required
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Password"
                    required
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    type="submit"
                >
                    Login
                </button>
            </form>

            <div className="mt-4 flex items-center">
                <div className="border-b w-full"></div>
                <p className="mx-2 text-gray-500">Or</p>
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
