import React from "react";
import Layout from "./Layout";
import PixelCard from "../components/ui/PixelCard";

const Home = () => {
    return (
        <Layout>
            <div className="h-[75dvh] md:h-[80dvh] flex justify-center items-center flex-col">
                <h1 className="text-3xl font-bold mb-4">
                    This is a Blog, apparently
                </h1>
                <PixelCard variant="pink">
                    <img src="/potion.png" className="absolute w-50" />
                </PixelCard>
            </div>
        </Layout>
    );
};

export default Home;
