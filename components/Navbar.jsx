import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu }  from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState, useEffect } from "react";
import logo from '../public/assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false) 
    const [shadow, setShadow] = useState(false)
    const [theme,setTheme] = useState("light")
    const [mode,setMode] = useState("Light")

    const handleNav = () => {
        setNav(!nav)
    }

    const handleLinkedin = () => {
        window.open("http://www.linkedin.com/in/davidkdam");
    };

    const handleGithub = () => {
        window.open("http://www.github.com/dkdam");
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    },[])

    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark")
        setMode('Light')
        } else {
        document.documentElement.classList.remove("dark")
        setMode('Dark')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className={ shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-gradient-to-r from-[#fff8f36e] to-[#fff8f3] ease-in duration-500 dark:bg-gradient-to-r from-[#fff8f3] to-[#fff8f36e] text-gray-800" : "fixed w-full h-20"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <div className="relative top-3">
                <Link href="/">
                    <Image 
                    className="cursor-pointer dark:bg-[#ecf0f3] rounded-full"
                    src={logo} 
                    alt="/" 
                    width="70" 
                    height="70"/>
                </Link>

                <label class="relative inline-flex items-center mb-5 cursor-pointer bottom-6 left-5">
                    <input type="checkbox" value="" className="sr-only peer" onClick={handleThemeSwitch}/>
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#E6AA68] dark:peer-focus:ring-[#E6AA68] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#e6a96879]"></div>
                    <span class={shadow ? "ml-3 text-sm font-medium text-[#1f2937]" : "ml-3 text-sm font-medium text-[#1f2937] dark:text-[#ecf0f3]"}>{mode} Mode</span>
                </label>

                </div>

                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-10 text-sm uppercase hover:border-b">Skill</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    

                    <div onClick={ handleNav } className="md:hidden">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
                <div 
                className={
                    nav 
                        ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#1f2937] dark:text-[#ecf0f3] p-10 ease-in duration-500" 
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-500" 
                    }>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image 
                            className="bg-[#ecf0f3] rounded-full"
                            src={logo} 
                            width="70" 
                            height="70" 
                            alt="/" 
                            />
                            <div onClick={ handleNav } className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Check me out</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#E6AA68]">Connect me</p>
                            <div className="flex items-center justify-around my-4 w-full sm:w-[80%]">
                                <div onClick={handleLinkedin} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaLinkedinIn />
                                </div>
                                <div onClick={handleGithub} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                <FaGithub />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar