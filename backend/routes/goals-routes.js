import express from 'express';
import passport from "passport";
import { getAllGoals, createGoal, getGoalById, updateGoal, deleteGoal } from '../controllers/goals-controller.js';

const router = express.Router();

const ID_PATH = '/:id';
const BASE_URL = '/goals';
const LIST_GOALS_URL = `/v1${BASE_URL}`;
const CREATE_GOAL_URL = `/v1${BASE_URL}`;
const FIND_GOAL_BY_ID_URL = `/v1${BASE_URL}${ID_PATH}`;
const UPDATE_GOAL_URL = `/v1${BASE_URL}${ID_PATH}`;
const DELETE_GOAL_URL = `/v1${BASE_URL}${ID_PATH}`;

router.get(LIST_GOALS_URL, passport.authenticate('jwt', { session: false }), getAllGoals);
router.post(CREATE_GOAL_URL, passport.authenticate('jwt', { session: false }), createGoal);
router.get(FIND_GOAL_BY_ID_URL, passport.authenticate('jwt', { session: false }), getGoalById);
router.put(UPDATE_GOAL_URL, passport.authenticate('jwt', { session: false }), updateGoal);
router.delete(DELETE_GOAL_URL, passport.authenticate('jwt', { session: false }), deleteGoal);

export default router;