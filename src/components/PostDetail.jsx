import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const PostDetail = ({ posts, setPosts }) => {
    const { id } = useParams();
    const { user } = useAuth();
    const [userOwn, setUserOwn] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const post = posts.find((p) => p.id === id);
    useEffect(() => {
        if (!post || !user) return;
        const allowEdit = () => {
            setTitle(post.title);
            setContent(post.content);
            try {
                if (user.uid === post.userId) {
                    setUserOwn(true);
                }
            } catch (error) {
                console.log("Error occurred: ", error);
            }
        };

        allowEdit();
    }, [post, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedPost = {
            ...post,
            title,
            content,
            date: new Date().toISOString().split("T")[0],
        };

        try {
            const postRef = doc(db, "posts", post.id);
            await updateDoc(postRef, {
                title: updatedPost.title,
                content: updatedPost.content,
                date: updatedPost.date,
            });

            setPosts((prevPosts) =>
                prevPosts.map((p) => (p.id === post.id ? updatedPost : p)),
            );
            navigate("/");
        } catch (error) {
            console.error("Error updating post: ", error);
        }
    };

    if (!post) return <p className="p-6 text-red-500">Post not found!</p>;
    const today = new Date().toISOString().split("T")[0];
    return (
        <div className="py-4 px-10">
            {userOwn ? (
                <div className="flex flex-col gap-4">
                    <h1>Edit</h1>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            value={title}
                            className="p-2"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            className="p-2"
                            disabled
                            value={today}
                        />
                        <textarea
                            name="content"
                            id="content-edited"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        >
                            {/* {post.content} */}
                        </textarea>
                        <input
                            type="text"
                            value={post.author}
                            disabled
                            className="p-2"
                        />
                        <button
                            className="py-2 px-4 border rounded-2xl hover:bg-green-500 w-fit self-center hover:cursor-pointer"
                            onClick={handleSubmit}
                        >
                            Save Edit
                        </button>
                    </form>
                    <Link
                        to="/"
                        className="mt-4 inline-block text-blue-500 hover:underline"
                    >
                        Back to Home
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                    <p className="text-gray-600">{post.date}</p>
                    <p className="mt-4">{post.content}</p>
                    <p className="text-sm text-gray-600">
                        Author: {post.author}
                    </p>
                    <Link
                        to="/"
                        className="mt-4 inline-block text-blue-500 hover:underline"
                    >
                        Back to Home
                    </Link>
                </div>
            )}
        </div>
    );
};

export default PostDetail;
