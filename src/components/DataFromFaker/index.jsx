import { Button, Input, Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { addItemBulkAction } from "../../redux/actions/items";
import { generateId } from "./../../utils/common";
import { Line } from "react-chartjs-2";

const DataFromFaker = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const [cd, setcd] = useState(null);
  const { items } = useSelector((state) => state);
  const loadDataFromFaker = () => {
    if (number) {
      const items = [];
      for (let i = 0; i < number; i++) {
        const { id } = generateId("item");
        const singleItem = {
          id,
          product: faker.commerce.department(),
          quantity: faker.datatype.number(),
          itemCode: faker.datatype.string(),
          hsn: faker.datatype.string(),
          salesPrice: faker.commerce.price(),
          purchasePrice: faker.commerce.price(),
          mrp: faker.commerce.price(),
          discount: faker.datatype.float(),
          texSlab: 5,
        };
        items.push(singleItem);
      }
      console.log(items);
      dispatch(addItemBulkAction(items));
    }
  };

  const changeDataSet = (val) => {
    setcd({
      labels: [...items.map((i) => i.product)],
      datasets: [
        {
          label: val,
          data: [...items.map((i) => i[val])],
          borderColor: "rgb(75, 192, 192)",
        },
      ],
    });
  };

  useEffect(() => {
    if (items.length) {
      setcd({
        labels: [...items.map((i) => i.product)],
        datasets: [
          {
            label: "Price",
            data: [...items.map((i) => i.salesPrice)],
            borderColor: "rgb(75, 192, 192)",
          },
        ],
      });
    }
  }, [items]);

  return (
    <div>
      <Button onClick={loadDataFromFaker}>load data</Button>
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        type="number"
        min={1}
      />
      {cd === null ? null : (
        <div style={{ padding: "100px 150px" }}>
          <div>
            <select onChange={(e) => changeDataSet(e.target.value)}>
              <option selected value="salesPrice">
                Sales Price
              </option>
              <option value="purchasePrice">Purchase Price</option>
              <option value="mrp">MRP</option>
            </select>
          </div>
          <Line data={cd} />
        </div>
      )}
    </div>
  );
};

export default DataFromFaker;
