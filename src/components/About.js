import React, { useState , useEffect } from 'react';
import sanityClient from '../client.js';
import aboutImage from '../about-background.jpg';
import profilePic from '../profile-pic.jpg'

function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type== "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data)=> setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if(!author) return <div>Loading...</div>
    return (
        <main className="relative">
            <img src={aboutImage} alt="About Background Image" className="absolute object-cover w-full h-full" />
            <div className="p-40 lg:pt-48 container md:mx-auto  relative">
                <section className="bg-green-700 bg-opacity-70 rounded-lg shadow-2xl pt-20 pl-10 pr-10 md:bg-green-700 md:bg-opacity-70 md:rounded-lg md:shadow-2xl md:flex md:p-20 lg:bg-green-700 lg:bg-opacity-70 lg:rounded-lg lg:shadow-2xl lg:flex lg:p-20">
                    <img src={profilePic} alt="profile pic" className=" rounded w-25 h-25 md:w-32 md:h-32 lg:w-64 lg:h-64 mr-8"/>
                    <div className="text-lg flex flex-col justify-top pt-7">
                        <h1 className="cursive sm:text-xl md:text-4xl text-green-300 mb-4">
                            Hey there. I'm{" "}
                            <span className="sm:text-3xl md:text-5xl text-green-100 ">{author.name}</span>
                        </h1>
                        <div className="prose md:prose lg:prose-xl text-white">
                        As an individual, my aim is to build software/applications that make it easy for people to access information on the go and make their life more convenient. I love Problem Solving and unraveling the mysteries behind the magic of computer programs.
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About