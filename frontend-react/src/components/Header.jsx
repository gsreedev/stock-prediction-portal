import React from 'react'
import Buttons from "./Buttons"
const Header = () => {
  return (
    <> 
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a className='navbar-brand text-light' href=''>Stock Prediction Portal</a>
            <div>
               <Buttons class='btn-outline-info' text='Login'/>
                &nbsp;
                &nbsp;
                <Buttons text='Register' class='btn-info'/>
            </div>
        </nav>
    
    </>
  )
}

export default Header