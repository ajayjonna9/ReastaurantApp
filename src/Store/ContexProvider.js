import React, { useState } from "react";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const [itemValues, setItemValues] = useState([]);
  const [idVal, setIds] = useState([]);
  const addItemToCart = (item) => {
    console.log(item.id);

    console.log(idVal);
    setItemValues((pre) => {
      return [...pre, item];
    });
  };
  const deleteItemToCart = (id) => {};
  const addingIds = (id) => {
    setIds((pre) => {
      return [...pre, id];
    });
  };
  const contexValues = {
    items: itemValues,
    totalamount: 0,
    itemsids: idVal,
    addids: addingIds,
    addItem: addItemToCart,
    removeItem: deleteItemToCart,
  };

  return (
    <Contex.Provider value={contexValues}>{props.children}</Contex.Provider>
  );
};

export default ContexProvider;
