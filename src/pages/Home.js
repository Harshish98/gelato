import React from 'react'
import { Header } from '../components/header/Header'
import { HeroSection } from '../components/hero/HeroSection'
import { WhyChoose } from '../components/whyChoose/WhyChoose'
import { MidSection } from '../components/midSection/MidSection'
import { Footer } from '../components/footer/Footer'

export const Home = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <WhyChoose/>
    <MidSection/>
    <Footer/>
    </>
  )
}
