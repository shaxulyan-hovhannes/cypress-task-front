import { useContext } from "react";

import { ProductsContext } from "components/products-provider";

const useProducts = () => {
  return useContext(ProductsContext);
};

export default useProducts;
