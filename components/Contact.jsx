import React from 'react'

const Contact = () => {
    return (
        <div className='w-full lg:h-screen'>
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
                                <h2>Contact me</h2>
                                <p>via..</p>
                                {/* <p className='py-4'> Contact me via.</p> */}
                                <br />
                                <a href="http://www.linkedin.com/in/davidkdam"> LinkedIn</a>
                                <br />
                                <a href="http://www.github.com/dkdam"> GitHub</a>
                                <p>or just email me on:</p>
                                <p>dkdam1302@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                </div>
            </div>
        </div>
    )
}

export default Contact