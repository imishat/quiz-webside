import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import'./header.css'




   
  

const Header = () => {
  

    return (
        <div>
          <div>
        <nav className='header'>
            <div className='logo'>
               
                <span>BD Quiz</span>

            </div>
            <div className=''>
                
                
                <NavLink
            to="/"
            
          >
            Quizs
          </NavLink>
                
                <NavLink
            to="chat"
            
          >
            Reachat
          </NavLink>
          
                
                <NavLink
            to="blogs"
            
          >
            Blogs
          </NavLink>

            </div>
        </nav>
    </div>
         
        </div>
    );
        };

export default Header;