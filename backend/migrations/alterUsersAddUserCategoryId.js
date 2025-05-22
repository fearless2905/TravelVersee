module.exports = {
  up: async (db) => {
    await db.query(
      "ALTER TABLE users " +
        "ADD COLUMN IF NOT EXISTS user_category_id INTEGER REFERENCES user_categories(id) DEFAULT 1;"
    );
  },
  down: async (db) => {
    await db.query("ALTER TABLE users DROP COLUMN IF EXISTS user_category_id;");
  },
};
