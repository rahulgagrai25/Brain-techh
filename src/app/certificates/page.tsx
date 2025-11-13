"use client";
import React, { useState } from "react";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "Certificate of Recognition - DPIIT Startup India",
      description:
        "Startup India Recognition Certificate awarded by DPIIT, acknowledging our commitment to innovation and growth in Green Technology and Industrial Services.",
      image: "/certificate/c1.png",
      issuedBy: "Department for Promotion of Industry and Internal Trade (DPIIT)",
      date: "02/10/2025",
      certificateNo: "DIPP224016",
    },
  ];

  const openModal = (certificate: any) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      {/* ============================================ */}
      {/*                 Certificates                 */}
      {/* ============================================ */}

      <section id="certificates">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Our Certifications</span>
            <h2 className="cs-title">Quality & Excellence Recognized</h2>
            <p className="cs-text">
              Braintechh Engineers is proud to hold numerous certifications and
              awards that demonstrate our commitment to quality, safety, and
              excellence in engineering services. Our certifications validate
              our dedication to maintaining the highest standards across all our
              operations.
            </p>
          </div>

          <div className="cs-certificate-group">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="cs-certificate-item">
                <div className="cs-image">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    width="400"
                    height="300"
                    decoding="async"
                  />
                  <div className="cs-overlay">
                    <button
                      className="cs-view-button"
                      onClick={() => openModal(certificate)}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
                <div className="cs-info">
                  <h3 className="cs-h3">{certificate.title}</h3>
                  <p className="cs-item-text">{certificate.description}</p>
                  <div className="cs-details">
                    <div className="cs-detail-item">
                      <span className="cs-detail-label">Issued By:</span>
                      <span className="cs-detail-value">
                        {certificate.issuedBy}
                      </span>
                    </div>
                    <div className="cs-detail-item">
                      <span className="cs-detail-label">Date:</span>
                      <span className="cs-detail-value">
                        {certificate.date}
                      </span>
                    </div>
                    <div className="cs-detail-item">
                      <span className="cs-detail-label">Certificate No:</span>
                      <span className="cs-detail-value">
                        {certificate.certificateNo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <div className={`cs-certificate-modal ${isModalOpen ? "active" : ""}`}>
          <div className="cs-modal-content">
            <button className="cs-modal-close" onClick={closeModal}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {selectedCertificate && (
              <>
                {/* <div className="cs-certificate-badge">{selectedCertificate.certificateNo}</div> */}
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="cs-modal-image"
                />
                <div className="cs-modal-info">
                  <h3>{selectedCertificate.title}</h3>
                  <p>{selectedCertificate.description}</p>
                  {/* <div className="cs-modal-details">
                    <div className="cs-modal-detail">
                      <strong>Issued By:</strong> {selectedCertificate.issuedBy}
                    </div>
                    <div className="cs-modal-detail">
                      <strong>Date:</strong> {selectedCertificate.date}
                    </div>
                    <div className="cs-modal-detail">
                      <strong>Certificate No:</strong>{" "}
                      {selectedCertificate.certificateNo}
                    </div>
                  </div> */}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Certificates Section Styles */
        #certificates {
          padding: var(--sectionPadding);
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          position: relative;
          z-index: 1;
        }

        #certificates .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        #certificates .cs-content {
          text-align: center;
          width: 100%;
          max-width: 48.75rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #certificates .cs-topper {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        #certificates .cs-title {
          font-size: var(--headerFontSize);
          font-weight: 900;
          line-height: 1.2em;
          margin: 0 0 1.5rem 0;
          color: var(--headerColor);
          position: relative;
        }

        #certificates .cs-title:after {
          content: "";
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
        }

        #certificates .cs-text {
          font-size: var(--bodyFontSize);
          line-height: 1.6em;
          margin: 0;
          color: var(--bodyTextColor);
          text-align: center;
        }

        /* Certificate Grid Styles */
        #certificates .cs-certificate-group {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          width: 100%;
        }

        #certificates .cs-certificate-item {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        #certificates .cs-certificate-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 112, 192, 0.15);
          border-color: var(--primaryLight);
        }

        #certificates .cs-image {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        #certificates .cs-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        #certificates .cs-certificate-item:hover .cs-image img {
          transform: scale(1.05);
        }

        #certificates .cs-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 112, 192, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        #certificates .cs-certificate-item:hover .cs-overlay {
          opacity: 1;
        }

        #certificates .cs-view-button {
          background: #fff;
          color: var(--primary);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        #certificates .cs-view-button:hover {
          background: var(--secondary);
          color: #fff;
          transform: translateY(-2px);
        }

        #certificates .cs-info {
          padding: 1.5rem;
        }

        #certificates .cs-h3 {
          font-size: 1.375rem;
          font-weight: 700;
          line-height: 1.2em;
          margin: 0 0 1rem 0;
          color: var(--headerColor);
        }

        #certificates .cs-item-text {
          font-size: 1rem;
          line-height: 1.5em;
          margin: 0 0 1.5rem 0;
          color: var(--bodyTextColor);
        }

        #certificates .cs-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        #certificates .cs-detail-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #f0f0f0;
        }

        #certificates .cs-detail-item:last-child {
          border-bottom: none;
        }

        #certificates .cs-detail-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--headerColor);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        #certificates .cs-detail-value {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--primary);
        }

        /* Certificate Modal Styles */
        #certificates .cs-certificate-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          padding: 1rem;
        }

        #certificates .cs-certificate-modal.active {
          opacity: 1;
          visibility: visible;
        }

        #certificates .cs-modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          transform: scale(0.8);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        #certificates .cs-certificate-modal.active .cs-modal-content {
          transform: scale(1);
        }

        #certificates .cs-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #d4d4d8;
          color: black;
          border: none;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
        }

        #certificates .cs-modal-close:hover {
          transform: rotate(90deg);
        }

        #certificates .cs-modal-image {
          width: 100%;
          height: auto;
          display: block;
        }

        #certificates .cs-certificate-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--primary);
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 2;
        }

        #certificates .cs-modal-info {
          padding: 1.5rem;
        }

        #certificates .cs-modal-info h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          color: var(--headerColor);
        }

        #certificates .cs-modal-info p {
          font-size: 1rem;
          line-height: 1.5em;
          margin: 0 0 1.5rem 0;
          color: var(--bodyTextColor);
        }

        #certificates .cs-modal-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        #certificates .cs-modal-detail {
          padding: 0.75rem;
          background: #f8f9fa;
          border-radius: 6px;
          font-size: 0.9rem;
        }

        #certificates .cs-modal-detail strong {
          color: var(--primary);
        }

        /* CSS Variables */
        :root {
          --primary: #0070c0;
          --primaryLight: #4a9fe9;
          --secondary: #005a9e;
          --secondaryLight: #4a9fe9;
          --headerColor: #1a1a1a;
          --bodyTextColor: #4e4b66;
          --bodyTextColorWhite: #fafbfc;
          --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);
          --headerFontSize: clamp(1.9375rem, 3.9vw, 3.0625rem);
          --bodyFontSize: 1rem;
          --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;
        }

        /* Mobile - Add margin-top to cs-content */
        @media only screen and (max-width: 47.9375rem) {
          #certificates .cs-content {
            margin-top: 100px;
          }
        }

        /* Tablet - 768px */
        @media only screen and (min-width: 48rem) {
          #certificates .cs-certificate-group {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          #certificates .cs-content {
            text-align: center;
          }

          #certificates .cs-title:after {
            left: 50%;
            transform: translateX(-50%);
          }

          #certificates .cs-modal-content {
            max-width: 80%;
            flex-direction: row;
          }

          #certificates .cs-modal-image {
            width: 60%;
            height: auto;
          }

          #certificates .cs-modal-info {
            width: 40%;
            padding: 2rem;
          }
        }

        /* Desktop - 1024px */
        @media only screen and (min-width: 64rem) {
          #certificates .cs-certificate-group {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }

          #certificates .cs-container {
            gap: 4rem;
          }

          #certificates .cs-modal-content {
            max-width: 70%;
          }
        }

        /* Large Desktop - 1200px */
        @media only screen and (min-width: 75rem) {
          #certificates {
            padding: clamp(4rem, 8vw, 8rem) 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Certificates;
