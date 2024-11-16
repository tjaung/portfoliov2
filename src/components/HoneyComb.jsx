import React from 'react';

import './css/Honeycomb.css';

// Darken color function
function darkenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return (
    "#" +
    (0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

const Honeycomb = ({items}) => {
  return (
    <div className="honeycomb-container">
      {items.map((hex, index) => (
        <div key={index} className="hexagon">
          <div className="hexagon-inner">
            <div className="hexagon-front" style={{ backgroundColor: hex.color }}>
              <div className="icon">{hex.icon}</div>
            </div>
            <div
              className="hexagon-back"
              style={{ backgroundColor: darkenColor(hex.color, 25) }} // Darken by 20%
            >
              <span className="label">{hex.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Honeycomb;
