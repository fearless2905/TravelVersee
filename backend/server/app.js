require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const wisataRoutes = require("./routes/wisataRoutes");
const exampleRoutes = require("./routes/exampleRoutes");
const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middleware/errorHandler");
const db = require("./config");

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.use("/api/wisata", wisataRoutes);
app.use("/api/example", exampleRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await db.pool.connect();
    console.log(`Connected to PostgreSQL database`);
  } catch (error) {
    console.error("Failed to connect to PostgreSQL database:", error);
  }
  console.log(`Server running on port ${PORT}`);
});
