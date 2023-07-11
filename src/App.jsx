import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero.jsx';
import Overview from './components/Overview.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx'
import CustomCursor from './components/CustomCursor.jsx';
import ZoomAnimation from './components/ZoomAnimation.jsx';
import Contact from "./components/Contact.jsx";
import React, { useEffect, useRef, useState } from 'react';
import Skills from "./components/Skills.jsx";
import SocialMedia from "./components/SocialMedia.jsx"

const Navigation = ({ navigationRef }) => {
  const [isSection4Active, setIsSection4Active] = useState(false);
  useEffect(() => {
    if (navigationRef.current) {
      const navigation = navigationRef.current;

      const contentSections = Array.from(document.getElementsByClassName('content-section'));

      const smoothScroll = (target) => {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      };

      const updateNavigation = () => {
        contentSections.forEach((section) => {
          const sectionName = section.id;
          const navigationMatch = navigation.querySelector(`a[href="#${sectionName}"]`);
          if (navigationMatch) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;

            if (
              sectionTop - windowHeight / 2 < scrollTop &&
              sectionTop + sectionHeight - windowHeight / 2 > scrollTop
            ) {
              navigationMatch.classList.add('active-section');
              if (sectionName === 'section-4') {
                setIsSection4Active(true);
              } else {
                setIsSection4Active(false);
              }
            } else {
              navigationMatch.classList.remove('active-section');
            }
          }
        });
      };

      const handleClick = (event) => {
        event.preventDefault();
        const hash = event.target.hash;
        const targetId = hash ? hash.substring(1) : null;
        const target = document.getElementById(targetId);
        if (target) {
          smoothScroll(target);
      };
    }

      navigation.addEventListener('click', handleClick);
      window.addEventListener('scroll', updateNavigation);
      updateNavigation();

      return () => {
        navigation.removeEventListener('click', handleClick);
        window.removeEventListener('scroll', updateNavigation);
      };
    }
  }, [navigationRef]);

  return (
    <nav ref={navigationRef} className={isSection4Active ? 'blur-background' : ''}>
      <ul>
        <li>
          <a href="#section-1">
            <span className="rect nav-style"></span>
            <span className="circle nav-style"></span>
            INTRO
          </a>
        </li>
        <li>
          <a href="#section-2">
            <span className="rect nav-style"></span>
            <span className="circle nav-style"></span>
            OVERVIEW
          </a>
        </li>
        <li>
          <a href="#section-3">
            <span className="rect nav-style"></span>
            <span className="circle nav-style"></span>
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#section-4">
            <span className="rect nav-style"></span>
            <span className="circle nav-style"></span>
            EXPERIENCE
          </a>
        </li>
        <li>
          <a href="#section-5">
            <span className="rect nav-style"></span>
            <span className="circle nav-style"></span>
            SKILLS
          </a>
        </li>
        <li>
          <a href="#section-6">
            <span className="rect nav-style"></span>
            <span className="circle nav-style"></span>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const navigationRef = useRef(null);
  const section4Ref = useRef(null);

  return (
    <BrowserRouter>
      <div>
        <CustomCursor />
        <SocialMedia />
        <Navigation navigationRef={navigationRef} />
        <section id="section-1" className="content-section">
          <div className='relative z-0'>
            <Hero />
          </div>
        </section>
        <section id="section-2" className="content-section">
          <div className='relative z-0'>
            <Overview />
          </div>
        </section>
        <section id="section-3" className="content-section">
          <div className='relative z-0'>
            <Projects />
          </div>
        </section>
        <section ref={section4Ref} id="section-4" className="content-section">
          <div className='relative z-0'>
            <Experience />
          </div>
        </section>
        <br></br>
        <section id="section-5" className="content-section">
          <div className='relative z-0'>
            <Skills />
          </div>
        </section>
     <section id="section-6" className="content-section">
       <div className='relative z-0'>
         <ZoomAnimation section4Ref={section4Ref} />
         <Contact />
     </div>
      </section>
      </div>
      </BrowserRouter>
    );
}

export default App;