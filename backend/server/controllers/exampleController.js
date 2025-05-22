const db = require("../config");

const getExampleData = async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({
      message: "Example data fetched successfully",
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching example data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getExampleData,
};
