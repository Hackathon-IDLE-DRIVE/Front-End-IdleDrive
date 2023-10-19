import React from 'react'
import { Link } from 'react-router-dom';
import { navbarData } from './navbarData'

export const Navbar = () => {
  return (
    <>
    {navbarData.map((item,index) => {
      return(
          <li key={index}>
              <Link to={item.path}>
                  <span className="navtext">{item.title}</span>
              </Link>
          </li>
      )
  })}
  </>
  )
  
}
