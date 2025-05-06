let sales = [
  {
    id: 1,
    price: 10.65,
    quantity: 3,
    date: "16/06/2024",
    location: "Av. Paulista",
    paymentMethods: {
      creditCard: 0,
      debitCard: 0,
      cash: 0,
      pix: 3,
    },
  },
  {
    id: 2,
    price: 139.05,
    quantity: 35,
    date: "28/05/2024",
    location: "Centro de Limeira",
    paymentMethods: {
      creditCard: 0,
      debitCard: 0,
      cash: 2,
      pix: 33,
    },
  },
  {
    id: 3,
    price: 120.24,
    quantity: 37,
    date: "06/05/2024",
    location: "Av. Paulista",
    paymentMethods: {
      creditCard: 0,
      debitCard: 0,
      cash: 2,
      pix: 35,
    },
  },
  {
    id: 4,
    price: 66.27,
    quantity: 21,
    date: "19/02/2024",
    location: "Av. Paulista",
    paymentMethods: {
      creditCard: 0,
      debitCard: 0,
      cash: 14,
      pix: 7,
    },
  },
  {
    id: 5,
    price: 82.64,
    quantity: 26,
    date: "25/12/2024",
    location: "Centro de Limeira",
    paymentMethods: {
      creditCard: 0,
      debitCard: 0,
      cash: 8,
      pix: 18,
    },
  },
];

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
