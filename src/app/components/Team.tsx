'use client';
import React, { useState } from 'react';

function Team() {
  const [isExpanded, setIsExpanded] = useState(false);

  const initialTeamMembers = [
    {
      name: "Mr. MANVENDRA SINGH",
      designation: "Managing Director",
      qualification: "M. Tech. Mech.",
      experience: "18-year Exp. Power, Energy & Alcohol Technology"
    },
    {
      name: "Mr. Satish Mohan Sharma",
      designation: "Sr. VP & Consultant (Sugar and Ethanol)",
      qualification: "",
      experience: "Life Time Achievement Award by (STAI)"
    },
    {
      name: "Mr. Tarun Kumar Nigam",
      designation: "Executive Director",
      qualification: "B. tech. (BOE)",
      experience: "17+ Year Exp. (in Various Fuel)"
    },
    {
      name: "Mr. Godwin Joseph",
      designation: "VP - (Marketing & Operation)",
      qualification: "B.Tech, BOE",
      experience: "40 Year Exp."
    }
  ];

  const allTeamMembers = [
    ...initialTeamMembers,
    {
      name: "Mr. Raju. Akhilandam",
      designation: "Sr. VP & Consultant",
      qualification: "",
      experience: "40+ Year Exp. DIFAT, & Alcohol Tech. N.S.I Kanpur - 1st Class - 1984-85"
    },
    {
      name: "Mrs. Priyanka Singh",
      designation: "Director (Finance & Commercial)",
      qualification: "B.com",
      experience: "15-year Exp."
    },
    {
      name: "Ajay Kumar Karan",
      designation: "Director Technical",
      qualification: "",
      experience: "24+ Year Exp. (ВОЕ)"
    },
    {
      name: "Mrs. Meenu Tomar",
      designation: "Head of Personnel",
      qualification: "MBA, HR",
      experience: "15-year Exp."
    },
    {
      name: "Mr. Uday Kumar Sharma",
      designation: "General Manager (Power plant)",
      qualification: "M. Tech, MBA, BOE",
      experience: "25 Year Exp."
    },
    {
      name: "Dr. Aakash Chaudhary",
      designation: "COO",
      qualification: "Ph.D. Chemistry",
      experience: "18-year Exp. as Scientist (Ph. D. Chemistry)"
    },
    {
      name: "Mr. D.P. Singh",
      designation: "General Manager Sugar",
      qualification: "Sugar tech. 1990",
      experience: "40 + Year Exp. in Sugar Industries"
    },
    {
      name: "Mr. Ankit Kumar Singh",
      designation: "Manager WTP & ETP (ZLD)",
      qualification: "MSc. Chemistry",
      experience: "20+ Year Exp."
    },
    {
      name: "Mr. Parveen Nara",
      designation: "Manager Digital Marketing",
      qualification: "",
      experience: "15+ Year Exp."
    },
    {
      name: "Gagan Tomar",
      designation: "Sr. Manager Account & Finance",
      qualification: "MBA",
      experience: "16-year Exp."
    },
    {
      name: "Mr. Sandeep Singh",
      designation: "General Manager Distillery",
      qualification: "Alcohol Tech. at 1998",
      experience: "28+ Year of Experience"
    },
    {
      name: "Mr. Ashok Kumar Singh",
      designation: "Head Mechanical",
      qualification: "",
      experience: "34 + Year exp. Sugar, Distillery, Power."
    },
    {
      name: "Mr. Pappu Kaushal",
      designation: "General Manager Electrical",
      qualification: "",
      experience: "35 + Year Exp."
    },
    {
      name: "Mr. Rajeev Mehta",
      designation: "Manager Distillery",
      qualification: "DIFAT NSI Kanpur",
      experience: "18+ Year Exp."
    },
    {
      name: "Mr. Sanjay Singh Yadav",
      designation: "Sr. Manager (E &I)",
      qualification: "M. Tech",
      experience: "18+ Year Exp."
    },
    {
      name: "Vinay Mohan",
      designation: "Sr. Exec. Engineer Marketing",
      qualification: "M. Tech",
      experience: "13 Year Exp. In Marketing"
    }
  ];

  const displayedMembers = isExpanded ? allTeamMembers : initialTeamMembers;

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <section id="team" className="cs-section">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Our Team</span>
            <h2 className="cs-title">Meet Our Expert <span className="cs-highlight">Team</span></h2>
            <p className="cs-text">
              Our team comprises experienced professionals with decades of expertise in power plants, 
              sugar technology, distillery operations, and industrial management. We bring together 
              technical excellence and strategic leadership to deliver exceptional results.
            </p>
          </div>

          <div className="cs-team-grid">
            {displayedMembers.map((member, index) => (
              <div key={index} className="cs-team-card">
                <div className="cs-team-content">
                  <h3 className="cs-member-name">{member.name}</h3>
                  <p className="cs-member-designation">{member.designation}</p>
                  {member.qualification && (
                    <p className="cs-member-qualification">{member.qualification}</p>
                  )}
                  <p className="cs-member-experience">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cs-accordion-container">
            <button 
              className={`cs-accordion-button ${isExpanded ? 'cs-expanded' : ''}`}
              onClick={toggleAccordion}
              aria-expanded={isExpanded}
            >
              {isExpanded ? 'Show Less Team Members' : 'View All Team Members'}
              <svg 
                className={`cs-accordion-arrow ${isExpanded ? 'cs-arrow-up' : 'cs-arrow-down'}`}
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
              >
                <path 
                  d="M5 7.5L10 12.5L15 7.5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
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
          background: #f8fafc;
        }

        .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .cs-content {
          text-align: center;
          max-width: 48rem;
          margin: 0 auto;
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

        .cs-team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .cs-team-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 2rem 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cs-team-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 10px 25px rgba(0, 112, 192, 0.15);
        }

        .cs-team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--primary);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .cs-team-card:hover::before {
          transform: scaleY(1);
        }

        .cs-team-content {
          position: relative;
          z-index: 1;
        }

        .cs-member-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--headerColor);
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .cs-member-designation {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary);
          margin: 0 0 0.75rem 0;
          line-height: 1.4;
        }

        .cs-member-qualification {
          font-size: 0.9rem;
          color: var(--bodyTextColor);
          margin: 0 0 0.5rem 0;
          opacity: 0.8;
          font-style: italic;
        }

        .cs-member-experience {
          font-size: 0.9rem;
          color: var(--bodyTextColor);
          margin: 0;
          line-height: 1.5;
          opacity: 0.9;
        }

        .cs-accordion-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .cs-accordion-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cs-accordion-button:hover {
          background: var(--primary);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 112, 192, 0.25);
        }

        .cs-accordion-button:active {
          transform: translateY(0);
        }

        .cs-accordion-arrow {
          transition: transform 0.3s ease;
        }

        .cs-arrow-down {
          transform: rotate(0deg);
        }

        .cs-arrow-up {
          transform: rotate(180deg);
        }

        .cs-accordion-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: var(--primary);
          border-radius: 50%;
          transition: all 0.3s ease;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cs-accordion-button:hover::before {
          width: 300px;
          height: 300px;
        }

        /* Animation for new cards when expanded */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cs-team-grid .cs-team-card:nth-child(n+5) {
          animation: fadeInUp 0.5s ease-out;
        }

        /* Tablet Styles */
        @media (min-width: 48rem) {
          .cs-team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        /* Desktop Styles */
        @media (min-width: 64rem) {
          .cs-team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Large Desktop Styles */
        @media (min-width: 80rem) {
          .cs-team-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-team-card,
          .cs-accordion-button,
          .cs-accordion-arrow {
            transition: none;
          }
          
          .cs-team-card:hover {
            transform: none;
          }
          
          .cs-accordion-button:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}

export default Team;