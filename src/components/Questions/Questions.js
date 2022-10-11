import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Questions = ({questions}) => {
    const {id,options,question,correctAnswer,name}=questions;
    
       
    

    console.log(questions)
    // chake right or worng ans
    const right=(option)=>{

        console.log(correctAnswer)
        if(option===correctAnswer){
            alert('right')
           
            
        }
        else{
            alert('worng answer')
        }

    }
   
    return (
        <div>
            <h1>{name}</h1>
            <h1> Question :{question}</h1>
            {options.map(option=><button onClick={()=>right(option)}>{option}</button>)}
            <ToastContainer/>
 
        </div>
    );
};

export default Questions;
