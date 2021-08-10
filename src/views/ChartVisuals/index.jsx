import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";
import { colorG, colorsGraph } from "../../utils/common";

const ChartVisuals = () => {
  const [cd, setcd] = useState(null);
  const { items } = useSelector((state) => state);

  const changeDataSet = (val) => {
    setcd({
      labels: [...items.map((i) => i.product)],
      datasets: [
        ...val.map((x, index) => ({
          label: x,
          data: [...items.map((i) => i[x])],
          borderColor: colorG[x],
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
            borderColor: colorG.salesPrice,
          },
        ],
      });
    }
  }, [items]);

  return (
    <div className="pt-10 px-5">
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
          </div>
          <Line data={cd} />
        </div>
      )}
    </div>
  );
};

export default ChartVisuals;
