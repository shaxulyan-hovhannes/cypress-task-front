import React, { useEffect } from "react";

import BuyWidget from "components/buy-widget";

import { getAllProducts } from "api/products";

import useProducts from "hooks/useProducts";

const UserHome = () => {
  const { handleSetProducts } = useProducts();

  useEffect(() => {
    getAllProducts()
      .then((res) => handleSetProducts(res.data))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <div className="user-home">
      <div className="user-home-main">
        <div className="user-home-title">Employee Page</div>
        <BuyWidget />
      </div>
    </div>
  );
};

export default UserHome;
