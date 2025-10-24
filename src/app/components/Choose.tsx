'use client'
import React, { useState, useEffect } from 'react'

function Choose() {
  const [currentImageSet, setCurrentImageSet] = useState(0);
  
  const imageSets = [
    [
      { src: "https://images.unsplash.com/photo-1620203853151-496c7228306c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1296", size: "large", alt: "Construction worker" },
      { src: "/f1.jpg", size: "medium", alt: "Construction site" },
      { src: "/f2.jpg", size: "medium", alt: "Industrial work" },
      { src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", size: "small", alt: "Technical work" },
      { src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", size: "small", alt: "Engineering work" }
    ],
    [
      { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", size: "large", alt: "Power plant" },
      { src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", size: "medium", alt: "Industrial maintenance" },
      { src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", size: "medium", alt: "Technical engineering" },
      { src: "/f1.jpg", size: "small", alt: "Construction project" },
      { src: "/f2.jpg", size: "small", alt: "Building work" }
    ],
    [
      { src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", size: "large", alt: "Industrial equipment" },
      { src: "https://images.unsplash.com/photo-1620203853151-496c7228306c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1296", size: "medium", alt: "Expert team" },
      { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", size: "medium", alt: "Power systems" },
      { src: "/f1.jpg", size: "small", alt: "Site work" },
      { src: "/f2.jpg", size: "small", alt: "Project completion" }
    ]
  ];

  const transitions = [
    'fade',
    'slide-up',
    'slide-down',
    'zoom-in',
    'flip',
    'rotate',
    'bounce',
    'pulse'
  ];

  const [currentTransitions, setCurrentTransitions] = useState<string[]>([]);

  useEffect(() => {
    // Set initial transitions
    setCurrentTransitions(imageSets[0].map(() => 
      transitions[Math.floor(Math.random() * transitions.length)]
    ));

    const interval = setInterval(() => {
      setCurrentImageSet((prev) => (prev + 1) % imageSets.length);
      
      // Set new random transitions for each image
      setCurrentTransitions(imageSets[0].map(() => 
        transitions[Math.floor(Math.random() * transitions.length)]
      ));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        /* Choose Us Section */
        #choose-us {
          padding: var(--sectionPadding, 2rem 1rem);
          background: linear-gradient(
            rgba(255, 255, 255, 0.85),
            rgba(255, 255, 255, 0.85)
          ), url('/f1.jpg') center/cover fixed;
          position: relative;
          overflow: hidden;
        }

        #choose-us .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        #choose-us .cs-content {
          text-align: left;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        #choose-us .cs-topper {
          color: var(--primary, #0070c0);
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        #choose-us .cs-title {
          font-size: var(--headerFontSize, 2rem);
          font-weight: 900;
          line-height: 1.2em;
          margin: 0 0 1rem 0;
          color: var(--headerColor, #1a1a1a);
          position: relative;
        }

        #choose-us .cs-title:after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 60px;
          height: 3px;
          background: var(--primary, #0070c0);
        }

        #choose-us .cs-text {
          font-size: var(--bodyFontSize, 1rem);
          line-height: 1.6em;
          margin: 0 0 2rem 0;
          color: var(--bodyTextColor, #4a4a4a);
          font-weight: 500;
        }

        /* Advantages List */
        #choose-us .cs-advantages {
          list-style: none;
          padding: 0;
          margin: 0 0 2.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        #choose-us .cs-advantage {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0;
        }

        #choose-us .cs-icon-wrapper {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          background: rgba(0, 112, 192, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        #choose-us .cs-advantage:hover .cs-icon-wrapper {
          background: var(--primary, #0070c0);
          transform: scale(1.05);
        }

        #choose-us .cs-icon {
          width: 1.5rem;
          height: 1.5rem;
          transition: all 0.3s ease;
        }

        #choose-us .cs-advantage:hover .cs-icon {
          filter: brightness(0) invert(1);
        }

        #choose-us .cs-text-content {
          flex: 1;
        }

        #choose-us .cs-advantage-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: var(--headerColor, #1a1a1a);
          transition: color 0.3s ease;
        }

        #choose-us .cs-advantage:hover .cs-advantage-title {
          color: var(--primary, #0070c0);
        }

        #choose-us .cs-advantage-text {
          font-size: 0.95rem;
          line-height: 1.6em;
          margin: 0;
          color: var(--bodyTextColor, #4a4a4a);
        }

        /* Button */
        #choose-us .cs-button-solid {
          font-size: 1rem;
          text-align: center;
          line-height: clamp(2.875rem, 5.5vw, 3.5rem);
          text-decoration: none;
          font-weight: 700;
          overflow: hidden;
          margin: 1rem 0 0 0;
          color: #fff;
          padding: 0 1.75rem;
          background-color: var(--primary, #0070c0);
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        #choose-us .cs-button-solid:before {
          content: "";
          position: absolute;
          display: block;
          height: 100%;
          width: 0%;
          background: black;
          opacity: 1;
          top: 0;
          left: 0;
          z-index: -1;
          transition: width 0.3s;
        }

        #choose-us .cs-button-solid:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 192, 0.3);
        }

        #choose-us .cs-button-solid:hover:before {
          width: 100%;
        }

        /* Image Section - Photo Grid */
        #choose-us .cs-image-section {
          width: 100%;
          position: relative;
        }

        #choose-us .cs-photo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 0.75rem;
          height: 400px;
        }

        /* Grid Item Sizes */
        #choose-us .cs-grid-item {
          position: relative;
          overflow: hidden;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
        }

        #choose-us .cs-large {
          grid-column: span 2;
          grid-row: span 2;
        }

        #choose-us .cs-medium {
          grid-column: span 1;
          grid-row: span 1;
        }

        #choose-us .cs-small {
          grid-column: span 1;
          grid-row: span 1;
        }

        #choose-us .cs-grid-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        #choose-us .cs-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 112, 192, 0.1) 0%,
            rgba(0, 112, 192, 0.05) 100%
          );
          transition: all 0.3s ease;
        }

        #choose-us .cs-grid-item:hover .cs-image-overlay {
          background: linear-gradient(
            135deg,
            rgba(0, 112, 192, 0.2) 0%,
            rgba(0, 112, 192, 0.1) 100%
          );
        }

        /* Image Transitions */
        #choose-us .cs-transition-fade .cs-grid-image {
          animation: fadeTransition 1s ease-in-out;
        }

        #choose-us .cs-transition-slide-up .cs-grid-image {
          animation: slideUpTransition 1s ease-in-out;
        }

        #choose-us .cs-transition-slide-down .cs-grid-image {
          animation: slideDownTransition 1s ease-in-out;
        }

        #choose-us .cs-transition-zoom-in .cs-grid-image {
          animation: zoomInTransition 1s ease-in-out;
        }

        #choose-us .cs-transition-flip .cs-grid-image {
          animation: flipTransition 1s ease-in-out;
        }

        #choose-us .cs-transition-rotate .cs-grid-image {
          animation: rotateTransition 1s ease-in-out;
        }

        #choose-us .cs-transition-bounce .cs-grid-image {
          animation: bounceTransition 1s ease-in-out;
        }

        #choose-us .cs-transition-pulse .cs-grid-image {
          animation: pulseTransition 1s ease-in-out;
        }

        /* Animations */
        @keyframes fadeTransition {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUpTransition {
          0% { 
            opacity: 0;
            transform: translateY(100%);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDownTransition {
          0% { 
            opacity: 0;
            transform: translateY(-100%);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomInTransition {
          0% { 
            opacity: 0;
            transform: scale(0.8);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes flipTransition {
          0% { 
            opacity: 0;
            transform: rotateY(180deg);
          }
          100% { 
            opacity: 1;
            transform: rotateY(0);
          }
        }

        @keyframes rotateTransition {
          0% { 
            opacity: 0;
            transform: rotate(-180deg) scale(0.5);
          }
          100% { 
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }

        @keyframes bounceTransition {
          0% { 
            opacity: 0;
            transform: scale(0.3);
          }
          50% { 
            opacity: 0.7;
            transform: scale(1.05);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulseTransition {
          0% { 
            opacity: 0;
            transform: scale(0.5);
          }
          50% { 
            opacity: 1;
            transform: scale(1.02);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Tablet - 768px */
        @media only screen and (min-width: 48rem) {
          #choose-us .cs-container {
            flex-direction: row;
            align-items: center;
            gap: 4rem;
          }

          #choose-us .cs-content {
            width: 50%;
          }

          #choose-us .cs-image-section {
            width: 50%;
          }

          #choose-us .cs-photo-grid {
            height: 500px;
            gap: 1rem;
          }
        }

        /* Desktop - 1024px */
        @media only screen and (min-width: 64rem) {
          #choose-us .cs-container {
            gap: 6rem;
          }

          #choose-us .cs-photo-grid {
            height: 550px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
          }

          /* Adjust grid layout for desktop */
          #choose-us .cs-large {
            grid-column: span 2;
            grid-row: span 2;
          }

          #choose-us .cs-medium {
            grid-column: span 1;
            grid-row: span 1;
          }

          #choose-us .cs-small {
            grid-column: span 1;
            grid-row: span 1;
          }
        }

        /* Large Desktop - 1200px */
        @media only screen and (min-width: 75rem) {
          #choose-us {
            padding: clamp(4rem, 8vw, 8rem) 1rem;
          }
        }
      `}</style>

      <section id="choose-us">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Why Choose Us</span>
            <h2 className="cs-title">Why Choose Us</h2>
            <p className="cs-text">
              Meeting customer's expectations, committed to the customer.
            </p>
            
            <ul className="cs-advantages">
              <li className="cs-advantage">
                <div className="cs-icon-wrapper">
                  <img 
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/check-circle.svg" 
                    alt="check" 
                    className="cs-icon"
                    width="24"
                    height="24"
                  />
                </div>
                <div className="cs-text-content">
                  <h3 className="cs-advantage-title">Expert Team</h3>
                  <p className="cs-advantage-text">
                    Our team of expert engineers and technicians always delivers 100% output in all our services.
                  </p>
                </div>
              </li>
              
              <li className="cs-advantage">
                <div className="cs-icon-wrapper">
                  <img 
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/check-circle.svg" 
                    alt="check" 
                    className="cs-icon"
                    width="24"
                    height="24"
                  />
                </div>
                <div className="cs-text-content">
                  <h3 className="cs-advantage-title">Integrity & Quality</h3>
                  <p className="cs-advantage-text">
                    Integrity and fair workmanship in all matter. Quality Control and Quality assurance.
                  </p>
                </div>
              </li>
              
              <li className="cs-advantage">
                <div className="cs-icon-wrapper">
                  <img 
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/check-circle.svg" 
                    alt="check" 
                    className="cs-icon"
                    width="24"
                    height="24"
                  />
                </div>
                <div className="cs-text-content">
                  <h3 className="cs-advantage-title">Large Scale Projects</h3>
                  <p className="cs-advantage-text">
                    Capable to undertake even the bulkiest erection and commissioning project to be accomplished.
                  </p>
                </div>
              </li>
              
              <li className="cs-advantage">
                <div className="cs-icon-wrapper">
                  <img 
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/check-circle.svg" 
                    alt="check" 
                    className="cs-icon"
                    width="24"
                    height="24"
                  />
                </div>
                <div className="cs-text-content">
                  <h3 className="cs-advantage-title">Fast Response</h3>
                  <p className="cs-advantage-text">
                    Fast response, Customer service / Call service / Manpower arrangement. Prompt and Efficient services.
                  </p>
                </div>
              </li>
            </ul>
            
            <a href="#contact-us" className="cs-button-solid">
              Get in Touch
              <img 
                className="cs-button-arrow" 
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/white-arrow-up.svg" 
                decoding="async" 
                alt="arrow" 
                width="20" 
                height="20" 
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="cs-image-section">
            <div className="cs-photo-grid">
              {imageSets[currentImageSet].map((image, index) => (
                <div 
                  key={`${currentImageSet}-${index}`}
                  className={`cs-grid-item cs-${image.size} cs-transition-${currentTransitions[index] || 'fade'}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="cs-grid-image"
                  />
                  <div className="cs-image-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Choose