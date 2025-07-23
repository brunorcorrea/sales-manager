import { validateUserCredentials } from "../repositories/auth-repository.js";
import jwt from 'jsonwebtoken';

const signIn = async (req, res) => {
    const credentials = { ...req.body };

    if (!credentials.email || !credentials.password) {
        return res.status(401).json({ message: "Unable to login. E-mail and password are required." });
    }

    const user = await validateUserCredentials(credentials.email, credentials.password);

    if (!user) {
        return res.status(401).json({ message: "Unable to login. The provided credentials are not valid." });
    }

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY)

    res.status(200).json({ user, token });
};

export { signIn };