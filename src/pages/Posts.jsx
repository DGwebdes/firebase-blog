import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function Posts({ posts }) {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">The Yapping!</h1>
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
                        <p>
                            <i>
                                <small>By: {post.author}</small>
                            </i>
                        </p>
                    </div>
                    <div className="md:min-w-[100px] max-w-[65px] h-fit p-2">
                        <img
                            src={post.imgURL}
                            style={{
                                objectFit: "cover",
                                borderRadius: 360,
                            }}
                            alt="post-creator-image"
                        />
                    </div>
                </div>
            ))}
        </Layout>
    );
}

export default Posts;
