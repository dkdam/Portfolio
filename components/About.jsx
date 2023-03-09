
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
                    <p className="py-2 text-gray-600">I am a highly motivated and skilled software engineer graduate with a background in customer service, sales, and analytics. With experience in the casino and sales industries, I possess a passion for building and solving things. With my curiosity and collaborative mindset, I tend to tinker into problems to find the best possible outcomes. I have spent over 500 hours coding through a Software Engineering immersive course at General Assembly, where I developed my skills in this field. I am detail-oriented and possess exceptional communication and computer skills, making me an effective team player. In my free time, I enjoy practicing archery and doing side projects. </p>
                </div>
            </div>
        </div>
    )
}

export default About