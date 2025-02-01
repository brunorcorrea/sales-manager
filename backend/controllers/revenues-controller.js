let revenues = [
    {
        "id": 1,
        "month": "January",
        "year": 2024,
        "revenue": 125
    },
    {
        "id": 2,
        "month": "February",
        "year": 2024,
        "revenue": 200
    },
    {
        "id": 3,
        "month": "March",
        "year": 2024,
        "revenue": 108
    },
    {
        "id": 3,
        "month": "April",
        "year": 2024,
        "revenue": 175
    }
];

const getAllRevenues = (req, res) => {
    res.json(revenues);
}

const createRevenue = (req, res) => {
    const revenue = { ...req.body, id: revenues.length + 1 };

    revenues.push(revenue);
    res.status(201).json(revenue);
}

const getRevenueById = (req, res) => {
    const { id } = req.params;
    const revenue = revenues.find((revenue) => revenue.id === Number(id));

    if (!revenue) {
        return res.status(404).json({ message: 'Revenue not found' });
    }

    res.json(revenue);
}

const updateRevenue = (req, res) => {
    const { id } = req.params;
    const revenue = revenues.find((revenue) => revenue.id === Number(id));

    if (!revenue) {
        return res.status(404).json({ message: 'Revenue not found' });
    }

    const updatedRevenue = { ...revenue, ...req.body };
    revenues = revenues.map((revenue) => (revenue.id === Number(id) ? updatedRevenue : revenue));

    res.json(updatedRevenue);
}

const deleteRevenue = (req, res) => {
    const { id } = req.params;
    const revenue = revenues.find((revenue) => revenue.id === Number(id));

    if (!revenue) {
        return res.status(404).json({ message: 'Revenue not found' });
    }

    revenues = revenues.filter((revenue) => revenue.id !== Number(id));

    res.json(revenue);
}

export {
    getAllRevenues,
    createRevenue,
    getRevenueById,
    updateRevenue,
    deleteRevenue
};