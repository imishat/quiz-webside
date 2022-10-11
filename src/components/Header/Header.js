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
                style={({ isActive }) =>
                isActive ? {color:'black'} : {color:'white'}
              }
            to="/"
            
          >
            Quizs
          </NavLink>
                
                <NavLink
                style={({ isActive }) =>
                isActive ? {color:'black'} : {color:'white'}
              }
            to="chat"
            
          >
            Reachat
          </NavLink>
          
                
                <NavLink
                style={({ isActive }) =>
                isActive ? {color:'black'} : {color:'white'}
              }
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