import React from 'react';
import {MdNightlightRound, MdSunny} from 'react-icons/md';

const Header = ({darkMode, setDarkMode}) => {


  return (
    <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-yellow-500'>
        <nav className='flex justify-between items-center p-5'>
              <h1 className='text-lg font-signature text-transparent bg-clip-text bg-gradient-to-tr from-cyan-600 to-blue-800 duration-100 hover:scale-110 ml-2'>Portfolio</h1>
              
            <div onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode ? (
                    <MdSunny className='text-xl cursor-pointer duration-100 hover:scale-110' />
                    ) : (
                    <MdNightlightRound className='text-xl cursor-pointer duration-100 hover:scale-110' />
                    )}
            </div>
        </nav>
    </header>
  );
};

export default Header;