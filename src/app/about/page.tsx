'use client'
import React from 'react'
import Team from '../components/Team'
import Award from '../components/Award'


function AboutPage() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="cs-hero pt-[100px] max-sm:pt-[80px]">
        <div className="cs-container">
          <div className="cs-hero-content">
            {/* <span className="cs-topper">About Us</span> */}
            <h1 className="cs-hero-title">About Braintechh Engineers</h1>
            <p className="cs-hero-text">
              ISO 9001:2015 Certified • Trusted O&M & Commissioning Partner • Powering India's Industrial Growth
            </p>
          </div>
        </div>
      </section>

      {/* About Our Company Section */}
      <section id="about-company" className="cs-section">
        <div className="cs-container">
          <div className="cs-content-section">
            {/* <span className="cs-topper">About Our Company</span> */}
            <h2 className="cs-title">Leading in Industries: <span className="cs-highlight">Power Plants, Distilleries, Sugar and Other Utilities</span></h2>
            
            <div className="cs-content-grid">
              <div className="cs-main-content">
                <p className="cs-text">
                  <strong>Braintechh Engineers Private Limited</strong> is an <strong>ISO 9001:2015 certified company</strong> (Certificate No. 305025102907Q), recognized as one of the most reliable service providers in Operation & Maintenance (O&M) and Erection & Commissioning of industrial and power plant systems.
                </p>
                
                <p className="cs-text">
                  We specialize in the O&M of <strong>Thermal, Solar, Biomass, and Multi-Fuel Power Plants</strong>; Process Boilers and Utilities such as <strong>Thermopack, Thermosyphon, Chillers, Nitrogen, Hydrogen, and Ammonia Plants</strong>. Our expertise also extends to <strong>Distilleries, Sugar, Dairy, Chemical, and Food Processing Plants</strong>, as well as <strong>Steel, DRI, Cement, Textile, Paper, and Edible Oil Industries</strong>.
                </p>

                <p className="cs-text">
                  Our scope covers complete water treatment solutions—including chemical supply, DM and softening plants, and advanced RO systems—along with mechanical and process equipment erection, turbine overhauling, annual maintenance, and shutdown jobs.
                </p>

                <p className="cs-text">
                  With a team of experienced engineers and technicians, we deliver efficient, safe, and cost-effective services that ensure maximum plant performance and minimal downtime. Our commitment to innovation, quality, and customer satisfaction makes Braintechh Engineers a trusted name across India's power and process industries.
                </p>

                <div className="cs-certification">
                  <div className="cs-cert-badge">
                    <img 
                      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/check-circle.svg" 
                      alt="certified" 
                      className="cs-cert-icon"
                      width="20"
                      height="20"
                    />
                    <span className="cs-cert-text">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="cs-address">
                    <strong>Corporate Office:</strong> Vasundhara, Ghaziabad, Uttar Pradesh
                  </div>
                </div>
              </div>

              <div className="cs-stats-section">
                <div className="cs-stat-card">
                  <div className="cs-stat-number">50+</div>
                  <div className="cs-stat-label">Projects Completed</div>
                </div>
                <div className="cs-stat-card">
                  <div className="cs-stat-number">10+</div>
                  <div className="cs-stat-label">Years Experience</div>
                </div>
                <div className="cs-stat-card">
                  <div className="cs-stat-number">100+</div>
                  <div className="cs-stat-label">Expert Engineers</div>
                </div>
                <div className="cs-stat-card">
                  <div className="cs-stat-number">24/7</div>
                  <div className="cs-stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services" className="cs-section cs-background">
        {/* <div className="cs-background-overlay"></div> */}
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Our Expertise</span>
            <h2 className="cs-title">Comprehensive Industrial <span className="cs-highlight">Solutions</span></h2>
          </div>

          <div className="cs-services-grid">
            <div className="cs-service-card">
              <div className="cs-service-icon">
                <img 
                  src="/bulb.svg" 
                  alt="Power Plants" 
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="cs-service-title">Power Plants</h3>
              <ul className="cs-service-list">
                <li>Thermal Power Plants</li>
                <li>Solar Power Plants</li>
                <li>Biomass Power Plants</li>
                <li>Multi-Fuel Power Plants</li>
                <li>Combined Cycle Power Plants</li>
              </ul>
            </div>

            <div className="cs-service-card">
              <div className="cs-service-icon">
                <img 
                  src="/bulb.svg" 
                  alt="Industrial Plants" 
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="cs-service-title">Industrial Plants</h3>
              <ul className="cs-service-list">
                <li>Distilleries & Ethanol Plants</li>
                <li>Sugar Plants</li>
                <li>Chemical Plants</li>
                <li>Dairy & Food Processing</li>
                <li>Steel, DRI & Cement</li>
              </ul>
            </div>

            <div className="cs-service-card">
              <div className="cs-service-icon">
                <img 
                  src="/bulb.svg" 
                  alt="Utilities & Systems" 
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="cs-service-title">Utilities & Systems</h3>
              <ul className="cs-service-list">
                <li>Thermopack Systems</li>
                <li>Thermosyphon Systems</li>
                <li>Chillers & Cooling Systems</li>
                <li>Nitrogen Plants</li>
                <li>Hydrogen & Ammonia Plants</li>
              </ul>
            </div>

            <div className="cs-service-card">
              <div className="cs-service-icon">
                <img 
                  src="/bulb.svg" 
                  alt="Water Treatment" 
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="cs-service-title">Water Treatment</h3>
              <ul className="cs-service-list">
                <li>DM Plants</li>
                <li>Softening Plants</li>
                <li>RO Systems</li>
                <li>Chemical Treatment</li>
                <li>ZLD Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Awards Section */}
      <Award />


      <style jsx>{`
        /* Global Variables - Matching Past Style */
        .cs-section {
          --primary: #0070c0;
          --secondary: #005a9e;
          --headerColor: #1a1a1a;
          --bodyTextColor: #4e4b66;
          --headerFontSize: clamp(1.75rem, 3vw, 2.5rem);
          --bodyFontSize: 1.05rem;
          --sectionPadding: clamp(3.5rem, 6vw, 7rem) 1rem;
        }

        .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Hero Section - Matching Past Style */
        .cs-hero {
           background: linear-gradient(rgba(244, 244, 244, 0.8), rgba(244, 244, 244, 0.6)),
    url('/f1.jpg') center/cover no-repeat;
          position: relative;
          overflow: hidden;
        }

        .cs-hero-content {
          text-align: center;
          max-width: 48rem;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .cs-topper {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--bodyTextColor);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .cs-topper:before {
          content: '';
          width: 28px;
          height: 2px;
          background: currentColor;
          opacity: 0.8;
        }

        .cs-hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 900;
          line-height: 1.15;
          margin: 0.5rem 0 1rem 0;
          color: var(--headerColor);
          letter-spacing: 0.01em;
        }

        .cs-hero-text {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          line-height: 1.75;
          margin: 0 0 1.5rem 0;
          color: var(--headerColor);
          opacity: 0.9;
        }

        /* About Company Section */
        #about-company {
          padding: var(--sectionPadding);
          background: #ffffff;
        }

        .cs-content-section {
          width: 100%;
        }

        #about-company .cs-topper {
          color: var(--primary);
        }

        .cs-title {
          font-size: var(--headerFontSize);
          font-weight: 900;
          line-height: 1.15;
          margin: 0.5rem 0 2rem 0;
          color: var(--headerColor);
          letter-spacing: 0.01em;
        }

        .cs-highlight {
          color: var(--primary);
        }

        .cs-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 64rem) {
          .cs-content-grid {
            grid-template-columns: 2fr 1fr;
            gap: 4rem;
          }
        }

        .cs-main-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cs-text {
          font-size: var(--bodyFontSize);
          line-height: 1.75;
          margin: 0;
          color: var(--bodyTextColor);
          opacity: 0.9;
        }

        .cs-text strong {
          color: var(--headerColor);
          font-weight: 700;
        }

        .cs-certification {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(0, 112, 192, 0.05);
          border: 1px solid rgba(0, 112, 192, 0.1);
          margin-top: 1rem;
        }

        @media (min-width: 48rem) {
          .cs-certification {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .cs-cert-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 600;
          color: var(--primary);
        }

        .cs-cert-icon {
          width: 20px;
          height: 20px;
          filter: brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1426%) hue-rotate(183deg) brightness(93%) contrast(101%);
        }

        .cs-address {
          font-size: 0.9rem;
          color: var(--bodyTextColor);
        }

        /* Stats Section - Matching Past Style */
        .cs-stats-section {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 48rem) {
          .cs-stats-section {
            grid-template-columns: 1fr;
          }
        }

        .cs-stat-card {
          background: rgba(0, 112, 192, 0.05);
          padding: 1.5rem;
          text-align: center;
          border: 1px solid rgba(0, 112, 192, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cs-stat-card:hover {
          background: rgba(0, 112, 192, 0.1);
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 10px 25px rgba(0, 112, 192, 0.15);
        }

        .cs-stat-number {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
          margin: 0 0 0.5rem 0;
          line-height: 1;
        }

        .cs-stat-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--headerColor);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Services Overview - Matching Past Style */
        #services {
          padding: var(--sectionPadding);
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        #services .cs-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        #services .cs-background-overlay {
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

        #services .cs-content {
          text-align: center;
          max-width: 48rem;
          margin: 0 auto 3rem auto;
        }

        .cs-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .cs-service-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 2.5rem 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cs-service-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 112, 192, 0.15);
        }

        .cs-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transform: scaleX(0);
          transition: transform 0.3s ease;
          z-index: 2;
        }

        .cs-service-card:hover::before {
          transform: scaleX(1);
        }

        .cs-service-icon {
          width: 80px;
          height: 80px;
          background: rgba(0, 112, 192, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          transition: all 0.3s ease;
          position: relative;
        }

        .cs-service-card:hover .cs-service-icon {
          background: var(--primary);
          transform: scale(1.1);
        }

        .cs-service-icon img {
          width: 40px;
          height: 40px;
          transition: all 0.3s ease;
        }

        .cs-service-card:hover .cs-service-icon img {
          filter: brightness(0) invert(1);
        }

        .cs-service-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--headerColor);
          margin: 0 0 1.5rem 0;
          text-align: center;
          transition: color 0.3s ease;
        }

        .cs-service-card:hover .cs-service-title {
          color: var(--primary);
        }

        .cs-service-list {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }

        .cs-service-list li {
          padding: 0.5rem 0;
          color: var(--bodyTextColor);
          position: relative;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .cs-service-list li:before {
          content: '•';
          color: var(--primary);
          font-weight: bold;
          margin-right: 0.5rem;
        }

        /* Footer Info - Matching Past Style */
        .cs-footer-info {
          padding: clamp(3rem, 5vw, 5rem) 1rem;
          background: var(--headerColor);
          color: white;
          position: relative;
        }

        .cs-footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .cs-footer-column .cs-topper {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 0.5rem;
        }

        .cs-footer-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }

        .cs-footer-text,
        .cs-footer-list li {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0.5rem 0;
          font-size: 0.95rem;
        }

        .cs-footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cs-footer-list li {
          padding: 0.25rem 0;
          position: relative;
          padding-left: 1rem;
        }

        .cs-footer-list li:before {
          content: '•';
          color: var(--primary);
          position: absolute;
          left: 0;
        }

        .cs-contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cs-contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .cs-contact-item img {
          width: 16px;
          height: 16px;
          filter: brightness(0) invert(1);
          opacity: 0.8;
        }

        .cs-copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .cs-stat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .cs-stat-dot-primary {
          background: var(--primary);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-stat-card,
          .cs-service-card,
          .cs-service-icon,
          .cs-service-icon img {
            transition: none;
          }
          
          .cs-stat-card:hover,
          .cs-service-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  )
}

export default AboutPage