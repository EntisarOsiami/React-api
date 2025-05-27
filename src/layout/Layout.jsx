import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../compoenents/Navbar'
import Footer from '../compoenents/Footer'

function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
    <Navbar />
    <main className='flex-grow'>
      <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default Layout