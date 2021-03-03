import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className=" fixed nav bg-red-600">
            <div className="container mx-auto flex sm:justify-between ">
                <nav>
                    <NavLink to='/' exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive trecking-widest">
                        Home
                    </NavLink>
                    <NavLink to='/skills' activeClassName="text-red-100 bg-red-700" className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        Skills
                    </NavLink>
                    <NavLink to='/project' activeClassName="text-red-100 bg-red-700" className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        Projects
                    </NavLink>
                    <NavLink to='/about' activeClassName="text-red-100 bg-red-700" className="inline-flex items-center font-bold py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ">
                        About Me!
                    </NavLink>
                </nav>
                {/* <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/sourabh-jain-55a1b0140/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}} />
                    <SocialIcon url="https://github.com/sourabhjain9887" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}} />
                    <SocialIcon url="https://twitter.com/Souravjain988" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}} />
                    <div className="block">
                    <h3>abc</h3>
                    </div>
                </div> */}
                <section className="  grid grid-cols-2 gap-0 ">
                    <div className="inline-flex py-2 my-6">
                        <SocialIcon url="https://www.linkedin.com/in/sourabh-jain-55a1b0140/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}} />
                        <SocialIcon url="https://github.com/sourabhjain9887" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}} />
                        <SocialIcon url="https://twitter.com/Souravjain988" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35 , width: 35}} />
                        
                    </div>
                    <div className=" py-2 my-5 pt-12 lg:pt-0 text-red-100 bg-red-700 rounded shadow fontfamily hover:shadow-2xl">
                        <h3 >8769372918</h3>
                        <h3>souravjain9876@gmail.com</h3>
                    </div>
                </section>
            </div>
        </header>
    )
}

