module.exports = {
  up: async (db) => {
    await db.query(
      "CREATE TABLE IF NOT EXISTS user_categories (" +
        "id SERIAL PRIMARY KEY," +
        "name VARCHAR(100) NOT NULL UNIQUE" +
        ");"
    );
  },
  down: async (db) => {
    await db.query("DROP TABLE IF EXISTS user_categories;");
  },
};
