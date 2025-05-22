// Example migration file - use a migration tool like knex or sequelize-cli in real projects
module.exports = {
  up: async (db) => {
    await db.query(`
      CREATE TABLE IF NOT EXISTS example (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  },
  down: async (db) => {
    await db.query("DROP TABLE IF EXISTS example;");
  },
};
