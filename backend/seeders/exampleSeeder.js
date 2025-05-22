const db = require("../config");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const seedExampleData = async () => {
  try {
    await db.query(
      "INSERT INTO example (name) VALUES ('Sample Data 1'), ('Sample Data 2')"
    );
    console.log("Example data seeded successfully");
  } catch (error) {
    console.error("Error seeding example data:", error);
  }
};

const seedUserCategories = async () => {
  try {
    await db.query(
      "INSERT INTO user_categories (name) VALUES ('Admin'), ('User') ON CONFLICT (name) DO NOTHING"
    );
    console.log("User categories seeded successfully");
  } catch (error) {
    console.error("Error seeding user categories:", error);
  }
};

const seedUserData = async () => {
  try {
    const hashedPassword = await bcrypt.hash("password123", SALT_ROUNDS);
    await db.query(
      "INSERT INTO users (name, username, email, password, user_category_id) VALUES ('Admin User', 'admin', 'admin@example.com', $1, 1) ON CONFLICT (email) DO UPDATE SET password = EXCLUDED.password",
      [hashedPassword]
    );
    console.log("User data seeded successfully");
  } catch (error) {
    if (error.code === "23505") {
      console.log("User already exists, skipping insert.");
    } else {
      console.error("Error seeding user data:", error);
    }
  }
};

const seedWisataData = async () => {
  try {
    await db.query(
      "INSERT INTO wisata (name, description, image, gmaps_link) VALUES " +
        "('Pantai Kuta', 'Pantai terkenal di Bali dengan pasir putih dan ombak yang cocok untuk surfing.', '', 'https://goo.gl/maps/kuta')," +
        "('Candi Borobudur', 'Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah.', '', 'https://maps.app.goo.gl/cp9QPAjbQjSg6X316')" +
        " ON CONFLICT DO NOTHING"
    );
    console.log("Wisata data seeded successfully");
  } catch (error) {
    console.error("Error seeding wisata data:", error);
  }
};

module.exports = {
  seedExampleData,
  seedUserCategories,
  seedUserData,
  seedWisataData,
};
