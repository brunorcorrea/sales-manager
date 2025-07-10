import client from "../db.js";

const validateUserCredentials = async (email, password) => {
  try {
    const query = `
        SELECT * FROM sales_manager.user
        WHERE email = $1
        AND password = $2
        `;
    const response = await client.query(query, [email, password]);
    return response.rows[0];
  } catch (error) {
    console.error("Error validating user credentials:", error);
    return null;
  }
};

export { validateUserCredentials };