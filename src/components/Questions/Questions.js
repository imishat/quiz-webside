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
    // chake right or worng ans funtion
    function clike(option) {
        if (option === correctAnswer) {
        alert('Right Answer')


        }
        else {
           alert('worng Answer')
        }

    }
    {/*show the answer in icon funtion */}
    const answer=(correctAnswer)=>{
    
        alert(correctAnswer)

    }

    



       
   
    return (
        <div>
             <div className='Quiz'>
            <div className='content'>
                <div className='title'>
                    {/* removed o tag form api and get question value*/}
                    {parse(`<h1>${question

                    }</>`)}
                    {/*show answer in icon  */}
                    <FontAwesomeIcon onClick={()=>answer(correctAnswer)} className='icon' icon={faEyeSlash} />
                </div>
                {/*get optino value  */}
                {
                    options.map(option => <button className='quizans' onClick={() => clike(option)}>{option}</button>)
                }
                
            </div>
            <ToastContainer></ToastContainer>

        </div>

          
 
        </div>
    );
};

export default Questions;
