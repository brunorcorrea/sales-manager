import express from "express";
import passport from "passport";

import { getAllSales, createSale, getSaleById, updateSale, deleteSale } from "../controllers/sales-controller.js";

const router = express.Router();

const ID_PATH = "/:id";
const BASE_URL = "/sales";
const LIST_SALES_URL = `/v1${BASE_URL}`;
const CREATE_SALE_URL = `/v1${BASE_URL}`;
const FIND_SALE_BY_ID_URL = `/v1${BASE_URL}${ID_PATH}`;
const UPDATE_SALE_URL = `/v1${BASE_URL}${ID_PATH}`;
const DELETE_SALE_URL = `/v1${BASE_URL}${ID_PATH}`;

router.get(LIST_SALES_URL, passport.authenticate('jwt', { session: false }), getAllSales);
router.post(CREATE_SALE_URL, passport.authenticate('jwt', { session: false }), createSale);
router.get(FIND_SALE_BY_ID_URL, passport.authenticate('jwt', { session: false }), getSaleById);
router.put(UPDATE_SALE_URL, passport.authenticate('jwt', { session: false }), updateSale);
router.delete(DELETE_SALE_URL, passport.authenticate('jwt', { session: false }), deleteSale);

export default router;