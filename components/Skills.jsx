import Image from 'next/image'
import React from 'react'
import html from "../public/assets/skills/HTML.png"
import css from "../public/assets/skills/CSS.png"
import javascript from "../public/assets/skills/JavaScript.jpeg"
import reactjs from "../public/assets/skills/React.png"
import nextjs from "../public/assets/skills/Nextjs.png"
import rubyonrails from "../public/assets/skills/Rubyonrails.png"
import tailwind from "../public/assets/skills/Tailwind.png"
import supabase from "../public/assets/skills/Supabase.png"
import firebase from "../public/assets/skills/Firebase.png"

export const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#E6AA68]'>Skills</p>
                <h2 className='py-4'>My Tech Stacks</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={html}
                                    alt="/"
                                    width={74}
                                    height={74}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={css}
                                    alt="/"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={javascript}
                                    alt="/"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={reactjs}
                                    alt="/"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React JS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={nextjs}
                                    alt="/"
                                    width={94}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next JS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={rubyonrails}
                                    alt="/"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Ruby On Rails</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={tailwind}
                                    alt="/"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={supabase}
                                    alt="/"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Supabase</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={firebase}
                                    alt="/"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills