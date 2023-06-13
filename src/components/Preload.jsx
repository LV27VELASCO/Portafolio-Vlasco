import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'
import "../style/Loading.css";

const Preload = () => {
    const loadPage = useRef();
    const logoName = useRef()
    useEffect(() => {
        gsap.fromTo(
          loadPage.current,
          { opacity: 1 },
          { opacity: 0, duration: 1.5, delay: 3.5 }
        );
    
        gsap.fromTo(
          logoName.current,
          { y: 50, opacity: 1 },
          { y: 0, opacity: 1, duration: 2, delay: 0.5 }
        );
      }, []);
  return (
    <>
    <div ref={loadPage} className="loading-page">
        <svg
          version="1.1"
          id="svg"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 700 700"
        >
          <g>
            <path
              className="st0"
              d="M220.2,305.6L131.2,33h110.5l36.1,114.3L318,36.9h109.7l-98.8,271.5c8,25.4,16.9,54.4,25.4,84.6
           c11.5-37.9,24.2-75.5,35.5-108.6L475.7,33H586L432.2,463.1H515l38.4,91.4l-423.9,0.2L220.2,305.6z"
            />
            <polygon className="st1" points="281,470 272.4,443.4 262.7,470 	" />
            <path
              className="st1"
              d="M408.8,479.6L562.6,49.5h-75.1l-82.2,240.3c-17.7,51.9-37.5,111.3-51.6,165.8c-12-49.8-27.3-100.1-42.2-147.5
           l92.7-254.7h-74.6l-79.7,219.1l-65.6-201h29.4l42.9,134.7l12.3-34.3L229.6,49.5h-75.7l83.7,256.4L153,538.2l375.6-0.1l-24.6-58.5
           H408.8z M372.8,75.3l-76.4,209.8l-7.7,21.1l-18.8,51.7l-7.6,20.9l-44.7,122.7h83.8l4.8,14.7H184.4l95-261l0.2-0.7l7.5-20.5
           l57.8-158.7H372.8z M531.4,71.4L384.5,482.3l-12.2,34.1h-43l-6.6-20.3L289.3,394l-11,32.9l15.9,52.6H249l50-137.5
           c16.9,54.6,27.9,94.5,36.4,132l3.1,13.8h29.7l3.3-13.5c13.9-57.1,35.4-121.5,54.5-177.5l77.2-225.4H531.4z M395.7,516.2l5.3-14.7
           l88.7-0.5l7.1,15.1L395.7,516.2z"
            />
          </g>
        </svg>
        <div className="name-container">
          <div ref={logoName}  className="logo-name">VELASCO DEV</div>
        </div>
      </div>
      </>
  )
}

export default Preload