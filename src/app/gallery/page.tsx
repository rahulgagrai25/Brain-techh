// page.tsx
'use client'
import React, { useState } from 'react';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1620203853151-496c7228306c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1296",
      alt: "Power Plant Maintenance",
      category: "maintenance",
      title: "Thermal Power Plant O&M"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      alt: "Industrial Equipment",
      category: "equipment",
      title: "Process Equipment Installation"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      alt: "Turbine Overhauling",
      category: "maintenance",
      title: "Turbine Overhauling Services"
    },
    {
      id: 4,
      src: "https://braintechh.com/wp-content/uploads/2021/11/istockphoto-181803397-612x612-1.jpg",
      alt: "Engineering Team",
      category: "team",
      title: "Expert Engineering Team"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1688694554481-353762e2c905?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113",
      alt: "Solar Power Plant",
      category: "projects",
      title: "Solar Power Plant Commissioning"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1611581372056-30cf28a7bd2e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      alt: "Industrial Maintenance",
      category: "maintenance",
      title: "Annual Maintenance Work"
    },
    {
      id: 7,
      src: "https://plus.unsplash.com/premium_photo-1661899192117-f0139efddb1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Water Treatment",
      category: "equipment",
      title: "Water Treatment Solutions"
    },
    {
      id: 8,
      src: "https://cgu-odisha.ac.in/wp-content/uploads/2023/05/1_xqAM05_tfNP7VCcE0VAYzw-2048x1408-1.jpeg",
      alt: "Technical Work",
      category: "team",
      title: "Technical Expertise"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1740346125849-a0367efd9590?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Project Completion",
      category: "projects",
      title: "Project Handover"
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'projects', name: 'Projects' },
    { id: 'team', name: 'Our Team' }
  ];

  // Filter images based on active category
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <>
      {/* ============================================ */}
      {/*                   Gallery                   */}
      {/* ============================================ */}

      <section id="gallery">
        {/* Background with Overlay */}
        <div className="cs-background">
          <div className="cs-background-overlay"></div>
        </div>

        <div className="cs-container">
          <div className="cs-content">
            {/* <span className="cs-topper">Our Gallery</span> */}
            <h2 className="cs-title">Gallery</h2>
            <p className="cs-text">
              Explore our extensive portfolio of successful projects, maintenance works, 
              and engineering solutions across various industries.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="cs-filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`cs-filter-btn ${activeFilter === category.id ? 'cs-active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="cs-gallery-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`cs-gallery-item cs-category-${image.category}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cs-image-container">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="cs-gallery-image"
                  />
                  <div className="cs-image-overlay">
                    <div className="cs-overlay-content">
                      <h3 className="cs-image-title">{image.title}</h3>
                      <span className="cs-image-category">{image.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="cs-button-container">
            <button className="cs-button-solid">
              Load More Projects
              <img 
                className="cs-button-arrow" 
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/white-arrow-up.svg" 
                decoding="async" 
                alt="arrow" 
                width="20" 
                height="20" 
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Gallery Section Styles */
        #gallery {
          padding: var(--sectionPadding, clamp(3rem, 6vw, 6rem) 1rem);
          position: relative;
          z-index: 1;
          background: #f8f9fa;
        }

        /* Background Styles */
        #gallery .cs-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        #gallery .cs-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.95) 50%,
            rgba(255, 255, 255, 0.98) 100%
          );
        }

        /* Container Styles */
        #gallery .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        /* Content Styles */
        #gallery .cs-content {
          text-align: center;
          width: 100%;
          max-width: 48rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #gallery .cs-topper {
          color: var(--primary, #0070c0);
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
        }

        #gallery .cs-title {
          font-size: var(--headerFontSize, clamp(2rem, 4vw, 3rem));
          font-weight: 900;
          line-height: 1.2em;
          margin: 0 0 1rem 0;
          color: var(--headerColor, #1a1a1a);
          position: relative;
        }

        #gallery .cs-title:after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: var(--primary, #0070c0);
          border-radius: 2px;
        }

        #gallery .cs-text {
          font-size: var(--bodyFontSize, 1.125rem);
          line-height: 1.6em;
          margin: 0;
          color: var(--bodyTextColor, #4a4a4a);
          max-width: 40rem;
        }

        /* Filter Buttons */
        #gallery .cs-filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 1rem 0;
        }

        #gallery .cs-filter-btn {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 2px solid var(--primary, #0070c0);
          color: var(--primary, #0070c0);
          font-weight: 600;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 0;
        }

        #gallery .cs-filter-btn:hover {
          background: rgba(0, 112, 192, 0.1);
          transform: translateY(-2px);
        }

        #gallery .cs-filter-btn.cs-active {
          background: var(--primary, #0070c0);
          color: #fff;
        }

        /* Gallery Grid */
        #gallery .cs-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          width: 100%;
        }

        #gallery .cs-gallery-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
          background: #fff;
          border: 1px solid #e0e0e0;
          transition: all 0.3s ease;
        }

        #gallery .cs-gallery-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: var(--primary, #0070c0);
        }

        #gallery .cs-image-container {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        #gallery .cs-gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        #gallery .cs-gallery-item:hover .cs-gallery-image {
          transform: scale(1.05);
        }

        #gallery .cs-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.1) 30%,
            rgba(0, 0, 0, 0.8) 100%
          );
          opacity: 0;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
        }

        #gallery .cs-gallery-item:hover .cs-image-overlay {
          opacity: 1;
        }

        #gallery .cs-overlay-content {
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        #gallery .cs-gallery-item:hover .cs-overlay-content {
          transform: translateY(0);
        }

        #gallery .cs-image-title {
          color: #fff;
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        #gallery .cs-image-category {
          color: var(--primary, #0070c0);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.25rem 0.75rem;
          display: inline-block;
        }

        /* Button Container */
        #gallery .cs-button-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        #gallery .cs-button-solid {
          font-size: 1rem;
          text-align: center;
          line-height: clamp(2.875rem, 5.5vw, 3.5rem);
          text-decoration: none;
          font-weight: 700;
          overflow: hidden;
          margin: 0;
          color: #fff;
          padding: 0 2rem;
          background-color: var(--primary, #0070c0);
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

        #gallery .cs-button-solid:before {
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

        #gallery .cs-button-solid:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 192, 0.3);
        }

        #gallery .cs-button-solid:hover:before {
          width: 100%;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile - Add margin-top to cs-content */
        @media only screen and (max-width: 47.9375rem) {
          #gallery .cs-content {
            margin-top: 50px;
          }
        }

        /* Tablet - 768px */
        @media only screen and (min-width: 48rem) {
          #gallery .cs-gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
          }

          #gallery .cs-filter-buttons {
            gap: 1.5rem;
          }

          #gallery .cs-filter-btn {
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        /* Desktop - 1024px */
        @media only screen and (min-width: 64rem) {
          #gallery .cs-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          #gallery .cs-container {
            gap: 4rem;
          }
        }

        /* Large Desktop - 1200px */
        @media only screen and (min-width: 75rem) {
          #gallery {
            padding: clamp(4rem, 8vw, 8rem) 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Gallery;