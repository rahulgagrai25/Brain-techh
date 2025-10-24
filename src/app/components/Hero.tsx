import React from 'react';
import './Hero.css'; // We'll create this CSS file

function Hero() {
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
          {/* To make your own background crops of people use https://www.remove.bg/ */}
          <picture className="cs-picture">
            <source 
              media="(max-width: 600px)" 
              srcSet="/man.png" 
            />
            <source 
              media="(min-width: 601px)" 
              srcSet="/man.png" 
            />
            <img 
              aria-hidden="true" 
              decoding="async" 
              src="/man.png" 
              alt="construction worker" 
              width="581" 
              height="662"
            />
          </picture>
        </div>
        <div className="cs-image-group">
          {/* Left Image */}
          <picture className="cs-background cs-background1">
            <source 
              media="(max-width: 600px)" 
              srcSet="/f1.jpg" 
            />
            <source 
              media="(min-width: 601px)" 
              srcSet="/f1.jpg" 
            />
            <img 
              aria-hidden="true" 
              decoding="async" 
              src="/f1.jpg" 
              alt="construction site" 
              width="1290" 
              height="684"
            />
          </picture>
          {/* Right Image */}
          <picture className="cs-background cs-background2">
            <source 
              media="(max-width: 600px)" 
              srcSet="/f2.jpg" 
            />
            <source 
              media="(min-width: 601px)" 
              srcSet="/f2.jpg" 
            />
            <img 
              aria-hidden="true" 
              decoding="async" 
              src="/f2.jpg" 
              alt="construction site" 
              width="630" 
              height="684"
            />
          </picture>
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
                <h3 className="cs-h3">Best House Renovation</h3>
                <p className="cs-item-text">
                  Transform your home with trendy flooring and finishes!
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
                <h3 className="cs-h3">Quality Always Matters</h3>
                <p className="cs-item-text">
                  Quality renovations provide lasting beauty and functionality.
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
                <h3 className="cs-h3">Effective Teamwork</h3>
                <p className="cs-item-text">
                  Collaboration drives success through shared goals and communication.
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
                <span className="cs-number">3K+</span>
                <h3 className="cs-h3">Happy Customers</h3>
                <p className="cs-item-text">
                  With more than 7 years of expertise we served our clients.
                </p>
                <span className="cs-fake-link">
                  Let's Work Together
                  <img 
                    className="cs-arrow" 
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/orange-arrow-up.svg" 
                    decoding="async" 
                    alt="arrow" 
                    width="20" 
                    height="20" 
                    aria-hidden="true"
                  />
                </span>
                <picture className="cs-background">
                  <source 
                    media="(max-width: 600px)" 
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/construction3.jpg" 
                  />
                  <source 
                    media="(min-width: 601px)" 
                    srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/construction3.jpg" 
                  />
                  <img 
                    aria-hidden="true" 
                    decoding="async" 
                    src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/construction3.jpg" 
                    alt="construction site" 
                    width="630" 
                    height="684"
                  />
                </picture>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;