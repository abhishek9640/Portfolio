import React from 'react';
import Library from '../assets/library.png';
import Linkdin from '../assets/linkdin.png';
import GannaClone from '../assets/ganna-clone.png';

export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      src: Library,
      name: 'Granth (VGI Library)',
      link: 'https://github.com/abhishek9640/GRANTH-VGI_Library'
    },
    {
      id: 2,
      src: Linkdin,
      name: 'LinkedIn Clone',
      link: 'https://github.com/abhishek9640/Linkdin-Clone'
    },
    {
      id: 3,
      src: GannaClone,
      name: 'Ganna Clone',
      link: 'https://github.com/abhishek9640/Gaana-Clone'
    },
  ];

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({ id, src, link, name }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg m-2'>
              <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 p-5' />
              <div className='flex items-center justify-center'>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <button className=' px-6 py-3 m-4 duration-200 hover:scale-105'>{name}</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
