import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import'./quizDittel.css'

const QuizDittel = () => {
    const data=useLoaderData();

    const questions=data.data.questions;
    //console.log(
        


    console.log(questions)

        
    return (
        <div>
         {
           questions.map(questions => <Questions questions ={questions} key={questions.id} ></Questions>)  
         }
        </div>
    );
};

export default QuizDittel;
