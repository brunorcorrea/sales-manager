import express from 'express';

import { signIn } from '../controllers/auth-controller.js';

const router = express.Router();

const BASE_URL = '/authentication';
const LOGIN_URL = `/v1${BASE_URL}/signIn`;

router.post(LOGIN_URL, signIn);

export default router;