import client from "../db.js";

const findMany = async () => {
  try {
    const query = `
    SELECT * FROM sales_manager.sales
    ORDER BY date DESC, price DESC
`;
    const response = await client.query(query);
    return response.rows;
  } catch (error) {
    console.error("Error fetching sales:", error);
    return [];
  }
};

const findOne = async (id) => {
  try {
    const query = `
        SELECT * FROM sales_manager.sales
        WHERE id = $1
        `;
    const response = await client.query(query, [id]);
    return response.rows[0];
  } catch (error) {
    console.error("Error fetching sale:", error);
    return null;
  }
};

export { findMany, findOne };
