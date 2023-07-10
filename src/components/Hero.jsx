import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector('.background');
      const scrollY = window.scrollY;

      if (scrollY !== 0) {
        background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`;
      } else {
        background.style.backgroundPosition = '';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero">
      <div><h1 className='hero-h1 text-[#ffaa00] text-left p-10 text-xl'>tugceCerit.</h1></div>
      <div className="background bg-clip-text bg-center bg-cover text-transparent h-screen font-bold flex items-end justify-center overflow-hidden">
        <span className="text-12xl">Hey, I'm Tugce!</span>
      </div>
    </div>
  );
};

export default Hero;

