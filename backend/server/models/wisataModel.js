const db = require("../config");

const getAllWisata = async () => {
  const result = await db.query(
    "SELECT * FROM wisata ORDER BY created_at DESC"
  );
  return result.rows;
};

const createWisata = async ({ name, description, image, gmaps_link }) => {
  const result = await db.query(
    "INSERT INTO wisata (name, description, image, gmaps_link) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, description, image, gmaps_link]
  );
  return result.rows[0];
};

module.exports = {
  getAllWisata,
  createWisata,
};
