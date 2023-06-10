import React from 'react'
import Navbar from '../../components/NavBar/NavBar'
import HomePageComponents from '../../components/HomePageComponents/HomePageComponents'

function HomePage() {
  return (
    <div className='w-full overflow-y-auto bg-[#4a378e] h-screen'>
      <Navbar/>
      <HomePageComponents/>
      </div>
  )
}

export default HomePage