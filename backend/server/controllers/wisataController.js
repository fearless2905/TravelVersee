const wisataModel = require("../models/wisataModel");

const addWisata = async (req, res) => {
  try {
    const { name, description, image, gmapsLink } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const newWisata = await wisataModel.createWisata({
      name,
      description,
      image,
      gmaps_link: gmapsLink,
    });
    res.status(201).json(newWisata);
  } catch (error) {
    console.error("Error adding wisata:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addWisata,
};
