import {useState} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';


function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && 'dark'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
        <Hero />
        <Experience />
        <Portfolio />
      </main>
    </div>
  );
};

export default App;
