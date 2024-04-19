import { createContext, useMemo, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [buyersHistoryItems, setBuyersHistoryItems] = useState([]);

  const handleSetProducts = async (products) => {
    setProducts(products);
  };

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSetBuyersHistoryItems = (items) => {
    setBuyersHistoryItems(items);
  };

  const value = useMemo(
    () => ({
      products,
      handleSetProducts,
      handleAddProduct,
      selectedProduct,
      handleSelectProduct,
      buyersHistoryItems,
      handleSetBuyersHistoryItems,
    }),
    [handleSetProducts, products, selectedProduct]
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
