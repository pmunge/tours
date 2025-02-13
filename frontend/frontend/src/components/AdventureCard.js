import React from "react";

const AdventureCard = ({ adventure }) => {
  return (
    <div className="adventure-card">
      <img src={adventure.imageUrl} alt={adventure.title} />
      <h3>{adventure.title}</h3>
      <p>{adventure.description}</p>
      <p>{adventure.location}</p>
      <p>${adventure.price}</p>
    </div>
  );
};

export default AdventureCard;

