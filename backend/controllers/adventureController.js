const Adventure = require("../models/Adventure");

const getAdventures = async (req, res) => {
  try {
    const adventures = await Adventure.find();
    res.json(adventures);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const createAdventure = async (req, res) => {
  const { title, description, location, price, imageUrl } = req.body;
  try {
    const newAdventure = new Adventure({
      title,
      description,
      location,
      price,
      imageUrl,
    });
    await newAdventure.save();
    res.status(201).json(newAdventure);
  } catch (err) {
    res.status(400).json({ message: "Error creating adventure" });
  }
};

module.exports = { getAdventures, createAdventure };

