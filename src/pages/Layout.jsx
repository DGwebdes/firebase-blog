import React from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const Layout = ({ children }) => {
    return (
        <div className="min-h-dvh bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 md:px-30 flex flex-col justify-between">
            <nav className="py-4 px-10 bg-gray-200 dark:bg-gray-900 text-black dark:text-white flex justify-between items-center transition-colors duration-300">
                <Navbar />
            </nav>
            <main className="px-10 py-4 flex-1">{children}</main>
            <footer className="py-4 px-10 bg-gray-200 dark:bg-gray-900 text-black dark:text-white flex justify-between transition-colors duration-300">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
