import React from "react";
import { useParams, Link } from "react-router-dom";

const PostDetail = ({ posts }) => {
    const { id } = useParams();
    console.log(id);
    const post = posts.find((p) => p.id === id);
    if (!post) return <p className="p-6 text-red-500">Post not found!</p>;
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <p className="text-gray-600">{post.date}</p>
            <p className="mt-4">{post.content}</p>
            <Link
                to="/"
                className="mt-4 inline-block text-blue-500 hover:underline"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default PostDetail;
