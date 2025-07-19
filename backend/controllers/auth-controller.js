import { validateUserCredentials } from "../repositories/auth-repository.js";
import jwt from 'jsonwebtoken';

const signIn = async (req, res) => {
  const credentials = { ...req.body };

  if (!credentials.email || !credentials.password) {
    return res.status(401).json({ message: "Unable to login. E-mail and password are required." });
  }

  const userData = await validateUserCredentials(credentials.email, credentials.password);

  if (!userData) {
    return res.status(401).json({ message: "Unable to login. The provided credentials are not valid." });
  }

  const token = jwt.sign(userData, process.env.JWT_SECRET_KEY)

  res.status(200).json({userData, token});
};

export { signIn };