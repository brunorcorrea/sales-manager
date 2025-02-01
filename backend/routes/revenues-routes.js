import express from 'express';
import { getAllRevenues, createRevenue, getRevenueById, updateRevenue, deleteRevenue } from '../controllers/revenues-controller.js';

const router = express.Router();

const ID_PATH = '/:id';
const BASE_URL = '/revenues';
const LIST_REVENUES_URL = `/v1${BASE_URL}`;
const CREATE_REVENUE_URL = `/v1${BASE_URL}`;
const FIND_REVENUE_BY_ID_URL = `/v1${BASE_URL}${ID_PATH}`;
const UPDATE_REVENUE_URL = `/v1${BASE_URL}${ID_PATH}`;
const DELETE_REVENUE_URL = `/v1${BASE_URL}${ID_PATH}`;

router.get(LIST_REVENUES_URL, getAllRevenues);
router.post(CREATE_REVENUE_URL, createRevenue);
router.get(FIND_REVENUE_BY_ID_URL, getRevenueById);
router.put(UPDATE_REVENUE_URL, updateRevenue);
router.delete(DELETE_REVENUE_URL, deleteRevenue);

export default router;