import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import letrIMG from '../public/assets/projects/letr.png'
import geowhereIMG from '../public/assets/projects/geowhere.png'
import archerydiaryIMG from '../public/assets/projects/archerydiary.png'
import tictactoeIMG from '../public/assets/projects/tictactoe.png'
import Projectitem from '../components/Projectitem'

const Projects = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#E6AA68]'>Projects</p>
                <h2 className='py-4'>My Projects so far</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                <Projectitem 
                    title='Letr' 
                    backgroundImg={letrIMG} 
                    stack="ReactJS + SCSS + Firebase"
                    projectUrl='https://storied-seahorse-83953f.netlify.app/' 
                />


                <Projectitem 
                    title='Geowhere' 
                    backgroundImg={geowhereIMG} 
                    stack="ReactJS + TailwindCSS + Supabase"
                    projectUrl='https://geowhere.netlify.app/' 
                />


                <Projectitem 
                    title='Archery Diary' 
                    backgroundImg={archerydiaryIMG} 
                    stack="Ruby On Rails"
                    projectUrl='https://floating-inlet-90734.herokuapp.com/' 
                />


                <Projectitem 
                    title='Tic Tac Toe' 
                    backgroundImg={tictactoeIMG} 
                    stack="HTML + CSS + Javascript"
                    projectUrl='https://dkdam.github.io/Tic-Tac-Toe/' 
                />

                </div>
            </div>
        </div>
    )
}

export default Projects