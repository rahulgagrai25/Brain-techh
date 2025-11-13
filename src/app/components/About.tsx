// About.tsx
'use client'
import React from 'react';

function About() {
  return (
    <>
      {/* ============================================ */}
      {/*                   About                     */}
      {/* ============================================ */}

      <section id="about-us">
        {/* Background Image with Overlay */}
        <div className="cs-background">
          <picture>
            <source 
              media="(max-width: 600px)" 
              srcSet="https://marketplace.canva.com/WSSAg/MAEyCBWSSAg/1/s2/canva-city-industrial-factory-in-countryside-MAEyCBWSSAg.jpg" 
            />
            <source 
              media="(min-width: 601px)" 
              srcSet="https://marketplace.canva.com/WSSAg/MAEyCBWSSAg/1/s2/canva-city-industrial-factory-in-countryside-MAEyCBWSSAg.jpg" 
            />
            <img 
              aria-hidden="true" 
              decoding="async" 
              src="https://marketplace.canva.com/WSSAg/MAEyCBWSSAg/1/s2/canva-city-industrial-factory-in-countryside-MAEyCBWSSAg.jpg" 
              alt="Industrial background" 
              width="1920"
              height="1080"
            />
          </picture>
          <div className="cs-background-overlay"></div>
        </div>

        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">About Us</span>
            <h2 className="cs-title">About Braintechh Engineers</h2>
            <p className="cs-text">
               Braintechh Engineers Private Limited is an ISO 9001:2015 certified company (Certificate 
No. 305025102907Q), recognized as one of the most reliable service providers in Operation 
& Maintenance (O&M) and Erection & Commissioning of industrial and power plant systems.
            </p>
            <p className="cs-text">
              We specialize in the O&M of Thermal Power Plant, Distillation, Solar, Biomass, and Multi-Fuel Power Plants; Process 
Boilers and Utilities such as Thermopack, Thermosyphon, Chillers, Nitrogen, Hydrogen, and 
Ammonia Plants. Our expertise also extends to Distilleries, Sugar, Dairy, Chemical, and Food 
Processing Plants, as well as Steel, DRI, Cement, Textile, Paper, and Edible Oil Industries.
            </p>
            <p className="cs-text">
              Our scope covers complete water treatment solutions—including chemical supply, DM and 
softening plants, and advanced RO systems—along with mechanical and process equipment 
erection, turbine overhauling, annual maintenance, and shutdown jobs.
            </p>
            <p className="cs-text">
              With a team of experienced engineers and technicians, we deliver efficient, safe, and cost
effective services that ensure maximum plant performance and minimal downtime. Our 
commitment to innovation, quality, and customer satisfaction makes Braintechh Engineers 
a trusted name across India’s power and process industries.
            </p>
            <a href="/about" className="cs-button-solid">
              Read More
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

          <div className="cs-image-grid">
            <div className="cs-grid-item cs-main-image">
              <picture>
                <source 
                  media="(max-width: 600px)" 
                  srcSet="/about/a4.png" 
                />
                <source 
                  media="(min-width: 601px)" 
                  srcSet="/about/a4.png" 
                />
                <img 
                  aria-hidden="true" 
                  decoding="async" 
                  src="/about/a4.png" 
                  alt="Braintechh Engineers team at power plant" 
                  width="400" 
                  height="300"
                />
              </picture>
            </div>
            
            <div className="cs-grid-item cs-secondary-image">
              <picture>
                <source 
                  media="(max-width: 600px)" 
                  srcSet="/about/a1.png" 
                />
                <source 
                  media="(min-width: 601px)" 
                  srcSet="/about/a1.png" 
                />
                <img 
                  aria-hidden="true" 
                  decoding="async" 
                  src="/about/a1.png" 
                  alt="Industrial maintenance work" 
                  width="200" 
                  height="150"
                />
              </picture>
            </div>
            
            <div className="cs-grid-item cs-secondary-image">
              <picture>
                <source 
                  media="(max-width: 600px)" 
                  srcSet="/about/a2.png" 
                />
                <source 
                  media="(min-width: 601px)" 
                  srcSet="/about/a2.png" 
                />
                <img 
                  aria-hidden="true" 
                  decoding="async" 
                  src="/about/a2.png" 
                  alt="Power plant equipment" 
                  width="200" 
                  height="150"
                />
              </picture>
            </div>
            
            <div className="cs-grid-item cs-secondary-image">
              <picture>
                <source 
                  media="(max-width: 600px)" 
                  srcSet="/about/a3.png" 
                />
                <source 
                  media="(min-width: 601px)" 
                  srcSet="/about/a3.png" 
                />
                <img 
                  aria-hidden="true" 
                  decoding="async" 
                  src="/about/a3.png" 
                  alt="Technical engineering work" 
                  width="200" 
                  height="150"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* About Section Styles */
        #about-us {
          padding: var(--sectionPadding);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        /* Background Image Styles */
        #about-us .cs-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        #about-us .cs-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          position: absolute;
          top: 0;
          left: 0;
        }

        #about-us .cs-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.95) 0%,
            rgba(255, 255, 255, 0.88) 50%,
            rgba(255, 255, 255, 0.92) 100%
          );
          backdrop-filter: blur(1px);
        }

        #about-us .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3.5rem;
          position: relative;
          z-index: 2;
        }

        #about-us .cs-content {
          text-align: left;
          width: 100%;
          max-width: 39.375rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        #about-us .cs-topper {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        #about-us .cs-title {
          font-size: var(--headerFontSize);
          font-weight: 900;
          line-height: 1.2em;
          margin: 0 0 1.5rem 0;
          color: var(--headerColor);
          position: relative;
        }

        #about-us .cs-title:after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 60px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
        }

        #about-us .cs-text {
          font-size: var(--bodyFontSize);
          line-height: 1.6em;
          margin: 0 0 1.5rem 0;
          color: var(--bodyTextColor);
          position: relative;
        }

        #about-us .cs-button-solid {
          font-size: 1rem;
          text-align: center;
          line-height: clamp(2.875rem, 5.5vw, 3.5rem);
          text-decoration: none;
          font-weight: 700;
          overflow: hidden;
          margin: 1rem 0 0 0;
          color: #fff;
          padding: 0 1.75rem;
          background-color: var(--primary);
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

        #about-us .cs-button-solid:before {
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

        #about-us .cs-button-solid:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 192, 0.3);
        }

        #about-us .cs-button-solid:hover:before {
          width: 100%;
        }

        /* Image Grid Styles */
        #about-us .cs-image-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          gap: 1rem;
          width: 100%;
          max-width: 36.3125rem;
          position: relative;
        }

        #about-us .cs-grid-item {
          position: relative;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e0e0e0;
        }

        #about-us .cs-grid-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Main Image Styles */
        #about-us .cs-main-image {
          grid-column: 1;
          grid-row: 1;
        }

        /* Secondary Images Styles */
        #about-us .cs-secondary-image {
          grid-row: auto;
        }

        /* Tablet - 768px */
        @media only screen and (min-width: 48rem) {
          #about-us .cs-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 4rem;
          }

          #about-us .cs-content {
            width: 48%;
          }

          #about-us .cs-image-grid {
            width: 48%;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            gap: 1.5rem;
          }

          #about-us .cs-main-image {
            grid-column: 1 / 3;
            grid-row: 1;
          }

          #about-us .cs-secondary-image {
            grid-row: 2;
          }

          #about-us .cs-background-overlay {
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.92) 0%,
              rgba(255, 255, 255, 0.85) 50%,
              rgba(255, 255, 255, 0.3) 100%
            );
          }
        }

        /* Desktop - 1024px */
        @media only screen and (min-width: 64rem) {
          #about-us .cs-container {
            gap: 6rem;
          }

          #about-us .cs-content {
            width: 45%;
          }

          #about-us .cs-image-grid {
            width: 45%;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto auto;
          }

          #about-us .cs-main-image {
            grid-column: 1 / 3;
            grid-row: 1 / 3;
          }

          #about-us .cs-secondary-image {
            grid-row: auto;
          }

          #about-us .cs-secondary-image:nth-child(2) {
            grid-column: 3;
            grid-row: 1;
          }

          #about-us .cs-secondary-image:nth-child(3) {
            grid-column: 3;
            grid-row: 2;
          }

          #about-us .cs-secondary-image:nth-child(4) {
            grid-column: 1;
            grid-row: 3;
          }
        }

        /* Large Desktop - 1200px */
        @media only screen and (min-width: 75rem) {
          #about-us {
            padding: clamp(4rem, 8vw, 8rem) 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default About;