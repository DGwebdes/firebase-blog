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
        };
        const docRef = await addDoc(collection(db, "posts"), newPost);
        setPosts((prev) => [{ id: docRef.id, ...newPost }, ...prev]);
        setTitle("");
        setContent("");
        navigate("/");
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Create New Post</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full p-2 border rounded mb-2"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                    className="w-full p-2 border rounded mb-2"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Post
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
