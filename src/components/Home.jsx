import React from "react";
import { Link } from "react-router-dom";

function Home({ posts }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-4">What were you saying...</h1>
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="border p-4 mb-4 rounded-lg shadow-md flex w-full justify-between"
                >
                    <div className="">
                        <Link
                            to={`post/${post.id}`}
                            className="text-xl font-semibold text-blue-500 hover:underline"
                        >
                            <h2 className="text-xl font-semibold">
                                {post.title}
                            </h2>
                        </Link>
                        <p className="text-gray-600">{post.date}</p>
                        <p>{post.content}</p>
                        <p>Author: {post.author}</p>
                    </div>
                    <div className="">
                        <img
                            src={post.imgURL}
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
