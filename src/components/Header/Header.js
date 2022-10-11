import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/shop">Home </Link>
                <Link to="chat">Topics</Link>
                <Link to="/shop">Blog</Link>
                <Link to='/'>Quizs</Link>

            </div>
        </nav>
    </div>
         
        </div>
    );
        };

export default Header;