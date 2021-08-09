import React, { useState } from "react";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { addItemBulkAction } from "../../redux/actions/items";
import { Button, InputNumber, Space } from "antd";
import { addCategoryBulkAction } from "../../redux/actions/categories";
import { texSlabValues } from "../../utils/common";

const LoadData = () => {
  const dispatch = useDispatch();
  const [itemNumber, setItemNumber] = useState(1);
  const [catNumber, setCatNumber] = useState(1);
  const { categories } = useSelector((state) => state);

  const loadCategoriesFromFaker = () => {
    if (catNumber) {
      const newcategories = [];
      for (let i = 0; i < catNumber; i++) {
        const singleCat = {
          id: faker.datatype.uuid(),
          name: faker.commerce.department(),
        };
        newcategories.push(singleCat);
      }
      dispatch(addCategoryBulkAction(newcategories));
    }
  };
  const loadItemsFromFaker = () => {
    if (itemNumber) {
      const newitems = [];
      for (let i = 0; i < itemNumber; i++) {
        const singleItem = {
          id: faker.datatype.uuid(),
          categoryId:
            categories[Math.floor(Math.random() * categories.length)].id,
          product: faker.commerce.product(),
          quantity: faker.datatype.number(),
          itemCode: faker.datatype.string(),
          hsn: faker.datatype.string(),
          salesPrice: faker.commerce.price(),
          purchasePrice: faker.commerce.price(),
          mrp: faker.commerce.price(),
          discount: faker.datatype.float(),
          texSlab:
            texSlabValues[Math.floor(Math.random() * texSlabValues.length)],
        };
        newitems.push(singleItem);
      }
      dispatch(addItemBulkAction(newitems));
    }
  };
  return (
    <div className="pt-10 px-5">
      <Space>
        <InputNumber
          min={1}
          value={catNumber}
          onChange={(value) => setCatNumber(value)}
        />
        <Button onClick={loadCategoriesFromFaker}>Load Categories faker</Button>
      </Space>
      {categories.length ? (
        <div className="mt-5">
          <Space>
            <InputNumber
              min={1}
              value={itemNumber}
              onChange={(value) => setItemNumber(value)}
            />
            <Button onClick={loadItemsFromFaker}>Load Items faker</Button>
          </Space>
        </div>
      ) : null}
    </div>
  );
};

export default LoadData;
