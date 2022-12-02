import React from "react";

const Contex = React.createContext({
  items: [],

  addItem: (item) => {},
  removeItem: (id) => {},
});

export default Contex;
