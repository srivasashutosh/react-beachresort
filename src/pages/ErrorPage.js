import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export default function () {
  return (
    <div>
      <Hero>
      <Banner title="404" subtitle="No rooms found">
            <Link to="/rooms" className="btn-primary">
                Our Rooms
            </Link>
          </Banner>
      </Hero>
    </div>
  )
}
