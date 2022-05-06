import type { NextPage } from 'next'
import Head from 'next/head'
import OurGoalsSection from '../Sections/OurGoalsSection'
import PartnersSection from '../Sections/PartnersSection'
import VentComplaintsSection from '../Sections/VentComplaintsSection'
import styles from '../styles/Home.module.css'
import Navbar from "../Components/NavBar" 
import PostaComplaint from "../Components/PostaComplaint" 
import Complaints from "../Components/Complaints" 
import Testimonials from '../Components/Testimonials'
import Numbers from '../Components/Numbers'
import Footer from '../Sections/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ecommerce Complaint</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Numbers />
    </div>
  )
}

export default Home
