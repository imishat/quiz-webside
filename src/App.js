
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Quizs from './components/Quizs/Quizs';
import QuizDittel from './components/QuizDittel/QuizDittel';
import Reachat from './components/reachat/Reachat';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router=createBrowserRouter([
   {path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),

        element:<Quizs></Quizs>
      },
      {
        path:'/Quiz/:id',

        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element:<QuizDittel></QuizDittel>
      },
      {
        path:'chat',
      
        element:<Reachat></Reachat>,
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }
    ]
  }
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
