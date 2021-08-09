import React, { useState, useEffect } from "react";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { addItemBulkAction } from "../../redux/actions/items";
import { generateId } from "./../../utils/common";
import { Line } from "react-chartjs-2";
import { Button, InputNumber, Select, Space } from "antd";
import { Option } from "antd/lib/mentions";

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
        ...val.map((x, index) => ({
          label: x,
          data: [...items.map((i) => i[x])],
          borderColor: `rgb(75, ${index}00, 192)`,
        })),
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
            borderColor: "rgb(75, 000, 192)",
          },
        ],
      });
    }
  }, [items]);

  return (
    <div className="pt-10 px-5">
      <Space>
        <InputNumber
          min={1}
          value={number}
          onChange={(value) => setNumber(value)}
        />
        <Button onClick={loadDataFromFaker}>load data</Button>
      </Space>

      {cd === null ? null : (
        <div className="py-12 px-16">
          <div className="d-inline-flex" style={{ minWidth: "260px" }}>
            <Select
              style={{ width: "100%" }}
              mode="multiple"
              onChange={changeDataSet}
              defaultValue={["salesPrice"]}
              placeholder="Please select"
            >
              <Option key="salesPrice">Sales Price</Option>
              <Option key="purchasePrice">Purchase Price</Option>
              <Option key="mrp">MRP</Option>
            </Select>
            {/* <select onChange={(e) => changeDataSet(e.target.value)}>
              <option selected value="salesPrice">
                Sales Price
              </option>
              <option value="purchasePrice">Purchase Price</option>
              <option value="mrp">MRP</option>
            </select> */}
          </div>
          <Line data={cd} />
        </div>
      )}
    </div>
  );
};

export default DataFromFaker;
