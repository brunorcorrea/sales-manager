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

const create = async (sale) => {
  try {
    const query = `
            INSERT INTO sales_manager.sales (price, date, location, payment_methods)
            VALUES ($1, $2, $3, $4)
            RETURNING *
            `;
    const values = [
      sale.price,
      sale.date,
      sale.location,
      JSON.stringify(sale.paymentMethods),
    ];
    const response = await client.query(query, values);
    return response.rows[0];
  } catch (error) {
    console.error("Error creating sale:", error);
    return null;
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

export { findMany, findOne, create };
