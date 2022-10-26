
import Image from "next/image";
import React from "react";
import aboutImg from '../public/assets/portrait.jpg'

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="w-[70%] h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
                    <Image 
                        className="rounded-full"
                        src={aboutImg}
                        alt="/"
                        width = {500}
                        height = {500}
                    />
                </div>
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#E6AA68]">About me?</p>
                    <h2 className="py-4">David Dam</h2>
                    <p className="py-2 text-gray-600">I like to build things and solve problems as that is what I wake up to everyday which has led me into coding as I want to learn something new and bring something to the table. I believe things that are made simple and easy yet solid and robust are to me the best way to go and I am driven by making to all work. </p>
                    <p className="py-2 text-gray-600">On my time off, I am either still coding at my local cafe and/or doing archery down at my local range. To know more about me just scroll further into my life =].</p>
                    <p className="py-2 text-gray-600"></p>
                </div>
            </div>
        </div>
    )
}

export default About