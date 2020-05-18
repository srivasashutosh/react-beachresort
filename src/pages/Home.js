import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'
export default function Home() {
  return (
    <>
      <Hero>
          <Banner title="Luxurious Rooms" subtitle="Delux rooms starting at Rs 5000">
            <Link to="/rooms" className="btn-primary">
                Our Rooms
            </Link>
          </Banner>
      </Hero>
      <Services></Services>
      <FeaturedRoom/>
    </>
  )
}
