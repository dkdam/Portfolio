import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {

    const handleLinkedin = () => {
        window.open("http://www.linkedin.com/in/davidkdam");
    };

    const handleGithub = () => {
        window.open("http://www.github.com/dkdam");
    };

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#E6AA68]'>Contact</p>
                <h2 className='py-4'>Check me out</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full rounded-xl text-center'>
                            <div>
                                {/* <img className='rounded-xl hover:scale-105 ease-in duration-300' src="" alt="" srcset="" /> */}
                            </div>
                            <div>
                                <h2>David Dam</h2>
                                <p>via..</p>
                                <p className='py-4'> Contact me via.</p>
                                {/* <br />
                                <Link href="http://www.linkedin.com/in/davidkdam">
                                    <a target="_blank" className="text-xl hover:text-[#E6AA68]">LinkedIn</a>
                                </Link>
                                <br />
                                <Link href="http://www.github.com/dkdam">
                                <a target="_blank" className="text-xl hover:text-[#E6AA68]"> GitHub</a>
                                </Link>
                                <p className="mt-3">or just email me on:</p>
                                <p className="text-xl">dkdam1302@gmail.com</p> */}
                            </div>
                            <div className='flex items-center justify-around py-4'>
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
                            <p className="mt-3">or just email me on:</p>
                            <p className="text-xl">dkdam1302@gmail.com</p>
                        </div>
                    </div>

                    {/* right */}
                    {/* <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>

                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray 300' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray 300' type="text" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray 300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray 300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-700 mt-4'>Send</button>
                            </form>

                        </div>
                    </div> */}
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"'>
                            <HiOutlineChevronDoubleUp className='text-[#E6AA68]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact