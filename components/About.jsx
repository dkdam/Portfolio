
import Image from "next/image";
import React from "react";
import aboutImg from '../public/assets/index.png'

const About = () => {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="w-[70%] h-auto m-auto shadow-xl shadow-gray-400 rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image 
                        className="rounded-full"
                        src={aboutImg}
                        alt="/"
                        width = {250}
                        height = {330}
                    />
                </div>
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#E6AA68]">About me?</p>
                    <h2 className="py-4"> Im David</h2>
                    <p className="py-2 text-gray-600">Your super friendly developer.</p>
                    <p className="py-2 text-gray-600">With a high customer service background. I like to build, create and solve things which has led me into coding as I want to learn something new and bring something to the table. I’m highly adaptable who is attentive and precise as once I choose my path I stick to it.</p>
                    <p className="py-2 text-gray-600">To know more about me just scroll further into my life =].</p>
                </div>
            </div>
        </div>
    )
}

export default About