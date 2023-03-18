import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <Link to = "/"> <img src="/image/imdb1.png" alt="" srcset=""  style = {{width:"120px"}}/></Link>
        <div className='header-list'>
          <li>
          <Link to = "/movies/popular" style = {{textDecoration:"none", color:"white"}}>Popular</Link>
            </li>  

            <li> <Link to = "/movies/top_rated" style = {{textDecoration:"none" , color:"white"}}>Top Rated</Link></li>

            <li> <Link to = "/movies/upcoming" style = {{textDecoration:"none" , color:"white"}}>Upcoming</Link></li>
     
        
        
        </div>
        


    </div>
  )
}

export default Header