'use client';
import React from 'react';

function Award() {
  const awards = [
    {
      id: 1,
      image: "https://media.licdn.com/dms/image/v2/D4D22AQFFI3PWMlwPqg/feedshare-shrink_1280/B4DZc7E5YlG8Ao-/0/1749042830290?e=1764201600&v=beta&t=hky53cPbNll2iDIQ18kQ3KtGaaNsrT98Yb-2YZSo--4",
      title: "Award in Biofuel Sector",
      subtitle: "by Delhi Cabinet Minister",
      description: "Recognized for outstanding contributions and innovations in the biofuel sector, showcasing our commitment to sustainable energy solutions."
    },
    {
      id: 2,
      image: "https://media.licdn.com/dms/image/v2/D4D22AQELTV1c8Umc3A/feedshare-shrink_1280/B4DZnJ19m6JUAs-/0/1760027992583?e=1764201600&v=beta&t=ETCIM5x35sB3YHASq4NDRfEm5WsxFMLAGDSRwnzPiKo",
      title: "Recognition by Uttarakhand CM",
      subtitle: "Pushkar Singh Dhami for Engineering Innovation & Employment Creation",
      description: "Honored for exceptional engineering innovations and significant contributions to employment generation in the state of Uttarakhand."
    }
  ];

  return (
    <>
      <section id="awards" className="cs-section">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Awards & Recognition</span>
            <h2 className="cs-title">Our <span className="cs-highlight">Achievements</span></h2>
            <p className="cs-text">
              We are proud to be recognized for our excellence in engineering innovation, 
              sustainable energy solutions, and contributions to the industrial sector. 
              These accolades reflect our commitment to quality and innovation.
            </p>
          </div>

          <div className="cs-awards-grid">
            {awards.map((award) => (
              <div key={award.id} className="cs-award-card">
                <div className="cs-award-image-container">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="cs-award-image"
                  />
                  <div className="cs-award-overlay">
                    <div className="cs-award-badge">
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M12 15l-4.243-4.243m8.486 0L12 15m0 0l4.243-4.243M12 15l4.243 4.243M12 15l-4.243 4.243M6 20l2-6-4-4h6l2-6 2 6h6l-4 4 2 6-6-2-6 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="cs-award-content">
                  <h3 className="cs-award-title">{award.title}</h3>
                  <p className="cs-award-subtitle">{award.subtitle}</p>
                  <p className="cs-award-description">{award.description}</p>
                  
                  <div className="cs-award-footer">
                    <div className="cs-award-year">2025</div>
                    <div className="cs-award-category">Excellence Award</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="cs-awards-stats">
            <div className="cs-stat-item">
              <div className="cs-stat-number">2+</div>
              <div className="cs-stat-label">National Awards</div>
            </div>
            <div className="cs-stat-item">
              <div className="cs-stat-number">5+</div>
              <div className="cs-stat-label">Years of Excellence</div>
            </div>
            <div className="cs-stat-item">
              <div className="cs-stat-number">100%</div>
              <div className="cs-stat-label">Industry Recognition</div>
            </div>
            <div className="cs-stat-item">
              <div className="cs-stat-number">50+</div>
              <div className="cs-stat-label">Projects Completed</div>
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
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
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

        /* Awards Grid */
        .cs-awards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }

        @media (min-width: 48rem) {
          .cs-awards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }

        /* Award Card */
        .cs-award-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.03);
        }

        .cs-award-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px rgba(0, 112, 192, 0.15);
        }

        .cs-award-card::before {
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

        .cs-award-card:hover::before {
          transform: scaleX(1);
        }

        /* Award Image */
        .cs-award-image-container {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .cs-award-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .cs-award-card:hover .cs-award-image {
          transform: scale(1.05);
        }

        .cs-award-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 112, 192, 0.1) 0%,
            rgba(0, 112, 192, 0.3) 100%
          );
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cs-award-card:hover .cs-award-overlay {
          opacity: 1;
        }

        .cs-award-badge {
          width: 50px;
          height: 50px;
          background: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transform: translateY(-20px);
          transition: transform 0.3s ease;
        }

        .cs-award-card:hover .cs-award-badge {
          transform: translateY(0);
        }

        /* Award Content */
        .cs-award-content {
          padding: 2rem;
        }

        .cs-award-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--headerColor);
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .cs-award-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary);
          margin: 0 0 1rem 0;
          line-height: 1.4;
        }

        .cs-award-description {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--bodyTextColor);
          margin: 0 0 1.5rem 0;
          opacity: 0.9;
        }

        .cs-award-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #e2e8f0;
        }

        .cs-award-year {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--primary);
          background: rgba(0, 112, 192, 0.1);
          padding: 0.25rem 0.75rem;
        }

        .cs-award-category {
          font-size: 0.9rem;
          color: var(--bodyTextColor);
          opacity: 0.8;
        }

        /* Awards Stats */
        .cs-awards-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid #e2e8f0;
        }

        @media (min-width: 48rem) {
          .cs-awards-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }

        .cs-stat-item {
          text-align: center;
          padding: 1.5rem;
          background: rgba(0, 112, 192, 0.05);
          border: 1px solid rgba(0, 112, 192, 0.1);
          transition: all 0.3s ease;
        }

        .cs-stat-item:hover {
          background: rgba(0, 112, 192, 0.1);
          transform: translateY(-4px);
          border-color: var(--primary);
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

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-award-card,
          .cs-award-image,
          .cs-award-overlay,
          .cs-award-badge,
          .cs-stat-item {
            transition: none;
          }
          
          .cs-award-card:hover {
            transform: none;
          }
          
          .cs-stat-item:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}

export default Award;