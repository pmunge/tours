import React, { useState, useEffect } from "react";
import { fetchAdventures } from "../services/api";
import AdventureCard from "../components/AdventureCard";

const Home = () => {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    const loadAdventures = async () => {
      const data = await fetchAdventures();
      setAdventures(data);
    };

    loadAdventures();
  }, []);

  return (
    <div>
      <h1>Rift Valley Adventures</h1>
      <div className="adventure-list">
        {adventures.map((adventure) => (
          <AdventureCard key={adventure._id} adventure={adventure} />
        ))}
      </div>
    </div>
  );
};

export default Home;

