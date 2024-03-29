import Main from '../components/Main'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {


  return (
    <div className='bg-[#ecf0f3] dark:bg-[#1f2937] text-[#1f2937] dark:text-[#ecf0f3] ease-in duration-300'>
      <Head>
        <title>David Dam | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
