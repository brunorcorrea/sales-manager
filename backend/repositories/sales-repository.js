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

export {
  findMany,
};
