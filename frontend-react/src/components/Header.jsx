import React from 'react'
import Buttons from "./Buttons"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <> 
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to='/'>Stock Prediction Portal</Link>
            <div>
               <Buttons class='btn-outline-info' text='Login' url='/login'/>
                &nbsp;
                &nbsp;
                <Buttons text='Register' class='btn-info' url='/register' />
            </div>
        </nav>
    
    </>
  )
}

export default Header