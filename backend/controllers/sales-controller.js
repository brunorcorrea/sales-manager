let sales = [];

const getAllSales = (req, res) => {
    res.json(sales);
}

const createSale = (req, res) => {
    const sale = { ...req.body, id: sales.length + 1 };

    sales.push(sale);
    res.status(201).json(sale);
}

const getSaleById = (req, res) => {
    const { id } = req.params;
    const sale = sales.find((sale) => sale.id === Number(id));

    if (!sale) {
        return res.status(404).json({ message: 'Sale not found' });
    }

    res.json(sale);
}

const updateSale = (req, res) => {
    const { id } = req.params;
    const sale = sales.find((sale) => sale.id === Number(id));

    if (!sale) {
        return res.status(404).json({ message: 'Sale not found' });
    }

    const updatedSale = { ...sale, ...req.body };
    sales = sales.map((sale) => (sale.id === Number(id) ? updatedSale : sale));

    res.json(updatedSale);
}

const deleteSale = (req, res) => {
    const { id } = req.params;
    const sale = sales.find((sale) => sale.id === Number(id));

    if (!sale) {
        return res.status(404).json({ message: 'Sale not found' });
    }

    sales = sales.filter((sale) => sale.id !== Number(id));

    res.json(sale);
}

export {
    getAllSales,
    createSale,
    getSaleById,
    updateSale,
    deleteSale
};