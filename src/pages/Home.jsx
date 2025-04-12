import React from "react";
import Layout from "./Layout";

const Home = () => {
    return (
        <Layout>
            <div className="h-[75dvh] md:h-[80dvh] flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold mb-4">
                    What were you saying...
                </h1>
                <canvas className="border-2 border-red-400"></canvas>
            </div>
        </Layout>
    );
};

export default Home;
