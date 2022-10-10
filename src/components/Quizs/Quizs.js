import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const Quizs=useLoaderData()
    const data=Quizs.data
  // console.log(data)
   
    return (
        <div>
            <h1>hi</h1>
            {
                data.map(quiz=><Quiz  quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizs;