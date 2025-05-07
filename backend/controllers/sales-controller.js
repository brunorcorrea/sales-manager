import { create, findMany, findOne, updateOne, deleteOne } from "../repositories/sales-repository.js";

const getAllSales = async (_, res) => {
  const sales = await findMany();
  res.json(sales);
};

const createSale = async (req, res) => {
  const sale = { ...req.body };

  const createdSale = await create(sale);

  if (!createdSale) {
    return res.status(400).json({ message: "Error creating sale" });
  }

  res.status(201).json(createdSale);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;

  const sale = await findOne(id);

  if (!sale) {
    return res.status(404).json({ message: "Sale not found" });
  }

  res.json(sale);
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = await findOne(id);

  if (!sale) {
    return res.status(404).json({ message: "Sale not found" });
  }

  const updatedSale = await updateOne(id, req.body);

  if (!updatedSale) {
    return res.status(400).json({ message: "Error updating sale" });
  }

  res.json(updatedSale);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const sale = await findOne(id);

  if (!sale) {
    return res.status(404).json({ message: "Sale not found" });
  }

  const deletedSale = await deleteOne(id);

  res.json(deletedSale);
};

export { getAllSales, createSale, getSaleById, updateSale, deleteSale };
