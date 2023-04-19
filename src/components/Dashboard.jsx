import React from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import Section from './Section'

export default function Dashboard() {
  return (
    <div className="flex bg-gray-200 font-Inter">
       <div className="bg-[#1D1042]  h-[60rem]">
          <SideBar/>
      </div>
      <div className="">
          <NavBar/>
          <Section/>
          </div>
    </div>
  )
}
