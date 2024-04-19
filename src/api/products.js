import axios from "utils/axios";

const createProduct = async (payload) => {
  try {
    const data = await axios.post("/product/create", payload);

    return data;
  } catch (err) {
    return err;
  }
};

const getProducts = async () => {
  try {
    const data = await axios("/products");

    return data;
  } catch (err) {
    return err;
  }
};

const getBuyersHistoryItems = async () => {
  try {
    const data = await axios("/buyers-history");

    return data;
  } catch (err) {
    return err;
  }
};

const getAllProducts = async () => {
  try {
    const data = await axios("/products/all");

    return data;
  } catch (err) {
    return err;
  }
};

const buyProducts = async (payload) => {
  try {
    const data = await axios.post("/products/buy", payload);

    return data;
  } catch (err) {
    return err;
  }
};

export {
  createProduct,
  getProducts,
  getBuyersHistoryItems,
  getAllProducts,
  buyProducts,
};
