import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";

const CardPlace = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <div className=" ">
      <Buttons
        filterItem={filterItem}
        setItem={setItem}
        menuItems={menuItems}
      />
      <Card item={item} />
    </div>
  );
};

export default CardPlace;
