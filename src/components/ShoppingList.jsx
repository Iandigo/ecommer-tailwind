import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../state";
import data from "../data.json";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);

  dispatch(setItems(data.data));

  const [selectedOption, setSelectedOption] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (value, buttonId) => {
    setSelectedOption(value);
    setActiveButton(buttonId);
  };

  return (
    <div className="flex flex-col items-center py-20 px-10 bg-gray-20">
      <h1 className="text-center font-bold">OUR FEATURE PRODUCTS</h1>
      <div className="flex justify-center gap-10 pt-7 text-gray-600 cusor-pointer px-5 md:px-0">
        <button
          className={`${activeButton === "all" ? "text-primary-500" : ""}`}
          value={""}
          onClick={(e) => {
            handleButtonClick(e.target.value, "all");
          }}
        >
          ALL
        </button>
        <button
          className={`${activeButton === "new" ? "text-primary-500" : ""}`}
          value={"NEW ARRIVALS"}
          onClick={(e) => {
            handleButtonClick(e.target.value, "new");
          }}
        >
          NEW ARRIVALS
        </button>
        <button
          className={`${activeButton === "best" ? "text-primary-500" : ""}`}
          value={"BEST SELLERS"}
          onClick={(e) => {
            handleButtonClick(e.target.value, "best");
          }}
        >
          BEST SELLERS
        </button>
        <button
          className={`${activeButton === "top" ? "text-primary-500" : ""}`}
          value={"TOP RATED"}
          onClick={(e) => {
            handleButtonClick(e.target.value, "top");
          }}
        >
          TOP RATED
        </button>
      </div>
      <Item selectedOption={selectedOption} items={items} />
    </div>
  );
};

export default ShoppingList;
