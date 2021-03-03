import React, { useEffect , useState } from 'react';
import sanityClient from '../client.js';

function Skills() {
    const [skillData , setSkillData] =useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "skill"]{
            title,
            skillType
        }`).then((data) => setSkillData(data))
        .catch(console.error);
    }, []);
    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl pt-36 lg:pt-16 flex justify-center cursive">My Skills</h1>
                <h2 className="text-l text-gray-600 flex justify-center mb-12">Welcome to my skills page!</h2>
                <section className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {skillData && skillData.map((skill, index) => (
                    <article className="relative rounded-lg shadow hover:shadow-2xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold fontfamily mb-2 hover:text-red-700" >{skill.title}</h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <p className="my-6 font-bold text-lg text-gray-700 leading-realexed" >{skill.skillType}</p>                           
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}

export default Skills
