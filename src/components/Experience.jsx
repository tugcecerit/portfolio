import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import computer from '../img/computer.jpg';
import coffee from '../img/coffee.jpg';
import lake from '../img/lake.jpg';
import water from '../img/water.jpg';
import fabric from '../img/fabric.jpg';
import smoothscroll from 'smoothscroll-polyfill';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const road = document.querySelector(".road");
 
          if (road) {
            const windowHeight = window.innerHeight;
            const roadHeight = windowHeight - (scrollTop / windowHeight) * windowHeight * 1;
            road.style.height = roadHeight + "px";
          }
 
          ticking = false;
        });
 
        ticking = true;
      }
    };

    const initHorizontalScroll = () => {
      const container = document.querySelector(".horizontal-scroller");
      const containerWidth = container.scrollWidth - document.documentElement.clientWidth;

      gsap.to(container, {
        x: () => -(container.scrollWidth - document.documentElement.clientWidth),
        scrollTrigger: {
          markers: false,
          trigger: '.horizontal-wrapper',
          start: 'top top',
          scrub: 1,
          pin: '.horizontal-container',
          end: () => "+=" + containerWidth,
          invalidateOnRefresh: true,
        }
      });
    };

    const smoothScrollTo = (position) => {
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    };

    const initializeSmoothScrollPolyfill = () => {
      if (!('scrollBehavior' in document.documentElement.style)) {
        smoothscroll.polyfill();
      }
    };

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
  

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", initHorizontalScroll);
    window.addEventListener("load", initializeSmoothScrollPolyfill);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", initHorizontalScroll);
      window.removeEventListener("load", initializeSmoothScrollPolyfill);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="horizontal-container">
      <div className="horizontal-wrapper mb-10">
        <div className="horizontal-scroller">
          <div className="row">
            <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-5xl flex flex-col justify-center items-center h-50 text-white font-normal w-50 text-shadow-md filled max-sm:w-96">
              <h1>WHAT I HAVE DONE SO FAR</h1>
            </div>
            <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md big max-sm:w-96">
              <img className="absolute inset-0 w-full h-full object-cover rounded-2xl" src={computer} alt="Pic" />
            </div>
            <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md filled max-sm:w-96">
            <h3 className="text-lg sm:text-xl py-2 md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Area Sales and CS Supervisor</h3>
              <h5 className="text-md sm:text-lg md:text-2l lg:text-2xl xl:text-3xl font-medium">Mavi</h5>
              <h6 className="text-xs sm:text-base md:text-sm lg:text-md xl:text-lg">February 2020 - Present</h6>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Proactively resolved inquiries and issues, maintaining an active roster of 250+ accounts with a focus on delivering exceptional customer service.</p>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Managed electronic data interchange (EDI) and SPS order entry with SAP to facilitate seamless order processing.</p>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Participated in the project of implementing SAP and utilized Jira as a management tool with the SAP team.</p>
            </div>
            <div className="item relative p-10 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md big max-sm:w-96">
              <img className="absolute inset-0 w-full h-full object-cover rounded-2xl" src={lake} alt="Pic" />
            </div>
            <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md filled max-sm:w-96">
            <h3 className="text-lg sm:text-xl py-2 md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Export Sales Representative</h3>
              <h5 className="text-md sm:text-lg md:text-2l lg:text-2xl xl:text-3xl font-medium">Gulsan Holding</h5>
              <h6 className="text-xs sm:text-base md:text-sm lg:text-md xl:text-lg">May 2013 - January 2014</h6>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Optimized end-to-end order processing and streamlined shipping operations.</p>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Executed technical market research and optimized product offerings.</p>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Investigated client challenges and provided solutions to improve their experience, resulting in stronger customer ties and satisfaction.</p>
            </div>
          </div>
          <div className="row">
            <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md big max-sm:w-96">
              <img className="absolute inset-0 w-full h-full object-cover rounded-2xl" src={coffee} alt="Pic" />
            </div>
            <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md filled max-sm:w-96">
              <h3 className="text-lg sm:text-xl py-2 md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Software Engineering Fellow</h3>
              <h5 className="text-md sm:text-lg md:text-2l lg:text-2xl xl:text-3xl font-medium">General Assembly</h5>
              <h6 className="text-xs sm:text-base md:text-sm lg:text-md xl:text-lg">December 2022 - June 2023</h6>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Completed a 24-week, 450+ hour immersive program in full stack software engineering using technologies such as HTML, CSS, JS, Python, Node.js, Express.js, Flask, MongoDB, React, PostgreSQL.</p>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Collaborated with a team of developers in an agile development environment to design, develop, and deploy web applications.</p>
            </div>
            <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md big max-sm:w-96">
              <img className="absolute inset-0 w-full h-full object-cover rounded-2xl" src={water} alt="Pic" />
            </div>
            <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md filled max-sm:w-96">
              <h3 className="text-lg sm:text-xl py-2 md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Export Sales and Marketing Specialist</h3>
              <h5 className="text-md sm:text-lg md:text-2l lg:text-2xl xl:text-3xl font-medium">Sanko Holding</h5>
              <h6 className="text-xs sm:text-base md:text-sm lg:text-md xl:text-lg">March 2014 - May 2017</h6>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Managed sales operations and strengthened relationships with existing accounts, implementing a more efficient follow-up process that resulted in a 15% increase in on-time deliveries.</p>
              <p className="text-xl sm:text-base md:text-md lg:text-lg xl:text-xl max-sm:text-sm">Contributed to systematization projects, including the implementation of SAP to automate tasks and increase efficiency.</p>
             </div>
           <div className="item relative p-5 border-2 border-white rounded-2xl box-border text-2xl flex flex-col justify-between items-start h-50 text-white font-normal w-50 text-shadow-md big max-sm:w-96">
            <img className="absolute inset-0 w-full h-full object-cover rounded-2xl" src={fabric} alt="Pic"/>
             </div>
          </div>
         </div>
      </div>
      <div className="road"></div>
     </div>
   );
 };

export default Experience;