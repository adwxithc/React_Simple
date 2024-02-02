import React from 'react'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'


function  Header(props){
  
  
        
        const {
            onMenuSelect
        }=props
        const history=useNavigate()

        return(
        <div className='app-header'>
            <div className='app-nav'>
            <span className='brand' >
                GAME WORLD
            </span>
            <span className='option' >
                <Link to='/'>HOME</Link>
            </span>
            
            <span className='option' > 
               <Link to='/play' > PLAY</Link> 
            </span>

            <span className='option' onClick={()=>{
                history('/play')
            }}>
                TRYOUT
            </span>
            <span className='option' onClick={()=>{
                onMenuSelect('pre-book')
            }}>
                PRE-BOOK
            </span>
            </div>
        </div>
        )
    
}

export default Header