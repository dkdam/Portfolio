import Image from 'next/image'
import React from 'react'

export const Skills = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#E6AA68]'>Skills</p>
                <h2 className='py-4'>My Tech Stacks</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src="/../public/assets/skills/HTML.png"
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
                                    src="/../public/assets/skills/CSS.png"
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
                                    src="/../public/assets/skills/JavaScript.jpeg"
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
                                    src="/../public/assets/skills/React.png"
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
                                    src="/../public/assets/skills/Nextjs.png"
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
                                    src="/../public/assets/skills/Tailwind.png"
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
                                    src="/../public/assets/skills/Supabase.png"
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
                                    src="/../public/assets/skills/Firebase.png"
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