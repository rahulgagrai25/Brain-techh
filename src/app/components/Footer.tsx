'use client'
import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx>{`
        /* Footer Section */
        #footer {
          --primary: #0070c0;
          --secondary: #005a9e;
          --dark: #1a1a1a;
          --darker: #0f0f0f;
          --light: #ffffff;
          --gray: #666666;
          --lightGray: #f8f9fa;

          background: linear-gradient(135deg, var(--darker) 0%, var(--dark) 100%);
          color: var(--light);
          position: relative;
          overflow: hidden;
        }

        #footer:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--primary) 50%, transparent 100%);
        }

        #footer .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          padding: clamp(3rem, 5vw, 4rem) 1rem 1.5rem;
        }

        /* Main Footer Content */
        #footer .cs-main-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        /* Company Info - Centered */
        #footer .cs-company-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        #footer .cs-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        #footer .cs-logo img {
          height: 50px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        #footer .cs-company-description {
          color: #cccccc;
          line-height: 1.6;
          font-size: 0.95rem;
          max-width: 100%;
          margin: 0 auto;
        }

        #footer .cs-social-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        #footer .cs-social-link {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        #footer .cs-social-link:hover {
          background: var(--primary);
          transform: translateY(-2px);
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(0, 112, 192, 0.3);
        }

        /* Links Sections */
        #footer .cs-links-section h3 {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: var(--light);
          position: relative;
        }

        #footer .cs-links-section h3:after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          width: 30px;
          height: 2px;
          background: var(--primary);
        }

        #footer .cs-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        #footer .cs-links-list li {
          margin: 0;
        }

        #footer .cs-links-list a {
          color: #cccccc;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        #footer .cs-links-list a:before {
          content: '›';
          color: var(--primary);
          font-weight: bold;
          transition: transform 0.3s ease;
        }

        #footer .cs-links-list a:hover {
          color: var(--light);
          transform: translateX(5px);
        }

        #footer .cs-links-list a:hover:before {
          transform: translateX(3px);
        }

        /* Contact Info */
        #footer .cs-contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        #footer .cs-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #cccccc;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        #footer .cs-contact-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        /* Bottom Bar */
        #footer .cs-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
        }

        #footer .cs-copyright {
          color: #999999;
          font-size: 0.875rem;
        }

        #footer .cs-legal-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        #footer .cs-legal-links a {
          color: #999999;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }

        #footer .cs-legal-links a:hover {
          color: var(--primary);
        }

        /* Tablet - 768px */
        @media only screen and (min-width: 48rem) {
          #footer .cs-main-content {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem;
          }

          #footer .cs-company-info {
            grid-column: 1 / -1;
            margin-bottom: 3rem;
          }

          /* Quick Links - Left */
          #footer .cs-quick-links {
            text-align: left;
          }

          #footer .cs-quick-links h3:after {
            left: 0;
          }

          #footer .cs-quick-links .cs-links-list a {
            justify-content: flex-start;
          }

          /* Services - Center */
          #footer .cs-services {
            text-align: center;
          }

          #footer .cs-services h3:after {
            left: 50%;
            transform: translateX(-50%);
          }

          #footer .cs-services .cs-links-list a {
            justify-content: center;
          }

          /* Contact Us - Right */
          #footer .cs-contact-us {
            text-align: right;
          }

          #footer .cs-contact-us h3:after {
            right: 0;
          }

          #footer .cs-contact-us .cs-contact-info {
            align-items: flex-end;
          }

          #footer .cs-contact-us .cs-contact-item {
            justify-content: flex-end;
            text-align: right;
          }

          #footer .cs-bottom-bar {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }

          #footer .cs-company-description {
            max-width: 500px;
          }
        }

        /* Desktop - 1024px */
        @media only screen and (min-width: 64rem) {
          #footer .cs-main-content {
            gap: 3rem;
          }

          #footer .cs-logo img {
            height: 60px;
          }
        }

        /* Large Desktop - 1200px */
        @media only screen and (min-width: 75rem) {
          #footer .cs-container {
            padding: clamp(4rem, 6vw, 5rem) 1rem 2rem;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          #footer .cs-social-link,
          #footer .cs-links-list a {
            transition: none;
          }
          
          #footer .cs-social-link:hover,
          #footer .cs-links-list a:hover {
            transform: none;
          }
        }
      `}</style>

      <footer id="footer">
        <div className="cs-container">
          {/* Main Footer Content */}
          <div className="cs-main-content">
            {/* Company Info - Centered */}
            <div className="cs-company-info">
              <div className="cs-logo">
                <img src="./logo.png" alt="Company Logo" className='h-30 w-auto' />
              </div>
              <p className="cs-company-description">
                Leading industrial solutions provider with decades of experience in power plant maintenance, engineering consultancy, and project services.
              </p>
              <p className="cs-company-description">
                GST: 09AAMCB5354P1ZX<br/>
                CIN: U42909UP2024PYC201485<br/>
                ISO 9001:2015 (certificate no. 305025102907Q)
              </p>
              <div className="cs-social-links">
                <a href="https://www.linkedin.com/in/manvendra-singh-7163aa30/?originalSubdomain=in" className="cs-social-link" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="cs-social-link" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100084798541072" className="cs-social-link" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* <a href="https://www.instagram.com/engineersbraintech?igsh=MWFkYXBxcDBmdHhveQ==" className="cs-social-link" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.703-3.061-1.753-.613-1.05-.613-2.346 0-3.396.613-1.05 1.764-1.753 3.061-1.753s2.448.703 3.061 1.753c.613 1.05.613 2.346 0 3.396-.613 1.05-1.764 1.753-3.061 1.753z"/>
                  </svg>
                </a> */}
              </div>
            </div>

            {/* Quick Links - Left */}
            <div className="cs-links-section cs-quick-links">
              <h3>Quick Links</h3>
              <ul className="cs-links-list">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/distillation">Distillation Process</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Services Links - Center */}
            <div className="cs-links-section cs-services">
              <h3>Services</h3>
              <ul className="cs-links-list">
                <li><a href="/operation-maintenance">Operation & Maintenance</a></li>
                <li><a href="/engineering">Engineering</a></li>
                <li><a href="/project-services">Project Services</a></li>
                <li><a href="/maintenance">Annual Maintenance</a></li>
                <li><a href="/breakdown">Breakdown Services</a></li>
              </ul>
            </div>

            {/* Contact Info - Right */}
            <div className="cs-links-section cs-contact-us">
              <h3>Contact Us</h3>
              <div className="cs-contact-info">
                <div className="cs-contact-item">
                  <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  <span>SF, 10/2, Unnati Apartment, Sector-3, Rajendra Nagar<br />Ghaziabad, Uttar Pradesh – 201005</span>
                </div>
                <div className="cs-contact-item">
                  <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  <span> Corporate Office: Plot No. 606, Rajendra Nagar,<br/>Sector-3, Vasundhra, Ghaziabad,<br/>UP – 
                          201012 (Delhi NCR)</span>
                </div>
                <div className="cs-contact-item">
                  <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>0120-4048261, 9719671863, 9315902512</span>
                </div>
                <div className="cs-contact-item">
                  <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <p>braintechengineers@yahoo.com<br/>braintech@engineer.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="cs-bottom-bar">
            <div className="cs-copyright">
              © {currentYear} Braintechh Engineers Private Limited. All rights reserved.<br/>Developed by Apparotech Innovation.
            </div>
            <div className="cs-legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer