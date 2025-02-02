import express from 'express';
import { getAllGoals, createGoal, getGoalById, updateGoal, deleteGoal } from '../controllers/goals-controller.js';

const router = express.Router();

const ID_PATH = '/:id';
const BASE_URL = '/goals';
const LIST_GOALS_URL = `/v1${BASE_URL}`;
const CREATE_GOAL_URL = `/v1${BASE_URL}`;
const FIND_GOAL_BY_ID_URL = `/v1${BASE_URL}${ID_PATH}`;
const UPDATE_GOAL_URL = `/v1${BASE_URL}${ID_PATH}`;
const DELETE_GOAL_URL = `/v1${BASE_URL}${ID_PATH}`;

router.get(LIST_GOALS_URL, getAllGoals);
router.post(CREATE_GOAL_URL, createGoal);
router.get(FIND_GOAL_BY_ID_URL, getGoalById);
router.put(UPDATE_GOAL_URL, updateGoal);
router.delete(DELETE_GOAL_URL, deleteGoal);

export default router;