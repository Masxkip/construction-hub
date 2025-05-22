import React from "react";

const HeroHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="bero-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <div className="bero-content">
          <h1>{title}</h1>
          {subtitle && <h3>{subtitle}</h3>}
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
