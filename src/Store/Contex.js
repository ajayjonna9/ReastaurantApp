import React from "react";

const Contex = React.createContext({
  items: [],
  totalamount: 0,
  itemsids: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  addids: (id) => {},
});

export default Contex;
