import React from 'react';

const Questions = ({questions}) => {
    const {id,options,question,correctAnswer}=questions;

    console.log(questions)
    const right=(correctAnswer)=>{
        console.log(id)
        if(correctAnswer){
            alert('right')
        }
        else{
            alert('worng answer')
        }

    }
   
    return (
        <div>
            <h1>{question}</h1>
            {options.map(options=><button onClick={()=>right(correctAnswer)}>{options}</button>)}
 
        </div>
    );
};

export default Questions;
