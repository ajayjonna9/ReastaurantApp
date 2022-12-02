import React, { useState } from "react";
import Contex from "./Contex";

const ContexProvider = (props) => {
  const [itemValues, setItemValues] = useState([]);

  const addItemToCart = (item) => {
    setItemValues((pre) => {
      console.log("previous", pre);
      const indexOfExistingElement = pre.findIndex((preitem) => {
        return preitem.id === item.id;
      });
      const existingElement = pre[indexOfExistingElement];
      if (existingElement) {
        let updatedElement = {
          ...existingElement,
          quantity: existingElement.quantity + Number(item.quantity),
        };
        pre[indexOfExistingElement] = updatedElement;
        return [...pre];
      } else {
        return [...pre, item];
      }
    });
    console.log("helllo", itemValues);
  };
  const deleteItemToCart = (id) => {
    setItemValues((pre) => {
      const indexOfReducingElement = pre.findIndex((preitem) => {
        return preitem.id === id;
      });
      const reducingElement = pre[indexOfReducingElement];
      if (reducingElement.quantity > 1) {
        let updatedElement = {
          ...reducingElement,
          quantity: reducingElement.quantity - 1,
        };
        pre[indexOfReducingElement] = updatedElement;
        return [...pre];
      } else {
        const newpre = pre.filter((item) => {
          return item.id !== id;
        });
        pre = [...newpre];
        return [...pre];
      }
    });
  };

  const contexValues = {
    items: itemValues,

    addItem: addItemToCart,
    removeItem: deleteItemToCart,
  };

  return (
    <Contex.Provider value={contexValues}>{props.children}</Contex.Provider>
  );
};

export default ContexProvider;
