import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Python',
    'React',
    'Nodejs',
    'Flask',
    'PostgreSQL',
    'MongoDB',
    'Bootstrap',
    'Tailwind',
    'Git'
  ];

  return (
    <div>
    <div className="main-title text-center p-10 text-9xl max-sm:text-5xl">SKILLS.</div>
      <AnimatePresence>
        <motion.ul
          className='skills-ul p-20 grid grid-cols-3 gap-2 w-full h-screen justify-center items-center'
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 1 }}
            >
              <a>
                <i className="fa" aria-hidden="true"></i>
                <span>{skill}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
      <div className='flex justify-center items-center mt-10 cursor-pointer'>
        <a
          className='text-[#999999] font-bold text-[24px] flex items-center cursor-pointer'
          href='https://drive.google.com/file/d/1bAFyrRSgR91fiZfq4x4KIAy6xFfXGrvd/view?usp=sharing'
        >
          View Full Resume
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            className='bi bi-arrow-right-short ml-1 cursor-pointer'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Skills;
