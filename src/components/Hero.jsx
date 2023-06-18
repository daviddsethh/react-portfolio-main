import React from 'react';
import {FaGithub, FaLinkedin, FaArrowDown} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const Hero = () => {

  const SOCIAL = [
    {
      id: 1,
      link: 'https://github.com/daviddsethh',
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: 'https://linkedin.com/in/seth-holloway-5b9695275',
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: 'mailto:davidsethh@yahoo.com',
      icon: <HiOutlineMail />,
    },
  ];

  window.addEventListener('scroll', function() {
    const downArrow = this.document.querySelector('.down-arrow');

    if (this.scrollY >= 90) downArrow.classList.add('hide-down-arrow');
    else downArrow.classList.remove('hide-down-arrow');
  });

  return (
    <section className='min-h-screen flex flex-col justify-start items-center p-4 text-center'>
      <h3 className='py-2 text-2xl text-rose-700'>frontend developer</h3>
      <p className='max-w-xl font-light text-gray-500'><section className='animate-pulse text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-green-600 text-xl'>2 years</section> of experience.
      languages: html, css, javascript, python, c#, c++, php.
      <br />
      frameworks/libraries: react, jquery, node.js, nextjs, tailwind.
      </p>

      {/* social icons/contact */}

      <div className='flex justify-evenly py-6 lg:py-16 text-2xl w-full md:w-1/6'>
        {SOCIAL.map(({id, link, icon}) => (
          <a href={link} key={id} target='_blank' rel='noopener noreferrer' className='cursor-pointer duration-300 hover:text-blue-600'>{icon}</a>
        ))}
      </div>

        {/* resume */}

        <div className='cursor-pointer duration-200 hover:scale-110'>
          <a href='/Resume.pdf' download={true} className='flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to bg-cyan-600 text-white py-1 rounded-md'>resume</a>
        </div>

        {/* arrow down animation */}

        <div className='mt-8 down-arrow'>
          <FaArrowDown className='text-gray-500 text-xl animate-bounce' />
        </div>
    </section>
  );
};

export default Hero;