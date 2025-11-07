'use client';
import React, { useState } from 'react';

function DistillationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    {
      src: "/distillary/d1.png",
      alt: "Industrial Distillation Process - Grain processing and ethanol production system",
      title: "Distillary 1",
      description: ""
    },
    {
      src: "/distillary/d2.png",
      alt: "Grain milling and processing equipment",
      title: "Distillary 2",
      description: ""
    },
    {
      src: "/distillary/d3.png",
      alt: "Fermentation tanks and process control",
      title: "Distillary 3",
      description: ""
    },
    {
      src: "/distillary/d4.png",
      alt: "Distillation columns and separation systems",
      title: "Distillary 4",
      description: ""
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-container">
          <div className="cs-hero-content">
            <h1 className="cs-hero-title">Distillation Process</h1>
            <p className="cs-hero-text">
              Advanced grain-to-ethanol processing utilizing surplus rice feedstock with 
              state-of-the-art automation and quality control systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="cs-section">
        <div className="cs-container">
          <div className="cs-content-layout">
            {/* Left Side - Paragraph Content */}
            <div className="cs-content-side">
              <div className="cs-content-section">
                <h2 className="cs-content-title">Distillation Process Overview</h2>
                
                <div className="cs-text-content">
                  <h3 className="cs-subtitle">Grain Receiving, Storage and Milling</h3>
                  <p>
                    Grain unloaded, is initially received by grain receiving hopper. From receiving hopper, 
                    grain is shifted to storage silo through screw conveyor and bucket elevator. The silo is 
                    well equipped with aeration facility so as to keep proper air circulation inside the silo. 
                    Some part of the dust that is carried along with the incoming grains is removed in this section. 
                    Pre-cleaned Grains are fed in controlled rate to the hammer mill. In this unit operation, 
                    Grain is broken down into small particles (flour) of required size distribution. Oversized 
                    particles are segregated with the help of vibratory screen. They are then recycled back to 
                    the hammer mill through the coarse bin. Flour from Vibratory screen is collected in the 
                    Hopper and then fed to the Slurry Mixing tank at a controlled rate.
                  </p>

                  <h3 className="cs-subtitle">Liquefaction</h3>
                  <p>
                    The starch from the slurry is liquefied for sugar production. This is done in three steps 
                    liquefaction, continuous jet cooking and post-liquefaction. Heat stable enzymes are used 
                    for the process. The cooking process is done at high temperature to sterilize the slurry 
                    and to get high yields of sugar. This process is designed to maximize product yields using 
                    minimum process water and is based on classical concept of Simultaneous Saccharification 
                    and Fermentation. Hot Process water and recycled thin slop is added to Pre-masher to make 
                    slurry. The mixed slurry is taken to the Initial Liquefaction Tank where additional quantity 
                    of water is added as per requirement. Viscosity reduction Enzyme and stabilizing chemicals 
                    and a portion of liquefying enzyme are also added at this stage. This slurry is then "cooked" 
                    in the jet cooker. The slurry is continuously pumped to a steam jet cooker where high-pressure 
                    steam at 3.5 bar (g) / 147 °C rapidly raises the slurry temperature. The mixture of slurry 
                    and steam is then passed through the Retention vessel for desired retention time at a given 
                    flow rate. The cooked mash is discharged to a Flash Tank. The cooking process, accomplished 
                    in the above manner, converts the slurry into a hydrated, sterilized suspension (as starch 
                    molecule is solubilized) and is therefore susceptible to enzyme attack for liquefaction. 
                    The gelatinized mash from the Flash Tank is liquefied in the Final Liquefaction Tank where 
                    liquefying enzyme is added. The liquefied mash is cooled in Mash Coolers and transferred to 
                    Fermentation section for further action.
                  </p>

                  <h3 className="cs-subtitle">Fermentation</h3>
                  <p>
                    During the fermentation, yeast strains of the species Saccharomyces Cerevisiae, a living 
                    microorganism belonging to class fungi converts sugar (Glucose, Fructose, Sucrose, Maltose 
                    or Maltotrioes) present in the Cane Syrup or sugar cane juice to alcohol. However, 
                    Saccharomyces Cerevisiae cannot use starch as such. To produce alcohol from starch containing 
                    raw materials such as grains or cassava etc. by fermentation, the starch has to first 
                    hydrolyze to glucose. Industrially, this conversion is accomplished by the cooking of starch 
                    slurry and use of enzymes to breakdown the polymers of glucose (Amylose and Amylopectin), 
                    Transformation of starch to glucose consists of Gelatinization (Cooking), Liquefaction and 
                    Saccharification.
                  </p>

                  <h3 className="cs-subtitle">Multi-Pressure Distillation for Wash to Rectified Spirit</h3>
                  <p>
                    Multi – pressure distillation scheme has three distillation columns. These columns operate 
                    under different pressure conditions. Energy from column operating under high pressure is 
                    re utilized by column operating under low pressure to conserve energy. The columns in order 
                    of flow are: Mash/Stripping Column, Rectification Column, and Aldehyde cum Recover Column. 
                    Fermented wash is preheated in the Fermented Wash Pre heater and fed at the top of the 
                    Mash/Stripping column. This column is provided with Re-boilers. Top vapors of Mash/Stripping 
                    column containing all the alcohol in the wash are sent to Rectification column. Rest of the 
                    fermented wash flows down the Mash/Stripping column and is taken out as spent wash from 
                    column bottom. In Rectification column, higher volatile ethanol component is separated from 
                    ethanol plus water binary mixture. Rectified Spirit draw is taken from the top of 
                    Rectification column, which is sent to Molecular Sieve Dehydration Fuel Ethanol Plant.
                  </p>

                  <h3 className="cs-subtitle">Molecular Sieve Dehydration (Fuel Ethanol Plant)</h3>
                  <p>
                    Molecular sieve technology works on the principle of pressure swing adsorption. Here water 
                    is removed by adsorbing on surface of `molecular sieves' and then cyclically removing it 
                    under different conditions (steaming). Molecular sieves are nothing but synthetic zeolites 
                    typically 3Ao zeolites. Zeolites are synthetic crystalline Alumino silicates. This material 
                    has strong affinity for water. They adsorb water in cold condition and desorb water when 
                    heated. This principle is used to dehydrate ethanol. The crystalline structure of zeolites 
                    is complex and gives this material the ability to adsorb or reject material based on 
                    molecular sizes. Water molecule can enter the sieve and be adsorbed, but larger alcohol 
                    molecule will not be retained and will go through the bed.
                  </p>

                  <h3 className="cs-subtitle">Decantation Section</h3>
                  <p>
                    Decantation section comprises of a Centrifuge Decanter for separation of suspended solids 
                    from Spent Wash coming out of Grain Distillation Plant. Wet cake is removed from bottom of 
                    Decanter. Spent wash/Thick Slops from Mash Column is pumped to Thick Slops Tank. Thick Slops 
                    is then fed to Decanter Centrifuge through Decanter Feed Pump. In Decanter suspended solids 
                    from Thick Slop are separated and removed as Wet Cake while Thin Slops is collected in Thin 
                    Slops Tank. Thin slops from this tank are then fed to Evaporator for further concentration.
                  </p>

                  <h3 className="cs-subtitle">Thin Slop Evaporation</h3>
                  <p>
                    Thin slop evaporation plant is designed to concentrate thin slop coming out of decantation 
                    unit from 5% to 30% w/w solid concentration. This evaporation plant is multi-effect and 
                    combination of falling film & forced circulation type. Evaporation is integrated to 
                    distillation and DDGS dryer for energy conservation. The product at the desired concentration 
                    of 40% w/w total solid is obtained at the outlet of the final effect. Each effect is provided 
                    with recirculation cum transfer pumps. The condensate from surface condensers is collected 
                    in a common condensate pot.
                  </p>

                  <h3 className="cs-subtitle">DDGS Dryer</h3>
                  <p>
                    Wet cake with 30% w/w solids concentration from decantation section and Concentrated Syrup 
                    with 30% w/w solids concentration produced in evaporation section are mixed together & fed 
                    into the dryer housing at controlled rate through a suitable feeding system. The Rotary Tube 
                    Bundle is enclosed in an insulated dryer housing and on its outer flights are fixed. Dry, 
                    saturated steam is to be supplied to the tube bundle through rotary joint at one end & the 
                    condensate is discharged through rotary joint mounted of another end. The heat transfer is 
                    primarily by conduction. The water vapours are exhausted through an Exhaust Blower & passed 
                    through a cyclone separator for separating fines.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image Slider */}
            <div className="cs-image-side">
              <div className="cs-slider-container">
                {/* Main Slider */}
                <div className="cs-slider">
                  <div 
                    className="cs-slide-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {sliderImages.map((image, index) => (
                      <div 
                        key={index}
                        className="cs-slide"
                      >
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="cs-slide-image"
                        />
                        <div className="cs-slide-overlay">
                          <div className="cs-slide-content">
                            <h4 className="cs-slide-title">{image.title}</h4>
                            <p className="cs-slide-description">{image.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button className="cs-slider-prev" onClick={prevSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button className="cs-slider-next" onClick={nextSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Slider Dots */}
                <div className="cs-slider-dots">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      className={`cs-slider-dot ${index === currentSlide ? 'cs-active' : ''}`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>

                {/* Thumbnail Navigation */}
                <div className="cs-slider-thumbnails">
                  {sliderImages.map((image, index) => (
                    <button
                      key={index}
                      className={`cs-thumbnail ${index === currentSlide ? 'cs-active' : ''}`}
                      onClick={() => goToSlide(index)}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="cs-thumbnail-image"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

        /* Hero Section */
        .cs-hero {
          padding-top: 100px;
          background: linear-gradient(rgba(244, 244, 244, 0.8), rgba(244, 244, 244, 0.6)),
    url('/f1.jpg') center/cover no-repeat;
          text-align: center;
          color: white;
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
          color: black;
          letter-spacing: 0.01em;
        }

        .cs-hero-text {
          font-size: clamp(1.1rem, 2vw, 1.25rem);
          line-height: 1.75;
          margin: 0 0 1.5rem 0;
          color: black;
          opacity: 0.9;
        }

        /* Main Content Layout */
        .cs-section {
          padding: var(--sectionPadding);
          background: #ffffff;
        }

        .cs-content-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 64rem) {
          .cs-content-layout {
            grid-template-columns: 2fr 1fr;
            gap: 4rem;
            align-items: start;
          }
        }

        /* Left Side - Content */
        .cs-content-side {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .cs-content-section {
          width: 100%;
        }

        .cs-content-title {
          font-size: var(--headerFontSize);
          font-weight: 900;
          line-height: 1.15;
          margin: 0 0 2rem 0;
          color: var(--headerColor);
          letter-spacing: 0.01em;
          padding-bottom: 1rem;
          border-bottom: 3px solid var(--primary);
        }

        .cs-text-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .cs-text-content p {
          font-size: var(--bodyFontSize);
          line-height: 1.75;
          color: var(--bodyTextColor);
          margin: 0;
          opacity: 0.9;
        }

        .cs-text-content strong {
          color: var(--headerColor);
          font-weight: 700;
        }

        .cs-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          margin: 2rem 0 1rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(0, 112, 192, 0.2);
        }

        /* Right Side - Image Slider */
        .cs-image-side {
          position: sticky;
          top: 5rem;
        }

        .cs-slider-container {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 1rem;
        }

        /* Main Slider - Fixed Implementation */
        .cs-slider {
          position: relative;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .cs-slide-track {
          display: flex;
          transition: transform 0.3s ease;
          width: 100%;
        }

        .cs-slide {
          flex: 0 0 100%;
          position: relative;
          opacity: 1;
        }

        .cs-slide-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .cs-slide-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 1.5rem;
          color: white;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .cs-slide:hover .cs-slide-overlay {
          transform: translateY(0);
        }

        .cs-slide-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: #ffffff;
        }

        .cs-slide-description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Navigation Arrows */
        .cs-slider-prev,
        .cs-slider-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .cs-slider-prev:hover,
        .cs-slider-next:hover {
          background: var(--primary);
          border-color: var(--primary);
        }

        .cs-slider-prev:hover svg,
        .cs-slider-next:hover svg {
          stroke: white;
        }

        .cs-slider-prev {
          left: 1rem;
        }

        .cs-slider-next {
          right: 1rem;
        }

        .cs-slider-prev svg,
        .cs-slider-next svg {
          width: 20px;
          height: 20px;
          stroke: var(--primary);
          transition: stroke 0.3s ease;
        }

        /* Slider Dots */
        .cs-slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .cs-slider-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e0;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cs-slider-dot.cs-active {
          background: var(--primary);
          transform: scale(1.2);
        }

        .cs-slider-dot:hover {
          background: var(--secondary);
        }

        /* Thumbnail Navigation */
        .cs-slider-thumbnails {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }

        .cs-thumbnail {
          border: 2px solid transparent;
          padding: 0;
          background: none;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .cs-thumbnail.cs-active {
          border-color: var(--primary);
        }

        .cs-thumbnail:hover {
          border-color: var(--secondary);
        }

        .cs-thumbnail-image {
          width: 100%;
          height: 60px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .cs-thumbnail:hover .cs-thumbnail-image {
          transform: scale(1.1);
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cs-slide-track,
          .cs-slide-overlay,
          .cs-slider-prev,
          .cs-slider-next,
          .cs-slider-dot,
          .cs-thumbnail,
          .cs-thumbnail-image {
            transition: none;
          }
          
          .cs-slider-dot:hover,
          .cs-thumbnail:hover {
            transform: none;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 63.9375rem) {
          .cs-image-side {
            position: static;
            margin-top: 2rem;
          }
          
          .cs-slide-image {
            height: 250px;
          }
        }

        @media (max-width: 48rem) {
          .cs-slider-thumbnails {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </>
  );
}

export default DistillationPage;