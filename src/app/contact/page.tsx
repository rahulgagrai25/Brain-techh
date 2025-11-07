'use client'
import React from 'react'

function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-container">
          <div className="cs-hero-content">
            <h1 className="cs-hero-title">Get In Touch</h1>
            <p className="cs-hero-text">
              Ready to optimize your plant performance? Contact us today to discuss how our 
              comprehensive services can help your business achieve maximum efficiency and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-contact-grid">
            {/* Contact Information */}
            <div className="cs-contact-info">
              <div className="cs-content">
                <span className="cs-topper">Contact Us</span>
                <h2 className="cs-title">Let's Start a <span className="cs-highlight">Conversation</span></h2>
                <p className="cs-text">
                  We're here to help you with all your industrial plant needs. Get in touch with our 
                  experts for consultation, project discussions, or maintenance services.
                </p>
              </div>

              <div className="cs-contact-details">
                <div className="cs-contact-item">
                  <div className="cs-contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636Z" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="cs-contact-content">
                    <h3 className="cs-contact-title">Office Address</h3>
                    <p className="cs-contact-text">
                      Braintechh Engineers Private Limited<br />
                      Plot No. 606, Rajendra Nagar, Sector-3, Vasundhra<br />
                      Ghaziabad, UP – 201012 (Delhi NCR)
                    </p>
                  </div>
                </div>

                <div className="cs-contact-item">
                  <div className="cs-contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="cs-contact-content">
                    <h3 className="cs-contact-title">Phone Number</h3>
                    <p className="cs-contact-text">
                        <a href="tel:+0120-4048261" className="cs-contact-link">+0120-4048261</a><br/>
                      <a href="tel:+919719671863" className="cs-contact-link">+91 97196 71863</a><br/>
                      <a href="tel:+919315902512" className="cs-contact-link">+91 93159 02512</a>
                    </p>
                  </div>
                </div>

                <div className="cs-contact-item">
                  <div className="cs-contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="cs-contact-content">
                    <h3 className="cs-contact-title">Email Address</h3>
                    <p className="cs-contact-text">
                      <a href="mailto:braintech@engineer.com" className="cs-contact-link">
                        braintech@engineer.com
                      </a><br/>
                      <a href="mailto:braintechengineers@yahoo.com" className="cs-contact-link">
                        braintechengineers@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* <div className="cs-contact-item">
                  <div className="cs-contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="#0070c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="cs-contact-content">
                    <h3 className="cs-contact-title">Business Hours</h3>
                    <p className="cs-contact-text">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="cs-contact-form">
              <form className="cs-form">
                <div className="cs-form-group">
                  <label htmlFor="name" className="cs-form-label">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="cs-form-input" 
                    placeholder="Enter your full name"
                    required 
                  />
                </div>

                <div className="cs-form-group">
                  <label htmlFor="email" className="cs-form-label">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="cs-form-input" 
                    placeholder="Enter your email address"
                    required 
                  />
                </div>

                <div className="cs-form-group">
                  <label htmlFor="phone" className="cs-form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="cs-form-input" 
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="cs-form-group">
                  <label htmlFor="company" className="cs-form-label">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="cs-form-input" 
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="cs-form-group">
                  <label htmlFor="service" className="cs-form-label">Service Interested In</label>
                  <select id="service" name="service" className="cs-form-select">
                    <option value="">Select a service</option>
                    <option value="operation-maintenance">Operation & Maintenance (O&M)</option>
                    <option value="overhauling">Overhauling, Re-Rating & Upgrading</option>
                    <option value="project-services">Project Services</option>
                    <option value="maintenance-contracts">Maintenance Contracts</option>
                    <option value="specialized-services">Specialized Services</option>
                    <option value="maintenance-support">Complete Maintenance Support</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div className="cs-form-group">
                  <label htmlFor="message" className="cs-form-label">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="cs-form-textarea" 
                    rows={5}
                    placeholder="Tell us about your project or requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="cs-form-button">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      

      <style jsx>{`
        /* Global Variables - Matching Your Style */
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

        /* Hero Section */
        .cs-hero {
          padding: 5rem 1rem;
          background: linear-gradient(rgba(244, 244, 244, 0.8), rgba(244, 244, 244, 0.6)),
                      url('/f1.jpg') center/cover no-repeat;
          text-align: center;
        }

        .cs-hero-content {
          max-width: 48rem;
          margin: 0 auto;
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
          color: var(--bodyTextColor);
          opacity: 0.9;
        }

        /* Main Contact Section */
        .cs-section {
          padding: var(--sectionPadding);
          background: #ffffff;
        }

        .cs-contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 48rem) {
          .cs-contact-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }

        .cs-content {
          text-align: left;
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

        /* Contact Details */
        .cs-contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: 2rem;
        }

        .cs-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .cs-contact-item:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 112, 192, 0.15);
        }

        .cs-contact-icon {
          width: 48px;
          height: 48px;
          background: rgba(0, 112, 192, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        

        .cs-contact-icon svg {
          transition: all 0.3s ease;
        }

        .cs-contact-item:hover .cs-contact-icon svg {
          stroke: white;
        }

        .cs-contact-content {
          flex: 1;
        }

        .cs-contact-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--headerColor);
          margin: 0 0 0.5rem 0;
        }

        .cs-contact-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--bodyTextColor);
          margin: 0;
          opacity: 0.9;
        }

        .cs-contact-link {
          color: var(--primary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .cs-contact-link:hover {
          color: var(--secondary);
        }

        /* Contact Form */
        .cs-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cs-form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .cs-form-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--headerColor);
        }

        .cs-form-input,
        .cs-form-select,
        .cs-form-textarea {
          padding: 0.875rem 1rem;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          width: 100%;
        }

        .cs-form-input:focus,
        .cs-form-select:focus,
        .cs-form-textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 112, 192, 0.1);
        }

        .cs-form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .cs-form-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: var(--primary);
          color: #ffffff;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .cs-form-button:hover {
          background: var(--secondary);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 112, 192, 0.25);
        }

        /* Service Areas Section */
        .cs-service-areas {
          background: #f8fafc;
        }

        .cs-service-areas .cs-content {
          text-align: center;
          max-width: 48rem;
          margin: 0 auto 3rem auto;
        }

        .cs-areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .cs-area-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cs-area-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 10px 25px rgba(0, 112, 192, 0.15);
        }

        .cs-area-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .cs-area-card:hover::before {
          transform: scaleX(1);
        }

        .cs-area-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--headerColor);
          margin: 0 0 1rem 0;
        }

        .cs-area-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--bodyTextColor);
          margin: 0;
          opacity: 0.9;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-contact-item,
          .cs-contact-icon,
          .cs-form-button,
          .cs-area-card {
            transition: none;
          }
          
          .cs-contact-item:hover,
          .cs-form-button:hover,
          .cs-area-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  )
}

export default ContactPage