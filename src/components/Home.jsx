import React from "react";
import { Link } from "react-router-dom";

function Home({ posts }) {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">My Blog</h1>
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="border p-4 mb-4 rounded-lg shadow-md"
                >
                    <Link
                        to={`post/${post.id}`}
                        className="text-xl font-semibold text-blue-500 hover:underline"
                    >
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                    </Link>
                    <p className="text-gray-600">{post.date}</p>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;
