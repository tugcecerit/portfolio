import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Projects = () => {
  return (
    <section>
    <div className="main-title text-center p-10 text-9xl max-sm:text-5xl">PROJECTS.</div>
    <div className="projects-section">
      <Carousel
        showThumbs={false}
        showStatus={true}
        showArrows={true}
        emulateTouch={true}
        showIndicators={true}
        infiniteLoop={true}
        centerMode={true}
        autoPlay={true}
        interval={4000}
        transitionTime={1000}
        swipeable={true}
        renderIndicator={(clickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  style={{ background: '#ffaa00', width: '30px', height: '30px', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', display: 'inline-block', margin: '0 10px' }}
                  className="indicator"
                  aria-label={`Selected: ${label} ${index + 1}`}
                  title={`Selected: ${label} ${index + 1}`}
                />
              );
            }
            return (
              <li
                style={{ background: '#fff', width: '30px', height: '30px', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', display: 'inline-block', margin: '0 10px' }}
                className="indicator"
                onClick={clickHandler}
                onKeyDown={clickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            );
          }}
        >
        <div className="card items-center justify-center">
          <div className="cover item-a">
            <h1>Portfolio</h1>
            <div className="card-back flex items-center justify-center">
                <p className="text-white w-35 text-md justify-center items-center m-10 max-sm:m-5">
                  This website is my first portfolio trial, where I aim to add 3D elements to enhance its charm and
                  demonstrate my skills and creativity by using new technologies.
                  <br></br><br></br>
                Technologies: react, vite, threejs, tailwind, framer-motion
                </p>
                <a className="text-white w-25 text-md justify-center items-center cursor-pointer max-sm:w-20"
                onClick={() => window.open("https://3d-portfolio-trial.vercel.app/", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right cursor-pointer" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                </a>
                <br></br><br></br>
                <a className="text-white w-25 text-md justify-center items-center m-10 cursor-pointer max-sm:m-5"
                onClick={() => window.open("https://github.com/tugcecerit/3d-portfolio-trial", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                </a>
            </div>
          </div>
        </div>
        <div className="card items-center justify-center">
          <div className="cover item-b">
            <h1>Luxe</h1>
            <div className="card-back flex items-center justify-center">
                <p className="text-white w-35 text-md justify-center items-center m-10 max-sm:m-5">
                The website aims to establish a captivating presence for an interior design company, showcasing their expertise and providing a platform to show their services.<br></br><br></br>
                Technologies: react, express, nodejs, mongodb, auth0, stripe, bootstrap, vanilla css
                </p>
                <a className="text-white w-25 text-md justify-center items-center cursor-pointer max-sm:w-20"
                onClick={() => window.open("https://luxe-frontend.vercel.app/", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right cursor-pointer" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                </a>
                <br></br><br></br>
                <a className="text-white w-25 text-md justify-center items-center m-10 cursor-pointer max-sm:m-5"
                onClick={() => window.open("https://github.com/tugcecerit/Luxe-frontend", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                </a>
            </div>
          </div>
        </div>
        <div className="card items-center justify-center">
          <div className="cover item-c">
            <h1>TEKforest</h1>
            <div className="card-back flex items-center justify-center">
                <p className="text-white w-35 text-md justify-center items-center m-10 max-sm:m-5">
                TEKforest is a comprehensive website that offers valuable information about a wide range of plants, serving as a reliable resource for users seeking plant-related knowledge.
                <br></br><br></br>
                Technologies: react, express, nodejs, rest api, mongodb, purecss, vanilla css
                </p>
                <a className="text-white w-25 text-md justify-center items-center cursor-pointer max-sm:w-20"
                onClick={() => window.open("https://tekforest-frontend.vercel.app/", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right cursor-pointer" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                </a>
                <br></br><br></br>
                <a className="text-white w-25 text-md justify-center items-center m-10 cursor-pointer max-sm:m-5"
                onClick={() => window.open("https://github.com/tugcecerit/tekforest-frontend", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                </a>
            </div>
          </div>
        </div>
        <div className="card items-center justify-center">
          <div className="cover item-d">
            <h1>Many Nanny</h1>
            <div className="card-back flex items-center justify-center">
                <p className="text-white w-35 text-md justify-center items-center m-10 max-sm:m-5">
                The website enables babysitters to create detailed profiles with contact information, while providing families a hiring experience to find the perfect caregivers for their children.
                <br></br><br></br>
                Technologies: express, nodejs, mongodb, bootstrap, vanilla css
                </p>
                <a className="text-white w-25 text-md justify-center items-center cursor-pointer max-sm:w-20"
                onClick={() => window.open("https://manynanny.herokuapp.com/home/", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right cursor-pointer" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                </a>
                <br></br><br></br>
                <a className="text-white w-25 text-md justify-center items-center m-10 cursor-pointer max-sm:m-5"
                onClick={() => window.open("https://github.com/tugcecerit/Many-Nanny", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                </a>
            </div>
          </div>
        </div>
        <div className="card items-center justify-center">
          <div className="cover item-e">
            <h1>Space Knight</h1>
            <div className="card-back flex items-center justify-center">
                <p className="text-white w-35 text-md justify-center items-center m-10 max-sm:m-5">
                This project is a fun platform game that combines jumping and shooting functionalities for an interactive and entertaining experience.
                <br></br><br></br>
                Technologies: javascript, DOM, vanilla css
                </p>
                <a className="text-white w-25 text-md justify-center items-center cursor-pointer max-sm:w-20"
                onClick={() => window.open("https://platform-game-space-knight.vercel.app/", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right cursor-pointer" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                </a>
                <br></br><br></br>
                <a className="text-white w-25 text-md justify-center items-center m-10 cursor-pointer max-sm:m-5"
                onClick={() => window.open("https://github.com/tugcecerit/Platform-Game", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                </a>
                <br></br><br></br>
            </div>
          </div>
        </div>
        <div className="card items-center justify-center">
          <div className="cover item-f">
            <h1>Tamagotchi</h1>
            <div className="card-back flex items-center justify-center">
                <p className="text-white w-35 text-md justify-center items-center m-10 max-sm:m-5">
                Introducing my mini and very first game development project! This creation delivers an immersive an engaging experience through the world of Tamagotchi.
                <br></br><br></br>
                Technologies: javascript, vanilla css
                </p>
                <a className="text-white w-25 text-md justify-center items-center cursor-pointer max-sm:w-20"
                onClick={() => window.open("https://tamagotchi-game.vercel.app/", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right cursor-pointer" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                </a>
                <br></br><br></br>
                <a className="text-white w-25 text-md justify-center items-center m-10 cursor-pointer max-sm:m-5"
                onClick={() => window.open("https://github.com/tugcecerit/Tamagotchi-Game", "_blank")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github cursor-pointer" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
    </section>
  );
};

export default Projects;