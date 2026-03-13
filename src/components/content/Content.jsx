import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./content.css";

// Import images
import lungs from "./images/lungs.png";
import heartIcon from "./images/heart.png";
import brainIcon from "./images/brain.png";
import immunityIcon from "./images/vitamin(1).png";
import boneIcon from "./images/capsule(1).png";
import leafIcon from "./images/leaf.png";

const Content = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const treatments = [
    {
      title: "Sexual Health",
      subtitle: "Complete Wellness",
      description: "Specialized Ayurvedic treatment for premature ejaculation, erectile dysfunction, low libido, and infertility. 100% confidential consultation with proven natural remedies.",
      icon: heartIcon,
      position: "top-left",
      keywords: "sexologist, sexual health treatment, premature ejaculation cure, ED treatment"
    },
    {
      title: "Piles (Bawasir)",
      subtitle: "Pain Relief",
      description: "Non-surgical Ayurvedic treatment for hemorrhoids, fissures, and fistulas. Natural herbal remedies that provide lasting relief without recurrence or side effects.",
      icon: "/imagess/piles-icon.png",
      position: "middle-left",
      keywords: "piles treatment, bawasir ilaj, hemorrhoids cure, fissure treatment"
    },
    {
      title: "Skin Diseases",
      subtitle: "Healthy Skin",
      description: "Effective treatment for acne, pimples, psoriasis, eczema, and fungal infections. Ayurvedic formulations that heal from within for radiant, healthy skin.",
      icon: leafIcon,
      position: "bottom-center",
      keywords: "skin specialist, acne treatment, psoriasis cure, eczema treatment"
    },
    {
      title: "Digestive Health",
      subtitle: "Gut Wellness",
      description: "Holistic treatment for digestive disorders, acidity, gas, and IBS. Strengthens digestive fire (Agni) for optimal nutrient absorption and overall health.",
      icon: "/imagess/digestion-icon.png",
      position: "middle-right",
      keywords: "digestive disorders, acidity treatment, IBS cure, gut health"
    },
    {
      title: "Gupt Rog",
      subtitle: "Confidential Care",
      description: "Specialized treatment for all confidential diseases (gupt rog) including leucorrhea, nightfall, and sexual weakness. Private consultation with complete discretion.",
      icon: brainIcon,
      position: "top-right",
      keywords: "gupt rog specialist, confidential diseases, nightfall treatment, sexual weakness"
    },
  ];

  // Structured data for treatments
  const treatmentStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ayurvedic Treatments Offered by Dr. S.K Sachin",
    "description": "Comprehensive Ayurvedic treatments for sexual health, piles, skin diseases, digestive disorders, and gupt rog",
    "itemListElement": treatments.map((treatment, index) => ({
      "@type": "MedicalProcedure",
      "position": index + 1,
      "name": treatment.title,
      "description": treatment.description,
      "procedureType": "https://schema.org/MedicalTherapy"
    }))
  };

  return (
    <>
      <Helmet>
        <title>Ayurvedic Treatments | Sexual Health, Piles, Skin Diseases & Gupt Rog</title>
        <meta name="description" content="Dr. S.K Sachin offers specialized Ayurvedic treatments for sexual health problems, piles (bawasir), skin diseases, digestive disorders, and gupt rog. 100% natural & confidential." />
        <meta name="keywords" content="ayurvedic treatments, sexual health clinic, piles treatment, skin specialist, gupt rog clinic, sexologist near me, bawasir ilaj, ayurvedic sexologist, natural remedies, herbal treatment" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Ayurvedic Treatments for Sexual Health, Piles & Skin Diseases" />
        <meta property="og:description" content="Discover natural Ayurvedic treatments for all your health concerns. Confidential consultation with Dr. S.K Sachin." />
        <meta property="og:image" content="https://yourclinicwebsite.com/images/treatments-og.jpg" />
        <meta property="og:url" content="https://yourclinicwebsite.com/treatments" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourclinicwebsite.com/treatments" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(treatmentStructuredData)}
        </script>
      </Helmet>

      <section className="treatments-section" id="treatments" aria-label="Ayurvedic Treatments">
        

        <div className="treatments-container">
          {/* Section Header */}
          <div className="section-header" data-aos="fade-down">
            <span className="section-badge">🌿 AYURVEDIC TREATMENTS</span>
            <h1>
              <span className="blue">Specialized</span>{" "}
              <span className="green">Healthcare</span>{" "}
              <span className="blue">Solutions</span>
            </h1>
            <p className="section-subtitle">
              Comprehensive Ayurvedic treatments for sexual health, skin diseases, piles, 
              and confidential disorders. 100% natural, safe, and effective remedies.
            </p>
          </div>

          {/* Treatment Cards Grid */}
          <div className="treatments-grid">
            {treatments.map((treatment, index) => (
              <div 
                key={index} 
                className="treatment-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card-icon-wrapper">
                  <img 
                    src={treatment.icon} 
                    alt={`${treatment.title} treatment icon`}
                    className="card-icon"
                    loading="lazy"
                  />
                </div>
                
                <div className="card-content">
                  <h3 className="treatment-title">{treatment.title}</h3>
                  <h4 className="treatment-subtitle">{treatment.subtitle}</h4>
                  <p className="treatment-description">{treatment.description}</p>
                  
                  {/* Treatment Features */}
                  <ul className="treatment-features">
                    <li>✓ 100% Ayurvedic</li>
                    <li>✓ No Side Effects</li>
                    <li>✓ Confidential</li>
                    <li>✓ Proven Results</li>
                  </ul>

                  {/* CTA Button */}
                  <a 
                    href="/contact" 
                    className="treatment-cta"
                    aria-label={`Book consultation for ${treatment.title}`}
                  >
                    Book Consultation →
                  </a>
                </div>

                {/* Decorative Badge */}
                <div className="card-badge">
                  <span>Ayurvedic</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="why-choose-us" data-aos="fade-up">
            <h2>Why Choose Our Treatments?</h2>
            
            <div className="benefits-grid">
              <div className="benefit-items">
                <div className="benefit-icons">🌱</div>
                <h3>100% Natural</h3>
                <p>Pure herbal formulations with no chemicals or steroids</p>
              </div>
              
              <div className="benefit-items">
                <div className="benefit-icons">🔬</div>
                <h3>8+ Years Experience</h3>
                <p>Expertise in treating complex sexual and skin conditions</p>
              </div>
              
              <div className="benefit-items">
                <div className="benefit-icons">🤫</div>
                <h3>100% Confidential</h3>
                <p>Private consultation with complete discretion</p>
              </div>
              
              <div className="benefit-items">
                <div className="benefit-icons">📈</div>
                <h3>Proven Results</h3>
                <p>3000+ satisfied patients with lasting recovery</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section" data-aos="fade-up">
            <div className="stat-item">
              <span className="stat-number">3000+</span>
              <span className="stat-label">Happy Patients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Ayurvedic Formulations</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Patient Support</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;