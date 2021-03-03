import React from 'react';
import image from '../background5.jpg';

function Home() {
    return (
        <main >
            <img src={image} alt="Home Background Image" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-48 lg:pt-80  px-8">
                <h1 className="pt-72 lg:pt-0 text-6xl text-red-500 font-bold cursive leading-none lg:leading-snug lg:text-8xl "> Hello, I'm Sourabh.
                <br />
                <span className="text-2xl lg:text-5xl text-red-600 shadow-2xl  ">(Web Developer, Programmer)</span>
                </h1>
            </section>
            
        </main>
    )
}

export default Home
