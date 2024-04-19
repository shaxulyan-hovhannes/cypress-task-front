const ROLES = {
  user: "user",
  admin: "admin",
};

const ROUTES = {
  home: "/",
  signIn: "/sign-in",
  signUp: "/sign-up",
};

const BUYERS_HISTORY_TABLE_HEAD_CELLS = {
  id: "ID",
  username: "Username",
  product: "Products",
  totalAmount: "Total Amount $",
  buy_date: "Date",
};

const PRODUCTS_TABLE_HEAD_CELLS = {
  id: "ID",
  name: "Product Name",
  price: "Product Price",
};

export {
  ROLES,
  ROUTES,
  BUYERS_HISTORY_TABLE_HEAD_CELLS,
  PRODUCTS_TABLE_HEAD_CELLS,
};
