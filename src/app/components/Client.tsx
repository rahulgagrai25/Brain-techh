'use client';
import React from 'react'

function Client() {
  // Array of company logo image links
  const allLogos = [
    './companies/c1.png',
    './companies/c2.png',
    './companies/c3.png',
    './companies/c4.png',
    './companies/c5.png',
    './companies/c6.png',
    './companies/c7.png',
    './companies/c8.png',
    './companies/c9.png',
    './companies/c10.png'
  ];

  // Company names for alt tags
  const companyNames = [
    'Adani Group', 'TATA Group', 'Reliance Industries', 'Larsen & Toubro', 'Thermax',
    'Siemens', 'BHEL', 'Jindal Group', 'Vedanta Resources', 'Hindustan Zinc'
  ];

  // Layout: 4, 4, 2 logos for balanced pyramid
  const row1Logos = allLogos.slice(0, 4);
  const row2Logos = allLogos.slice(4, 8);
  const row3Logos = allLogos.slice(8, 10);

  const row1Names = companyNames.slice(0, 4);
  const row2Names = companyNames.slice(4, 8);
  const row3Names = companyNames.slice(8, 10);

  return (
    <>
      <section id="clients" className="cs-section">
        <div className="cs-container">
          {/* Logos on Left */}
          <div className="cs-logo-section">
            <div className="cs-logo-grid">
              {/* Row 1 - 4 logos */}
              <div className="cs-logo-row">
                {row1Logos.map((logo, index) => (
                  <div key={index} className="cs-logo-card">
                    <img 
                      src={logo} 
                      alt={row1Names[index]}
                      className="cs-logo-image"
                    />
                  </div>
                ))}
              </div>

              {/* Row 2 - 4 logos */}
              <div className="cs-logo-row">
                {row2Logos.map((logo, index) => (
                  <div key={index} className="cs-logo-card">
                    <img 
                      src={logo} 
                      alt={row2Names[index]}
                      className="cs-logo-image"
                    />
                  </div>
                ))}
              </div>

              {/* Row 3 - 2 logos */}
              <div className="cs-logo-row cs-logo-row-center">
                {row3Logos.map((logo, index) => (
                  <div key={index} className="cs-logo-card">
                    <img 
                      src={logo} 
                      alt={row3Names[index]}
                      className="cs-logo-image"
                    />
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <div className="cs-button-container">
                <a href="#" className="cs-button-solid">
                  View More Clients
                </a>
              </div>
            </div>
          </div>

          {/* Content on Right */}
          <div className="cs-content-section">
            <div className="cs-content">
              <span className="cs-topper">Our Clients</span>
              <h2 className="cs-title">Trusted by Industry <span className="cs-highlight">Leaders</span></h2>
              <p className="cs-text">
                We proudly serve leading industrial giants and power sector pioneers across India. 
                Our expertise in power plant maintenance and industrial solutions has earned the trust 
                of the nation's most respected corporations.
              </p>
              
              <div className="cs-stats">
                <div className="cs-stat">
                  <div className="cs-stat-dot cs-stat-dot-primary"></div>
                  <span>50+ Projects Completed</span>
                </div>
                <div className="cs-stat">
                  <div className="cs-stat-dot cs-stat-dot-secondary"></div>
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .cs-section {
          --primary: #0070c0;
          --secondary: #005a9e;
          --headerColor: #1a1a1a;
          --bodyTextColor: #4e4b66;
          --headerFontSize: clamp(1.75rem, 3vw, 2.5rem);
          --bodyFontSize: 1.05rem;

          padding: clamp(3.5rem, 6vw, 7rem) 1rem;
          background: #ffffff;
        }

        .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 48rem) {
          .cs-container {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          
          /* Swap order for desktop - logos left, content right */
          .cs-container {
            grid-template-columns: 1fr 1fr;
          }
          
          .cs-logo-section {
            order: 1;
          }
          
          .cs-content-section {
            order: 2;
          }
        }

        .cs-content {
          text-align: left;
        }

        @media (max-width: 47.9375rem) {
          .cs-content {
            text-align: center;
          }
        }

        .cs-topper {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }

        .cs-topper:before {
          content: '';
          width: 28px;
          height: 2px;
          background: currentColor;
          opacity: 0.8;
        }

        @media (max-width: 47.9375rem) {
          .cs-topper {
            justify-content: center;
          }
        }

        .cs-title {
          font-size: var(--headerFontSize);
          font-weight: 900;
          line-height: 1.15;
          margin: 0.5rem 0 1rem 0;
          color: var(--headerColor);
          letter-spacing: 0.01em;
        }

        .cs-highlight {
          color: var(--primary);
        }

        .cs-text {
          font-size: var(--bodyFontSize);
          line-height: 1.75;
          margin: 0 0 1.5rem 0;
          color: var(--bodyTextColor);
          opacity: 0.9;
        }

        .cs-stats {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 30rem) {
          .cs-stats {
            flex-direction: row;
            gap: 1.5rem;
          }
        }

        @media (max-width: 47.9375rem) {
          .cs-stats {
            align-items: center;
          }
        }

        .cs-stat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--bodyTextColor);
        }

        .cs-stat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .cs-stat-dot-primary {
          background: var(--primary);
        }

        .cs-stat-dot-secondary {
          background: var(--secondary);
        }

        .cs-logo-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .cs-logo-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cs-logo-row-center {
          justify-content: center;
        }

        .cs-logo-card {
          width: 6rem;
          height: 6rem;
          background: #ffffff;
          border: 1px solid #f0f0f0;
          /* Removed border-radius for square corners */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cs-logo-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 10px 25px rgba(0, 112, 192, 0.15);
        }

        .cs-logo-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, rgba(0, 112, 192, 0.1), rgba(0, 112, 192, 0.05), rgba(0, 112, 192, 0.1));
          /* Removed border-radius */
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cs-logo-card:hover::before {
          opacity: 1;
        }

        .cs-logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .cs-logo-card:hover .cs-logo-image {
          filter: grayscale(0%);
          opacity: 1;
        }

        .cs-button-container {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }

        .cs-button-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 2rem;
          background: var(--primary);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          /* Removed border-radius for square corners */
          transition: all 0.3s ease;
          border: 1px solid var(--primary);
        }

        .cs-button-solid:hover {
          background: var(--secondary);
          border-color: var(--secondary);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 112, 192, 0.25);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-logo-card,
          .cs-button-solid,
          .cs-logo-image {
            transition: none;
          }
          
          .cs-logo-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  )
}

export default Client