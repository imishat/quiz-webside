import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import parse from 'html-react-parser';
import'./qusiti.css'

const Questions = ({questions}) => {
    const {id,options,correctAnswer,question
    }=questions;
    
       
    

    console.log(questions)
    // chake right or worng ans
    function clike(option) {
        if (option === correctAnswer) {
        alert('Right Answer')


        }
        else {
           alert('worng Answer')
        }

    }

    



       
   
    return (
        <div>
             <div className='Quiz'>
            <div className='content'>
                <div className='title'>
                   
                    {parse(`<h1>${question

                    }</>`)}
                   <button > <FontAwesomeIcon className='icon' icon={faEyeSlash} /></button>
                </div>
                {
                    options.map(option => <button className='quizans' onClick={() => clike(option)}>{option}</button>)
                }
                {/* */}
            </div>
            <ToastContainer></ToastContainer>

        </div>

          
 
        </div>
    );
};

export default Questions;
