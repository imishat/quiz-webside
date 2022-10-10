import React from 'react';
import { useLoaderData } from 'react-router-dom';
import'./quizDittel.css'

const QuizDittel = () => {
    const detele=useLoaderData()
    const questions=detele.data.questions
    //console.log(
        


    console.log(questions)

        
    return (
        <div>
           <h1>hello</h1> 
        </div>
    );
};

export default QuizDittel;
