import { Search, Notifications, ArrowDropDown } from '@mui/icons-material'
import React from 'react'
import "./navbar.scss"

const navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <span>Home Page</span>
            <span>Series</span>
            <span>Movies</span>
            <span>Trending and Popular</span>
            <span>My fav</span>
            </div>
            
            <div className="right">
               <Search className='icon' /> 
               <span>KID</span>
               <Notifications className='icon' />
               <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />
                <ArrowDropDown  className='icon'>
                
                <ul>
                    <li>
                        Settings
                    </li>
                </ul>
                </ArrowDropDown>
            </div>

        </div>
    </div>
  )
}

export default navbar;