import React from 'react';
import color from '../assets/projects/color.jpg';
import reactlogo from '../assets/projects/reactlogo.jpg';
import fpsgame from '../assets/projects/fpsgame.jpg';
import web from '../assets/projects/web.jpg';

const Projects = () => {
  const project = [
      {
        id: 1,
        image: color,
        title: 'Color Website',
        github: 'https://github.com/daviddsethh/color-website',
        demo: 'https://colorwebsitepractice.netlify.app',
    },
    {
        id: 2,
        image: reactlogo,
        title: 'react-portfolio practice',
        github: 'https://github.com/daviddsethh/react-portfolio',
        demo: 'https://reactportfoliopractice.netlify.app',
    },
    {  
        id: 3,
        image: fpsgame,
        title: 'FPS Camera Game',
        github: 'https://github.com/daviddsethh/FPS-Maze-Game',
        demo: 'https://fpsmazegame.netlify.app',
    },
    {
        id: 4,
        image: web,
        title: 'Web jQuery',
        github: 'https://github.com/daviddsethh/entry-web',
        demo: 'https://vidjagamewebsitepractice.netlify.app',
    },  
  ];

  return (
    <div name='projects' className='w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className="pb-8">
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-rose-500'>projects</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          project.map(({id, image, title, github, demo}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={image} alt={title} className="rounded-md duration-200 hover:scale-105" />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={demo} target='_blank' rel='noopener noreferrer'>Demo</a></button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={github} target='_blank' rel='noopener noreferrer'>Code</a></button>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Projects;