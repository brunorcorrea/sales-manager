let goals = [];

const getAllGoals = (req, res) => {
    res.json(goals);
}

const createGoal = (req, res) => {
    const goal = { ...req.body, id: goals.length + 1 };

    goals.push(goal);
    res.status(201).json(goal);
}

const getGoalById = (req, res) => {
    const { id } = req.params;
    const goal = goals.find((goal) => goal.id === Number(id));

    if (!goal) {
        return res.status(404).json({ message: 'Goal not found' });
    }

    res.json(goal);
}

const updateGoal = (req, res) => {
    const { id } = req.params;
    const goal = goals.find((goal) => goal.id === Number(id));

    if (!goal) {
        return res.status(404).json({ message: 'Goal not found' });
    }

    const updatedGoal = { ...goal, ...req.body };
    goals = goals.map((goal) => (goal.id === Number(id) ? updatedGoal : goal));

    res.json(updatedGoal);
}

const deleteGoal = (req, res) => {
    const { id } = req.params;
    const goal = goals.find((goal) => goal.id === Number(id));

    if (!goal) {
        return res.status(404).json({ message: 'Goal not found' });
    }

    goals = goals.filter((goal) => goal.id !== Number(id));

    res.json(goal);
}

export {
    getAllGoals,
    createGoal,
    getGoalById,
    updateGoal,
    deleteGoal
};