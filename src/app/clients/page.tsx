'use client'
import React from 'react'

function ClientsPage() {
  const clients = [
    {
      category: "Project and Maintenance Work",
      items: [
        {
          name: "Gulshan Polyols Ltd",
          location: "Boregaon, Dist- Chhindwara Madhya Pradesh",
          projects: [
            "Ash Handling System (Pneumatic) project for 90 TPH AFBC Boiler – (Completed)",
            "38 TPH Dual Fuel Feed handling project for 90 TPH AFBC Boiler – (Completed)"
          ]
        },
        {
          name: "Shree Siddhivinayak Distilleries Pvt Ltd",
          location: "Kagal, Kolhapur, Maharashtra",
          projects: [
            "Maintenance of 35 KLPD grain Base Distillery with 1.3 Mw Power plant"
          ]
        },
        {
          name: "Shree Renuka Sugars Ltd",
          location: "Vill- Havalga, Tal- Afzalpur, Gulbarga, Karnataka",
          projects: [
            "Erection & Commissioning 15 Mw Triveni Makes Back Pressure Turbine"
          ]
        },
        {
          name: "Yashwant Industries And Energy Private Limited",
          location: "Plot No D4 MIDC AreaA/p MIDC Shirala Tal- Shirala Shirala Sangli Maharashtra 415408",
          projects: [
            "16 TPH Boiler and 1.5 MW Bellis Turbine Overhauling and Maintenance"
          ]
        },
        {
          name: "Ashoka Paper mill",
          location: "Mohan Nagar, Ghaziabad UP",
          projects: [
            "Erection and commissioning of 3 mw Extraction cum Condensing STG - Completed"
          ]
        },
        {
          name: "South seas Private Limited",
          location: "Dahanu Road, Dist: Palghar, Maharashtra",
          projects: [
            "Maintenance & overhauling of 1.8 MWSTG, 18 TPH AFBC Boiler & Distillery"
          ]
        },
        {
          name: "SBEC Sugar Mill Limited",
          location: "Loyan Malakpur, Baraut, Dist- Bagpat Uttar Pradesh 250611",
          projects: [
            "Maintenance work of 28 TPH X 2 Nos., 32 TPH 1Nos. And Dumping grate and 77 TPH 1 Nos. Travelling Grate Boiler"
          ]
        },
        {
          name: "Dollex Agrotech Private Limited",
          location: "Datia MP",
          projects: [
            "Erection and Commissioning of 100 KLPD dual feed Distillery (Molasses, syrup, and Grain)",
            "Erection and Commissioning of 2.5 MW Co- Generation Plant"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - STEEL",
      items: [
        {
          name: "Shree Sidhbali Ispat Ltd",
          location: "Tadali, Maharashtra 442406",
          projects: [
            "20 MW POWER PLANT with Air cooled Condenser, 10 x3 WHRB Boilers and 75TPH CFBC boiler, Operation and Maintenance with Full Utilities"
          ]
        },
        {
          name: "Bihar Sponge Iron Ltd (VSPL, A Unit of Adhunik Group)",
          location: "Chandil, District- Sarai Kela, Jharkhand, Near Jamshedpur (Tata Nagar)",
          projects: [
            "10 MW POWER PLANT, 5 x2 MW turbine and 40 TPH and 30 TPH AFBC boiler, Operation and Maintenance with Full Utilities"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - CHEMICAL",
      items: [
        {
          name: "Prima Chemicals Limited",
          location: "Nangal Una Road, Naya Nangal (Punjab)",
          projects: [
            "Operation and Maintenance of 35 MW Turbine Generator Make – Siemens and Alternator -TDPS",
            "Operation and Maintenance of 150 TPH (CFBC) Boiler, Including Electrical, Instrument and Fuel handling system"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - SUGAR MILL & POWER PLANTS",
      items: [
        {
          name: "Dollex Aggrotech Private Limited",
          location: "Erai, Datia (M.P)",
          projects: [
            "Full power plant including Ro /DM, Electrical, Instrument, 65 TPH Travelling grate BOILER MAKE- ISEGC (Fuel– Bagasse) & Sugar Unit 2500 TCD",
            "3 MW BACKPRESSURE TURBINE MAKES – Bellies And 1 Nos. Fibrisor Turbine"
          ]
        },
        {
          name: "Shri Hiranayakeshi Sahakari Sakkare Karkhane Niyamit",
          location: "Sankeshwar , Dist. Belgavi, Karnataka",
          projects: [
            "3.5 MW STG makes -Triveni, 35 TPH Boiler Incineration Make- Thermax, CHP, And Water Treatment Plant",
            "120 KLPD Molasses Based Distillery"
          ]
        },
        {
          name: "ASHOK SAHAKARI SAKHAR KARKHANA LIMITED",
          location: "Ashoknagar, village: Nipani Wadgaon, Tal. Shrirampur, Dist. Ahmednagar, Maharashtra 413717",
          projects: [
            "2 MW STG makes -Triveni,22 TPH Boiler Incineration Make- Thermax, CHP, And Water Treatment Plant"
          ]
        },
        {
          name: "Loknete Baburao Patil Agro Industries Ltd",
          location: "Laxminagar, Angar, Tal. Mohol, Dist. Solapur, Maharashtra, Pin-413214",
          projects: [
            "35 TPH Boiler Operation and Maintenance and Partial Manpower in Boiling House"
          ]
        },
        {
          name: "Shree Narmada Khand Udyog Mandali",
          location: "Post - Timbi , Tal.- Nandod , Dist.- Narmada , Gujrat , PIN – 393140",
          projects: [
            "30 MW Power Plant and 120 TPH Boiler Operation and Maintenance (through Sitson India Ltd.)"
          ]
        },
        {
          name: "Parvati Sweetners And Power Limited",
          location: "Ditt: Gwalior MP",
          projects: [
            "2500 TCD sugar Unit with 2.5 MW Co-Generation Power plant"
          ]
        },
        {
          name: "Krushinath sugar private limited",
          location: "Ahmednagar, Maharashtra",
          projects: [
            "Full power plant including Ro /DM, Electrical, Instrument, 45 TPH Travelling grate BOILER (Fuel– Bagasse) & Sugar Unit 1250 TCD – Partial Manpower supply",
            "3 MW BACKPRESSURE TURBINE MAKES – Bellies And 1 Nos. Fibrisor Turbine",
            "O & M 60 KLPD Distillery Alog with 21 TPH Incineration Boiler and 2 MW Turbine"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - IPP",
      items: [
        {
          name: "Shree Kedareashwar Khandsari Udyog",
          location: "Vill. & PO. Nimbhora, Teh. Nizar Nimbhore 394370 Nizar Surat Gujarat",
          projects: [
            "18 MW Co-Generation Power plant, 90 TPH Travelling Grate Boiler"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - DISTILLERIES",
      items: [
        {
          name: "Ankoor Distillery Private Limited",
          location: "Village Jorsha & Teghoria, Tehsil Mejhia, District Bankura (West Bengal)",
          projects: [
            "Operation and Maintenance of 450 KLPD Grain Based Distillery Unit (Ethanol Production)"
          ]
        },
        {
          name: "Shree Katyani Green Fuels Private Limited",
          location: "Industrial Estate, Sahar Logate, Kathua- 184104, District - Kathua (J&K)",
          projects: [
            "Operation and Maintenance of 250 KLPD Grain Based Distillery Unit (Ethanol Production)"
          ]
        },
        {
          name: "MAA SHEETLA VENTURES LIMITED",
          location: "512 in village: Kashipur, Tehsil: Kiccha, District: Udham Singh Nagar, Uttarakhand",
          projects: [
            "Operation and Maintenance of 310 KLPD Grain Based Distillery Unit (Ethanol Production)"
          ]
        },
        {
          name: "Melker TTI Biofuels Limited",
          location: "Beradwadi at Post Bhadgoan, Taluka- Gadhiglaj, Kolhapur MH 416502 IN",
          projects: [
            "Operation and Maintenance of 30 KLPD grain-based Distillery and 1 MW STG makes -Bellies, 12 TPH Boiler Make CVL, CHP, And Water Treatment Plant"
          ]
        },
        {
          name: "Gangamai Industries & Construction Ltd",
          location: "Taluka Shevgaon, Dist. -414502, Najik Babhulgaon, Maharashtra",
          projects: [
            "4 MW Co- Generation power plant, 45 TPH Incineration Boiler"
          ]
        },
        {
          name: "ASHOK SAHAKARI SAKHAR KARKHANA LIMITED",
          location: "Ashoknagar, village: Nipani Wadgaon, Tal. Shrirampur, Dist. Ahmednagar, Maharashtra 413717",
          projects: [
            "60 KLPD Distillery Unit, And Water Treatment Plant"
          ]
        },
        {
          name: "SHAMANUR SUGARS LIMITED (Distillery Division)",
          location: "Duggavathi Village, Harapanahalli Taluk, Davanagere District, Karnataka",
          projects: [
            "Operation and Maintenance of 120 KLPD grain Based Distillery Unit"
          ]
        },
        {
          name: "Gulshan Polyol LIMITED",
          location: "Dist -Goalpara, Assam",
          projects: [
            "Full power plant including Ro /DM, Electrical, Instrument and CHP also. 50 TPH AFBC BOILER MAKE- THERMOFAB (Fuel – Coal & Bambu)",
            "6.25 MW Back Pressure TURBINE MAKES – Siemens"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - WASTE MANAGEMENT",
      items: [
        {
          name: "A2z Infrastructure Ltd",
          location: "Kanpur, Uttar Pradesh",
          projects: [
            "Operation & maintenance 90 TPH CFBC Municipal waste fuel Operated with 25 MW Siemens Turbine (Not in run now)"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - RICE MILL",
      items: [
        {
          name: "SIDDHASHRAM RICE MILLS CLUSTER PRIVATE LIMITED",
          location: "Buxar, Bihar",
          projects: [
            "Full power plant including Ro /DM, Electrical, Instrument, 24 TPH AFBC BOILER3 MW Extraction cum condensing Turbine – Triveni"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - TEXTILE",
      items: [
        {
          name: "Rupa and Company",
          location: "Jalan Industrial Estate, Howrah - 711411, Near Domjur",
          projects: [
            "14 TPH AFBC BOILER MAKE- Thermax (Fuel – coal)",
            "1.5 MW BACK PRESSURE TURBINE MAKES- Man turbo",
            "30 Lac kilo calories. Thermic Fluid Heater"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - PLYWOOD",
      items: [
        {
          name: "Manilam Industries India Private Limited",
          location: "Bhoji pura District -Bareli UP",
          projects: [
            "Operation and Maintenance of 18 TPH Process Boiler with 50 Lacks Kilo Calories Thermopack heater"
          ]
        }
      ]
    },
    {
      category: "Operation and Maintenance Works - PAPER MILL",
      items: [
        {
          name: "Harimon Industries Ltd",
          location: "Arazi No. 841 & 825, Bengali Purwa , Bhaunti Pratappur , Kanpur, UP",
          projects: []
        }
      ]
    },
    {
      category: "Worked under other Agencies",
      items: [
        {
          name: "Ramgarh Gas Thermal Power Plant",
          location: "Rajasthan",
          projects: [
            "Maintenance of 37.5 MW BHEL Steam Turbine, Plant Under care of Rajasthan Government"
          ]
        },
        {
          name: "Impex Ferro Tech Ltd",
          location: "Kalayaneshwari , East Burdman , West Bengal – 713369",
          projects: [
            "15 X 2 = 30 MW CPP makes Triveni Full Condensing Turbine",
            "70 X 2 = 140 TPH CVL makes AFBC Boiler with Full Fuel handling",
            "Managing Electrical, Instrument, Ash handing system, Water treatment and spare parts"
          ]
        },
        {
          name: "Janki Corporation Ltd",
          location: "Bellary, Karnataka",
          projects: [
            "18 MW siemens make STG with 30 TPH AFBC Boiler and 10 X 6 nos. WHRB Thermax make Boiler"
          ]
        },
        {
          name: "Shree Jagannath Metallick Industries Ltd",
          location: "Keonjhar , Orissa",
          projects: [
            "Erection, Commissioning, Operation & Maintenance 10 MW Siemens Make STG with ACC, 30 Tph AFBC Boiler make Thermax, 2 X 10 Nos. WHRB Boiler Make Thermax"
          ]
        },
        {
          name: "Laxness India Ltd",
          location: "Nagda, Madhya Pradesh -456335",
          projects: [
            "Erection, Operation and Maintenance 4 Mw Back pressure Triveni Makes STG, Operation and Maintenance for same"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <div className="cs-section">
        <div className="cs-container">
          <div className="text-center mb-12">
            <span className="cs-topper">Our Portfolio</span>
            <h1 className="cs-title">Our Valuable <span className="cs-highlight">Clients</span></h1>
            <p className="cs-text max-w-3xl mx-auto">
              Trusted by industry leaders across various sectors for our expertise in project execution, 
              operation and maintenance services.
            </p>
          </div>

          <div className="space-y-12">
            {clients.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cs-category-card">
                <h2 className="cs-category-title">
                  {category.category}
                </h2>
                
                <div className="cs-client-grid">
                  {category.items.map((client, clientIndex) => (
                    <div 
                      key={clientIndex} 
                      className="cs-client-card"
                    >
                      <h3 className="cs-client-name">
                        {client.name}
                      </h3>
                      
                      <p className="cs-client-location">
                          {client.location}
                      </p>
                      
                      <div className="cs-projects-list">
                        {client.projects.map((project, projectIndex) => (
                          <p 
                            key={projectIndex} 
                            className="cs-project-item"
                          >
                            • {project}
                          </p>
                        ))}
                      </div>
                      
                      {client.projects.length === 0 && (
                        <p className="cs-no-projects">
                          Project details available upon request
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="cs-partnership-banner">
              <h3 className="cs-partnership-title">
                Building Lasting Partnerships
              </h3>
              <p className="cs-partnership-text">
                We take pride in our long-standing relationships with clients across diverse industries, 
                delivering excellence in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>

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
          min-height: 100vh;
        }

        .cs-container {
          width: 100%;
          max-width: 80rem;
          margin: 0 auto;
        }

        .text-center {
          text-align: center;
        }

        .mb-12 {
          margin-bottom: 3rem;
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        .max-w-3xl {
          max-width: 48rem;
        }

        .space-y-12 > * + * {
          margin-top: 3rem;
        }

        .mt-12 {
          margin-top: 3rem;
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
          
          color: var(--bodyTextColor);
          opacity: 0.9;
        }

        .cs-category-card {
          background: #ffffff;
          border: 1px solid #f0f0f0;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .cs-category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
        }

        .cs-category-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--headerColor);
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #f0f0f0;
        }

        .cs-client-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: 1fr;
        }

        @media (min-width: 48rem) {
          .cs-client-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 64rem) {
          .cs-client-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .cs-client-card {
          border: 1px solid #f0f0f0;
          padding: 1.5rem;
          background: #ffffff;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cs-client-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 112, 192, 0.15);
        }

        .cs-client-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, rgba(0, 112, 192, 0.1), rgba(0, 112, 192, 0.05), rgba(0, 112, 192, 0.1));
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cs-client-card:hover::before {
          opacity: 1;
        }

        .cs-client-name {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--headerColor);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .cs-client-location {
          font-size: 0.875rem;
          color: var(--bodyTextColor);
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .cs-projects-list {
          space-y: 0.5rem;
        }

        .cs-project-item {
          font-size: 0.875rem;
          color: var(--bodyTextColor);
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }

        .cs-no-projects {
          font-size: 0.875rem;
          color: var(--bodyTextColor);
          opacity: 0.6;
          font-style: italic;
        }

        .cs-partnership-banner {
          background: linear-gradient(135deg, rgba(0, 112, 192, 0.05), rgba(0, 112, 192, 0.1));
          border: 1px solid rgba(0, 112, 192, 0.2);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .cs-partnership-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
        }

        .cs-partnership-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .cs-partnership-text {
          font-size: 1rem;
          color: var(--bodyTextColor);
          line-height: 1.6;
          opacity: 0.9;
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-client-card,
          .cs-client-card::before {
            transition: none;
          }
          
          .cs-client-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  )
}

export default ClientsPage