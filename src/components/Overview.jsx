import React, { useEffect } from 'react';
import gsap from 'gsap';
import { motion } from "framer-motion";

const Overview = () => {
  useEffect(() => {
    gsap.to('#text0', {
      x: '20%',
      rotate: 10,
      duration: 0.85,
      scrollTrigger: {
        trigger: '#text0',
        scrub: true,
        start: 'top 20%'
      }
    });

    gsap.to('#text2', {
      x: '20%',
      rotate: 10,
      duration: 0.85,
      scrollTrigger: {
        trigger: '#text2',
        scrub: true,
        start: 'top 40%'
      }
    });

    gsap.to('#text1', {
      x: '-20%',
      rotate: -10,
      duration: 0.85,
      scrollTrigger: {
        trigger: '#text1',
        scrub: true,
        start: 'top 30%'
      }
    });

    gsap.to('#text3', {
      x: '-20%',
      rotate: -10,
      duration: 0.85,
      scrollTrigger: {
        trigger: '#text3',
        scrub: true,
        start: 'top 40%'
      }
    });
  }, []);

  return (
    <div className="overview min-h-screen overflow-x-hidden mt-12">
      <div className="text text-white font-black text-center p-10 text-9xl max-sm:text-5xl max-sm:px-2" id="text0">
        DEVELOPER.
      </div>
      <div className="text text-[#ffaa00] font-black text-center p-10 text-9xl max-sm:text-5xl max-sm:px-2" id="text1">
        ENGINEER.
      </div>
      <div className="text text-white font-black text-center p-10 text-9xl max-sm:text-5xl max-sm:px-2" id="text2">
        NATUREPHILE.
      </div>
      <div className="text text-[#ffaa00] font-black text-center p-10 text-9xl max-sm:text-5xl max-sm:px-2" id="text3">
        COFFEE-LOVER.
      </div>
      <motion.div
        className='text-white z-10 w-full pt-20 px-40 max-sm:px-12'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}>
      <h3 className='text-5xl max-sm:text-4xl'>Introduction.</h3>
      <p className='text-2xl max-sm:text-sm max-sm:pt-5'>  I am a highly skilled software developer with a background in textile engineering and customer-oriented roles. My heart is captivated by the wonders of nature, particularly the vastness of the ocean, which provides me with solace and endless inspiration. In addition to my passion for nature, I find immense joy and satisfaction as a coffee lover, relishing every sip of a perfectly brewed cup. With expertise in JavaScript, Python, and frameworks like React, Node.js, and Flask, I bring confidence and a track record of quickly grasping new concepts to software development projects. Throughout my career, I've demonstrated unwavering determination and a commitment to achieving success.</p>
      </motion.div>
      </div>
  );
};

export default Overview;
