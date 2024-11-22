import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Main() {
  return (
    <>
    
    <Outlet/>
    
    </>
  )
}
