import React from "react";

export const Feature = ({ imgURL, header, content }) => {
  return (
    <div className="feature">
      <img src={imgURL} width="48px" height="48px" />
      <div className="feature-content">
        <h4>{header}</h4>
        <p>{content}</p>
      </div>
    </div>
  );
};
