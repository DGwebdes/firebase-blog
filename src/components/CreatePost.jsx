import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firebase Firestore
import { useAuth } from "../context/AuthContext";

function CreatePost({ setPosts }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) navigate("/login");
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            content,
            date: new Date().toISOString().split("T")[0],
            author: user?.displayName,
            imgURL: user?.photoURL,
            userId: user.uid,
        };
        const docRef = await addDoc(collection(db, "posts"), newPost);
        setPosts((prev) => [{ id: docRef.id, ...newPost }, ...prev]);
        setTitle("");
        setContent("");
        navigate("/");
    };

    return (
        <div className="py-4 px-10 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300">
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    className="w-full p-3 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    required
                />
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition-all"
                >
                    Add Post
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
