import React from 'react';

const Questions = ({questions}) => {
    const {id,options,question,correctAnswer}=questions;

    console.log(questions)
    const right=(option)=>{
        console.log(correctAnswer)
        if(option==correctAnswer){
            alert('right')
        }
        else{
            alert('worng answer')
        }

    }
   
    return (
        <div>
            <h1>{question}</h1>
            {options.map(option=><button onClick={()=>right(option)}>{option}</button>)}
 
        </div>
    );
};

export default Questions;
