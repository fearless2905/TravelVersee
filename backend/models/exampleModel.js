const db = require("../config");

const getAllExamples = async () => {
  const result = await db.query("SELECT * FROM example");
  return result.rows;
};

const createExample = async (name) => {
  const result = await db.query(
    "INSERT INTO example (name) VALUES ($1) RETURNING *",
    [name]
  );
  return result.rows[0];
};

module.exports = {
  getAllExamples,
  createExample,
};
