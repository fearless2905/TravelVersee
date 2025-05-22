const express = require("express");
const router = express.Router();
const { addWisata } = require("../controllers/wisataController");

// Route to get all wisata (optional, can be added later)
router.get("/", (req, res) => {
  res.json({ message: "Wisata route placeholder" });
});

// Route to add new wisata
router.post("/", addWisata);

module.exports = router;
