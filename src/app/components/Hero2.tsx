import React from 'react';
import './Hero2.css';

function Hero2() {
  return (
    <>
      {/* ============================================ */}
      {/*                    Hero                      */}
      {/* ============================================ */}

      <section id="hero-2274">
        <div className="cs-container">
          <div className="cs-content">
            <h1 className="cs-title">We're Building For Better Futures</h1>
            <p className="cs-text">
              In our relentless pursuit of progress, we are dedicated to constructing a future where innovation, sustainability, and inclusivity converge seamlessly.
            </p>
            <a href="" className="cs-button-solid">
              Get Started Today
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
        </div>
        <div className="cs-image-group">
          {/* Slideshow Background */}
          <div className="cs-background cs-background1">
            <div className="cs-slideshow">
              <div className="cs-slide">
                <img 
                  src="/f1.jpg" 
                  alt="construction site" 
                  width="1290" 
                  height="684"
                />
              </div>
              <div className="cs-slide">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1664299488927-4352e3d2a71e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
                  alt="construction site" 
                  width="1290" 
                  height="684"
                />
              </div>
              <div className="cs-slide">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661947059108-6ac42d1c1515?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
                  alt="construction site" 
                  width="1290" 
                  height="684"
                />
              </div>
              <div className="cs-slide">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
                  alt="construction site" 
                  width="1290" 
                  height="684"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/*                  Services                    */}
      {/* ============================================ */}

      <section id="Hservices-2274">
        <div className="cs-container">
          <ul className="cs-card-group">
            <li className="cs-item">
              <a href="" className="cs-link">
                <img 
                  className="cs-icon" 
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/construction1.svg" 
                  decoding="async" 
                  alt="icon" 
                  width="40" 
                  height="40" 
                  aria-hidden="true"
                />
                <h3 className="cs-h3">Meeting Customer Expectations</h3>
                <p className="cs-item-text">
                  We stay fully committed to every client, ensuring each project meets and exceeds expectations.
                </p>
              </a>
            </li>
            <li className="cs-item">
              <a href="" className="cs-link">
                <img 
                  className="cs-icon" 
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/construction2.svg" 
                  decoding="async" 
                  alt="icon" 
                  width="40" 
                  height="40" 
                  aria-hidden="true"
                />
                <h3 className="cs-h3">Expert Engineers & Technicians</h3>
                <p className="cs-item-text">
                  Our skilled team consistently delivers 100% output across all services with precision and dedication.
                </p>
              </a>
            </li>
            <li className="cs-item">
              <a href="" className="cs-link">
                <img 
                  className="cs-icon" 
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/construction3.svg" 
                  decoding="async" 
                  alt="icon" 
                  width="40" 
                  height="40" 
                  aria-hidden="true"
                />
                <h3 className="cs-h3">Reliable & Capable Execution</h3>
                <p className="cs-item-text">
                  From small tasks to the bulkiest erection and commissioning projects, we handle it all efficiently.
                </p>
              </a>
            </li>
            <li className="cs-item">
              <a href="" className="cs-link">
                <img 
                  className="cs-icon" 
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/construction4.svg" 
                  decoding="async" 
                  alt="icon" 
                  width="40" 
                  height="40" 
                  aria-hidden="true"
                />
                <h3 className="cs-h3"><span className='text-4xl'>7+</span> Years of Excellence</h3>
                <p className="cs-item-text">
                  Delivering trusted services with integrity, quality, and customer satisfaction.
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero2;