import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Select } from "antd";
import { colorG } from "../../utils/common";

const ChartVisuals = () => {
  const [chartData, setChartData] = useState(null);
  const { items } = useSelector((state) => state);

  const changeDataSet = (values, valuesArr) => {
    setChartData({
      labels: [...items.map((i) => i.product)],
      datasets: [
        ...valuesArr.map((x) => ({
          label: x.children,
          data: [...items.map((i) => i[x.value])],
          borderColor: colorG[x.value],
        })),
      ],
    });
  };

  useEffect(() => {
    if (items.length) {
      setChartData({
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
      {chartData && (
        <div className="py-12 px-16">
          <div className="d-inline-flex" style={{ minWidth: "260px" }}>
            <Select
              style={{ width: "100%" }}
              mode="multiple"
              onChange={changeDataSet}
              defaultValue={["salesPrice"]}
              placeholder="Please select"
            >
              <Select.Option key="salesPrice">Sales Price</Select.Option>
              <Select.Option key="purchasePrice">Purchase Price</Select.Option>
              <Select.Option key="mrp">MRP</Select.Option>
            </Select>
          </div>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
};

export default ChartVisuals;
