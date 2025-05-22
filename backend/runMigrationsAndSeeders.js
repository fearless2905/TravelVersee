const db = require("./config");
const exampleMigration = require("./migrations/exampleMigration");
const createUsersTable = require("./migrations/createUsersTable");
const seeders = require("./seeders/exampleSeeder");

const runMigrations = async () => {
  try {
    console.log("Running migrations...");
    await exampleMigration.up(db);
    await createUsersTable.up(db);
    console.log("Migrations completed.");
  } catch (error) {
    console.error("Error running migrations:", error);
  }
};

const runSeeders = async () => {
  try {
    console.log("Running seeders...");
    await seeders.seedExampleData();
    await seeders.seedUserData();
    console.log("Seeders completed.");
  } catch (error) {
    console.error("Error running seeders:", error);
  }
};

const run = async () => {
  await runMigrations();
  await runSeeders();
  await db.pool.end();
  console.log("Database connection closed.");
};

run();
