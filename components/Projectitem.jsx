
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Projectitem = ({ title, backgroundImg, projectUrl, gitUrl, stack , info}) => {
    return (
        <div>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#E6AA68] to-[#ECE4B7]'>
                <Image 
                className='rounded-xl group-hover:opacity-10'
                    src={backgroundImg}
                    alt=""
                />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>

                    <Link href={projectUrl}>
                        <a target="_blank"><p className=' p-2 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-150 hover:bg-black hover:text-white'>Demo</p></a>
                    </Link>
                    <br />
                    <Link href={gitUrl}>
                        <a target="_blank"><p className=' p-2 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:scale-105 ease-in duration-150 hover:bg-black hover:text-white'>Github</p></a>
                    </Link>
                </div>
            </div>
            <div className='w-[75%] text-center mx-auto'>
                <br />
                <h3 className='text-2xl text-black dark:text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-black dark:text-white text-center'>{info}</p>
                <p className='pb-4 pt-2 text-black dark:text-white text-center'><b>{stack}</b></p>
            </div>

        </div>
    )
}

export default Projectitem