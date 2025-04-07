import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import Firebase Firestore
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import CreatePost from "./components/CreatePost";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "posts"));
            setPosts(
                querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        title: data.title,
                        content: data.content,
                        date: data.date ? data.date : "Unknown Date",
                        author: data.author ? data.author : "Unknown Author",
                        imgURL: data.imgURL ? data.imgURL : null,
                        userId: data.userId,
                    };
                }),
            );
        };

        fetchPosts();
    }, []);

    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home posts={posts} />} />
                    <Route
                        path="/post/:id"
                        element={
                            <PostDetail posts={posts} setPosts={setPosts} />
                        }
                    />
                    <Route
                        path="/create"
                        element={<CreatePost setPosts={setPosts} />}
                    />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
