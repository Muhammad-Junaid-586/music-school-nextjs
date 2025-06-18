import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Instructors from '@/components/Instructors'
import TestimonialCards from '@/components/TestimonialCards'
import UpcomingWeb from '@/components/UpcomingWeb'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

export default function page() {
  return (
    <div>
      <main className=' min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] '>
        {/* <h1 className='text-3xl text-center'>Hello World</h1> */}
        <HeroSection />
        <FeaturedCourses />
        <WhyChooseUs />
        <TestimonialCards />
        <UpcomingWeb />
        <Instructors />
        <Footer />
      </main>
    </div>
  )
}
