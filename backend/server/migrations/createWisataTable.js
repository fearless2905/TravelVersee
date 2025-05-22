module.exports = {
  up: async (db) => {
    await db.query(
      "CREATE TABLE IF NOT EXISTS wisata (" +
        "id SERIAL PRIMARY KEY," +
        "name VARCHAR(255) NOT NULL," +
        "description TEXT," +
        "image TEXT," +
        "gmaps_link TEXT," +
        "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP" +
        ");"
    );
  },
  down: async (db) => {
    await db.query("DROP TABLE IF EXISTS wisata;");
  },
};
