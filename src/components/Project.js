import React, { useEffect , useState } from 'react';
import sanityClient from '../client.js';


function Project() {
    const [projectData , setProjectData] =useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto ">
                <h1 className="text-4xl flex justify-center cursive pt-36 lg:pt-16">My Projects</h1>
                <h2 className="text-l text-gray-600 flex justify-center mb-12">Welcome to my project page!</h2>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow hover:shadow-2xl bg-white p-16">
                        <h3 className="text-gray-800  text-3xl fontfamily font-bold mb-2 hover:text-red-700"><a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="inline-block font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="inline-block font-bold">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="inline-block font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-realexed">{project.description}</p>
                            <span>
                                <strong className=" font-bold">Tags</strong>:{" "}
                                <strong className="inline-block font-bold bg-green-100 rounded shadow p-1 ">{project.tags}</strong>
                            </span>
                            <br /><br />
                            <a href={project.link} rel="noopener no referrer" target="_blank" className="inline-block text-red-500 text-base shadow-lg font-bold hover:underline hover:text-red-400 ">
                                View The Project{" "}
                                {/* <span role="img" aria-label="right pointer">
                                    
                                </span> */}
                            </a>
                            
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Project
