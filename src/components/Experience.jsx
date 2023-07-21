import React from 'react';
import Html from '../assets/Html.png';
import Css from '../assets/Css.png';
import javascript from '../assets/JavaScript.png';
import react from '../assets/React.png';
import firebase from '../assets/Firebase.png';
import tailwind from '../assets/tailwind.png';
import mysql from '../assets/MySql.png';
import github from '../assets/GitHub.png';
import java from '../assets/Java.png';

export default function Experience() {

  const techs = [
    {
      id: 1,
      src: Html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: Css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'Reactjs',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-yellow-600'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-sky-400'
    },
    {
      id: 7,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-sky-800'
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-500'
    },
    {
      id: 9,
      src: java,
      title: 'Java',
      style: 'shadow-orange-500'
    },
  ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-auto'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the Technologies I've worked with</p>
        </div>

        <div className={`w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0`}>
          {
            techs.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt={title} className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
