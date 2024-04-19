import React, { useEffect } from "react";

import AdminTableData from "components/admin-table-data";
import ProductCreateForm from "./partials/product-create-form";

import { getProducts, getBuyersHistoryItems } from "api/products";
import dayjs from "dayjs";

import {
  BUYERS_HISTORY_TABLE_HEAD_CELLS,
  PRODUCTS_TABLE_HEAD_CELLS,
} from "constants/common";

import useProducts from "hooks/useProducts";

const AdminHome = () => {
  const {
    handleSetProducts,
    products,
    handleSetBuyersHistoryItems,
    buyersHistoryItems,
  } = useProducts();

  useEffect(() => {
    getProducts()
      .then((res) => handleSetProducts(res.data))
      .catch((err) => alert(err.message));

    getBuyersHistoryItems()
      .then((res) => handleSetBuyersHistoryItems(res.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="admin-home">
      <div className="admin-home-main">
        <div className="admin-home-title">Admin Page</div>
        <div className="admin-home-buyers-history">
          <AdminTableData
            title="Buyers History"
            tableHeadCells={BUYERS_HISTORY_TABLE_HEAD_CELLS}
            tableBodyCells={buyersHistoryItems?.map((item) => ({
              ...item,
              buy_date: dayjs(item.buy_date).format("DD.MM.YY"),
            }))}
          />
        </div>
        <div className="admin-home-products">
          <AdminTableData
            title="Products"
            tableHeadCells={PRODUCTS_TABLE_HEAD_CELLS}
            tableBodyCells={products}
          />
          <div className="admin-home-products-create-form">
            <ProductCreateForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
