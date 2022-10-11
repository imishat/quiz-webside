import React from 'react';
import { Link } from 'react-router-dom';
import'./Quiz.css'

const Quiz = ({ quiz}) => {
   // console.log(quiz)
    const{id,name,logo,total}=quiz;
    return (
        <section className="container">
            
        <div className='items'>
            <img src={logo} alt="" />
            <div className='item-info'>
                <h3>{name}</h3>
            
                <button>
                <Link to={`/Quiz/${id}`}>Quiz</Link>
                </button>
            </div>
            </div>

    </section>
    );
};

export default Quiz;