// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const ZoomAnimation = ({ section4Ref }) => {
//     const zoomRef = useRef(null);
//     useEffect(() => {
//         if (section4Ref.current) {
//           const section4Height = section4Ref.current.offsetHeight;
//           const section4OffsetTop = section4Ref.current.offsetTop;
      
//           const zoomTimeline = gsap.timeline({
//             scrollTrigger: {
//               trigger: zoomRef.current,
//               scrub: true,
//               start: () => `${section4OffsetTop} 90%`,
//               end: '+=30%',
//             //   markers: true,
//               onEnter: () => console.log('Enter'),
//               onLeave: () => console.log('Leave'),
//             },
//           });

//           zoomTimeline
//           .to('.zoom-circle', {
//             scale: 6
//           }, 'sameTime')
//           .to('.zoom-content', {
//             scale: 1.4,
//           }, 'sameTime');
        
//         window.addEventListener('resize', () => {
//           zoomTimeline
//             .to('.zoom-circle', {
//               scale: () => window.innerWidth / zoomRef.current.offsetWidth,
//             }, 'sameTime')
//             .to('.zoom-content', {
//               scale: 1.4,
//             }, 'sameTime');
//         });
      
//           return () => {
//             zoomTimeline.kill();
//           };
//         }
//       }, [section4Ref]);

//   return (
//     <div ref={zoomRef} className="zoom-container">
//     <div className="zoom">
//         <div className="zoom-circle"></div>
//         <h3 className="zoom-content">LET'S CONNECT!</h3>
//       </div>
//     </div>
//   );
// };


// export default ZoomAnimation;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ZoomAnimation = ({ section4Ref }) => {
  const zoomRef = useRef(null);

  useEffect(() => {
    const zoomTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: zoomRef.current,
        scrub: true,
        start: () => `${section4Ref.current.offsetTop} 70%`,
        end: '+=50%',
        onEnter: () => console.log('Enter'),
        onLeave: () => console.log('Leave'),
      },
    });

    zoomTimeline.to('.zoom-circle', {
      scale: 6,
    }, 'sameTime').to('.zoom-content', {
      scale: 1.4,
    }, 'sameTime');

    const handleResize = () => {
        gsap.to('.zoom-circle', {
            scale: () => window.innerWidth / zoomRef.current.offsetWidth,
            duration: 0.3, 
            onUpdate: ScrollTrigger.update, 
    })};

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      zoomTimeline.kill();
    };
  }, [section4Ref]);

  return (
    <div ref={zoomRef} className="zoom-container">
      <div className="zoom">
        <div className="zoom-circle"></div>
        <h3 className="zoom-content">LET'S CONNECT!</h3>
      </div>
    </div>
  );
};

export default ZoomAnimation;
