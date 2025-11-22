// page.tsx
'use client'
import React from 'react'

function PrivacyPolicy() {
  return (
    <>
      <style jsx>{`
        /* Privacy Policy Section Styles */
        #privacy-policy {
          padding: clamp(3rem, 6vw, 6rem) 1rem;
          background: #ffffff;
          position: relative;
        }

        #privacy-policy .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        #privacy-policy .cs-content {
          text-align: left;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        #privacy-policy .cs-topper {
          color: var(--primary, #0070c0);
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.9rem;
        }

        #privacy-policy .cs-title {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 900;
          line-height: 1.2em;
          margin: 0 0 1.5rem 0;
          color: var(--headerColor, #1a1a1a);
          position: relative;
        }

        #privacy-policy .cs-title:after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 60px;
          height: 3px;
          background: var(--primary, #0070c0);
        }

        #privacy-policy .cs-meta {
          color: var(--bodyTextColor, #4a4a4a);
          font-size: 0.95rem;
          margin-bottom: 2rem;
          padding: 1rem;
          background: rgba(0, 112, 192, 0.05);
          border-left: 3px solid var(--primary, #0070c0);
        }

        #privacy-policy .cs-section {
          margin-bottom: 3rem;
        }

        #privacy-policy .cs-section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--headerColor, #1a1a1a);
          margin: 0 0 1.5rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(0, 112, 192, 0.1);
        }

        #privacy-policy .cs-subsection {
          margin-bottom: 2rem;
        }

        #privacy-policy .cs-subsection-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary, #0070c0);
          margin: 0 0 1rem 0;
        }

        #privacy-policy .cs-text {
          font-size: 1rem;
          line-height: 1.7em;
          margin: 0 0 1.5rem 0;
          color: var(--bodyTextColor, #4a4a4a);
        }

        #privacy-policy .cs-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }

        #privacy-policy .cs-list-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          padding: 0.5rem 0;
        }

        #privacy-policy .cs-list-bullet {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          background: var(--primary, #0070c0);
          border-radius: 50%;
          margin-top: 0.5rem;
        }

        #privacy-policy .cs-list-content {
          flex: 1;
        }

        #privacy-policy .cs-term {
          font-weight: 700;
          color: var(--headerColor, #1a1a1a);
        }

        #privacy-policy .cs-definition {
          margin-left: 0.5rem;
        }

        #privacy-policy .cs-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          background: #fff;
          border: 1px solid #e0e0e0;
        }

        #privacy-policy .cs-table th {
          background: rgba(0, 112, 192, 0.1);
          color: var(--headerColor, #1a1a1a);
          font-weight: 600;
          text-align: left;
          padding: 1rem;
          border: 1px solid #e0e0e0;
        }

        #privacy-policy .cs-table td {
          padding: 1rem;
          border: 1px solid #e0e0e0;
          vertical-align: top;
        }

        #privacy-policy .cs-contact-info {
          background: rgba(0, 112, 192, 0.05);
          padding: 2rem;
          border-radius: 0;
          margin: 2rem 0;
        }

        #privacy-policy .cs-contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 0.5rem 0;
        }

        #privacy-policy .cs-contact-icon {
          width: 20px;
          height: 20px;
          color: var(--primary, #0070c0);
        }

        #privacy-policy .cs-note {
          background: rgba(0, 112, 192, 0.05);
          padding: 1.5rem;
          border-left: 4px solid var(--primary, #0070c0);
          margin: 2rem 0;
          font-style: italic;
        }

        /* Tablet - 768px */
        @media only screen and (min-width: 48rem) {
          #privacy-policy .cs-container {
            gap: 4rem;
          }

          #privacy-policy .cs-content {
            max-width: 100%;
          }
        }

        /* Desktop - 1024px */
        @media only screen and (min-width: 64rem) {
          #privacy-policy .cs-container {
            gap: 5rem;
          }
        }

        /* Large Desktop - 1200px */
        @media only screen and (min-width: 75rem) {
          #privacy-policy {
            padding: clamp(4rem, 8vw, 8rem) 1rem;
          }
        }
      `}</style>

      <section id="privacy-policy">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Legal</span>
            <h1 className="cs-title">Privacy Policy</h1>
            
            <div className="cs-meta">
              <strong>Last updated:</strong> November 21, 2025
            </div>

            <div className="cs-section">
              <p className="cs-text">
                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="cs-text">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            <div className="cs-section">
              <h2 className="cs-section-title">Interpretation and Definitions</h2>
              
              <div className="cs-subsection">
                <h3 className="cs-subsection-title">Interpretation</h3>
                <p className="cs-text">
                  The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div className="cs-subsection">
                <h3 className="cs-subsection-title">Definitions</h3>
                <p className="cs-text">For the purposes of this Privacy Policy:</p>
                
                <ul className="cs-list">
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Account</span>
                      <span className="cs-definition">means a unique account created for You to access our Service or parts of our Service.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Affiliate</span>
                      <span className="cs-definition">means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Company</span>
                      <span className="cs-definition">(referred to as either "the Company," "We," "Us," or "Our" in this Agreement) refers to BRAINTECHH ENGINEERS PRIVATE LIMITED.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Cookies</span>
                      <span className="cs-definition">are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Country</span>
                      <span className="cs-definition">refers to: Uttar Pradesh, India.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Device</span>
                      <span className="cs-definition">means any device that can access the Service such as a computer, a cell phone, or a digital tablet.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Personal Data</span>
                      <span className="cs-definition">is any information that relates to an identified or identifiable individual.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Service</span>
                      <span className="cs-definition">refers to the Website.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Service Provider</span>
                      <span className="cs-definition">means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Usage Data</span>
                      <span className="cs-definition">refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">Website</span>
                      <span className="cs-definition">refers to BRAINTECHH ENGINEERS PRIVATE LIMITED, accessible from https://www.braintechh.com/</span>
                    </div>
                  </li>
                  
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">
                      <span className="cs-term">You</span>
                      <span className="cs-definition">means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cs-section">
              <h2 className="cs-section-title">Collecting and Using Your Personal Data</h2>
              
              <div className="cs-subsection">
                <h3 className="cs-subsection-title">Types of Data Collected</h3>
                
                <div className="cs-subsection">
                  <h4 className="cs-subsection-title">Personal Data</h4>
                  <p className="cs-text">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="cs-list">
                    <li className="cs-list-item">
                      <div className="cs-list-bullet"></div>
                      <div className="cs-list-content">Email address</div>
                    </li>
                    <li className="cs-list-item">
                      <div className="cs-list-bullet"></div>
                      <div className="cs-list-content">First name and last name</div>
                    </li>
                    <li className="cs-list-item">
                      <div className="cs-list-bullet"></div>
                      <div className="cs-list-content">Phone number</div>
                    </li>
                    <li className="cs-list-item">
                      <div className="cs-list-bullet"></div>
                      <div className="cs-list-content">Address, State, Province, ZIP/Postal code, City</div>
                    </li>
                  </ul>
                </div>
                
                <div className="cs-subsection">
                  <h4 className="cs-subsection-title">Usage Data</h4>
                  <p className="cs-text">
                    Usage Data is collected automatically when using the Service.
                  </p>
                  <p className="cs-text">
                    Usage Data may include information such as Your Device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
                  </p>
                </div>
              </div>

              <div className="cs-subsection">
                <h3 className="cs-subsection-title">Tracking Technologies and Cookies</h3>
                <p className="cs-text">
                  We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                </p>
                
                <table className="cs-table">
                  <thead>
                    <tr>
                      <th>Cookie Type</th>
                      <th>Administered by</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Necessary / Essential Cookies (Session Cookies)</td>
                      <td>Us</td>
                      <td>These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.</td>
                    </tr>
                    <tr>
                      <td>Cookies Policy / Notice Acceptance Cookies (Persistent Cookies)</td>
                      <td>Us</td>
                      <td>These Cookies identify if users have accepted the use of cookies on the Website.</td>
                    </tr>
                    <tr>
                      <td>Functionality Cookies (Persistent Cookies)</td>
                      <td>Us</td>
                      <td>These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="cs-subsection">
                <h3 className="cs-subsection-title">Use of Your Personal Data</h3>
                <p className="cs-text">The Company may use Personal Data for the following purposes:</p>
                <ul className="cs-list">
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">To provide and maintain our Service, including to monitor the usage of our Service.</div>
                  </li>
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">To manage Your Account: to manage Your registration as a user of the Service.</div>
                  </li>
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">For the performance of a contract: the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service.</div>
                  </li>
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, regarding updates or informative communications related to the functionalities, products, or contracted services.</div>
                  </li>
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">To provide You with news, special offers, and general information about other goods, services, and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.</div>
                  </li>
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">To manage Your requests: To attend and manage Your requests to Us.</div>
                  </li>
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, in which Personal Data held by Us about our Service users is among the assets transferred.</div>
                  </li>
                  <li className="cs-list-item">
                    <div className="cs-list-bullet"></div>
                    <div className="cs-list-content">For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Service, products, services, marketing, and your experience.</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="cs-section">
              <h2 className="cs-section-title">Contact Us</h2>
              <p className="cs-text">
                If you have any questions about this Privacy Policy, You can contact us:
              </p>
              
              <div className="cs-contact-info">
                <div className="cs-contact-item">
                  <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>By email: ho@braintechh.com</span>
                </div>
                
                <div className="cs-contact-item">
                  <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>By visiting this page on our website: https://www.braintechh.com/contact-us</span>
                </div>
                
                <div className="cs-contact-item">
                  <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>By phone: 0120-4048261</span>
                </div>
                
                <div className="cs-contact-item">
                  <svg className="cs-contact-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>By mail: Plot No. 606, Rajendra Nagar, Sector-3, Vasundhra, Ghaziabad, UP – 201012 (Delhi NCR)</span>
                </div>
              </div>
            </div>

            <div className="cs-note">
              <p className="cs-text">
                <strong>Note:</strong> This is a summarized version of our Privacy Policy. For the complete detailed policy including information about data retention, transfer, deletion, disclosure, security, and children's privacy, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy