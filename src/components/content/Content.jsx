import React from 'react';
import "./content.css";
import lungs from "./images/lungs.png"

const Content = () => {

    const nutrients = [
  {
    title: "Anthoxanthin",
    subtitle: "Healthy Bone",
    description:
      "Antioxidant properties beneficial for cancer treatment and heart health. Improves blood flow and reduces oxidative stress.",
    icon: "/imagess/capsule(1).png",
    position: "top-left",
  },
  {
    title: "Carotenoids",
    subtitle: "Immunity Booster",
    description:
      "Essential for vitamin A production supporting immune health. Reduces inflammation and promotes eye health while aiding hair growth.",
    icon: "/imagess/vitamin(1).png",
    position: "middle-left",
  },
  {
    title: "Anthocyanin",
    subtitle: "Healthy Brains",
    description:
      "Lowers blood pressure and reduces the risk of heart disease. Protects brain function and may slow cancer growth.",
    icon: "/imagess/brain.png",
    position: "bottom-center",
  },
  {
    title: "Lycopene",
    subtitle: "Healthy Heart",
    description:
      "Powerful antioxidant that reduces oxidative damage and inflammation. Protects against various cancers and supports heart health.",
    icon: "/imagess/heart.png",
    position: "middle-right",
  },
  {
    title: "Chlorophyll",
    subtitle: "Healthy Lungs",
    description:
      "Strengthens the immune system and helps block cancer-causing chemicals. Aids in weight loss and lowers cholesterol levels.",
    icon: "/imagess/leaf.png",
    position: "top-right",
  },
];

  return (
 <div className="health-section">
 <div className="hero-wave2">
        <svg
          className="wave-svg2"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0"
            stroke="#fff"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0,0  C240,200 480,280 720,280  C960,280 1200,200 1440,0  L1440,500 L0,500 Z"
            fill="#D7E0E7"
            style={{
              filter: 'drop-shadow(0px -5px 10px rgba(0, 84, 231, 0.1))',
            }}
          />
        </svg>
        </div>
         <div className="health-benefits-container">
        <h1>
          <span className="blue">Health</span>{" "}
          <span className="green">Benefits</span>
        </h1>
        <p className="subtitle">
          Discover the key nutrients and their powerful effects on your health
        </p>

        <div className="circle-layout">
          <div className="center-icon">
            <img
              src={lungs}
              alt="lungs"
            />
          </div>

          {nutrients.map((item, index) => (
            <div key={index} className={`nutrient-box ${item.position}`}>
              <img src={item.icon} alt={item.title} className="nutrient-icon" />
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
       </div>
)
}

export default Content
