import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {

    const handleLinkedin = () => {
        window.open("http://www.linkedin.com/in/davidkdam");
    };

    const handleGithub = () => {
        window.open("http://www.github.com/dkdam");
    };

    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <h1 className="py-4 text-gray-700">
                        <span className="text-[#E6AA68]">David Dam</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        Software Engineer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        Check out my stuff here or scroll down =D
                    </p>
                    <div className="flex items-center justify-around max-w-[330px] m-auto py-4">
                        <div onClick={handleLinkedin} className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div onClick={handleGithub} className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>
                        {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <BsFillPersonLinesFill />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main