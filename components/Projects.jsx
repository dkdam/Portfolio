import React from 'react'
import letrIMG from '../public/assets/projects/letr.png'
import geowhereIMG from '../public/assets/projects/geowhere.png'
import archerydiaryIMG from '../public/assets/projects/archerydiary.png'
import tictactoeIMG from '../public/assets/projects/tictactoe.png'
import Projectitem from '../components/Projectitem'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#E6AA68]'>Projects</p>
                <h2 className='py-4'>My Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                <Projectitem 
                    title='Letr' 
                    backgroundImg={letrIMG} 
                    info="An instant messaging app that can send/receive messages along with images. Also mobile friendly."
                    stack="ReactJS + SCSS + Firebase"
                    projectUrl='https://storied-seahorse-83953f.netlify.app/' 
                    gitUrl="https://github.com/dkdam/Letr"
                />

                <Projectitem 
                    title='Geowhere' 
                    backgroundImg={geowhereIMG} 
                    info="A game that was inspired by the popular game of Geogeussr. Your place in google street view map anywhere in the world and you have to guess where you are."
                    stack="ReactJS + TailwindCSS + Supabase"
                    projectUrl='https://geowhere.netlify.app/' 
                    gitUrl="https://github.com/dkdam/project2-client"
                />

                <Projectitem 
                    title='Archery Diary' 
                    backgroundImg={archerydiaryIMG} 
                    info="An app used to record your bow & arrow set-up and post up all your sessions and experience according to the equipment and specs you used for it."
                    stack="Ruby On Rails"
                    projectUrl='https://archer-session-diaries.fly.dev/' 
                    gitUrl="https://github.com/dkdam/Archer-Session-Diaries"
                />

                <Projectitem 
                    title='Tic Tac Toe' 
                    backgroundImg={tictactoeIMG} 
                    info="One of my first project demonstrating what I've learnt so far with front-end development with the skills of HTML, CSS & JavaScript."
                    stack="HTML + CSS + Javascript"
                    projectUrl='https://dkdam.github.io/Tic-Tac-Toe/' 
                    gitUrl="https://github.com/dkdam/Tic-Tac-Toe"
                />

                </div>
            </div>
        </div>
    )
}

export default Projects