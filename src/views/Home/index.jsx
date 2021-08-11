import { Button, Row, Col, InputNumber } from "antd";
import React, { useState } from "react";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { addItemBulkAction } from "../../redux/actions/items";
import { addCategoryBulkAction } from "../../redux/actions/categories";
import { taxSlabValues } from "../../utils/common";
import CreateCatModal from "../../components/Forms/CreateCatModal";
import CreateItemModal from "../../components/Forms/CreateItemModal";
import CategoriesList from "../../components/Category/CategoriesList";
import ItemsTable from "../../components/Item/ItemsTable";

const Home = () => {
  const dispatch = useDispatch();
  const [isCatModalVisible, setIsCatModalVisible] = useState(false);
  const [isItemModalVisible, setIsItemModalVisible] = useState(false);
  const [itemNumber, setItemNumber] = useState(1);
  const [catNumber, setCatNumber] = useState(1);

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
          taxslab:
            taxSlabValues[Math.floor(Math.random() * taxSlabValues.length)],
          comment: faker.lorem.sentence(),
        };
        newitems.push(singleItem);
      }
      dispatch(addItemBulkAction(newitems));
    }
  };

  const { categories } = useSelector((state) => state);
  return (
    <div className="py-5 px-8">
      <Row className="mb-5">
        <Col lg={6} md={12} sm={24}>
          <div className="d-flex mb-5">
            <InputNumber
              className="mr-2"
              min={1}
              value={catNumber}
              onChange={(value) => setCatNumber(value)}
            />
            <Button onClick={loadCategoriesFromFaker}>
              Load Categories faker
            </Button>
          </div>

          {!!categories.length && (
            <div className="d-flex mb-5">
              <InputNumber
                className="mr-2"
                min={1}
                value={itemNumber}
                onChange={(value) => setItemNumber(value)}
              />
              <Button onClick={loadItemsFromFaker}>Load Items faker</Button>
            </div>
          )}
          <div className="d-flex">
            <Button className="mr-2" onClick={() => setIsCatModalVisible(true)}>
              Add Category
            </Button>
            <Button onClick={() => setIsItemModalVisible(true)}>
              Add Item
            </Button>
          </div>
        </Col>
        <Col lg={18} md={12} sm={24}>
          <CategoriesList />
        </Col>
      </Row>
      <ItemsTable />
      <CreateCatModal
        visible={isCatModalVisible}
        onCancel={() => setIsCatModalVisible(false)}
        onCloseModel={setIsCatModalVisible}
      />
      <CreateItemModal
        visible={isItemModalVisible}
        onCancel={() => setIsItemModalVisible(false)}
        onCloseModel={setIsItemModalVisible}
      />
    </div>
  );
};

export default Home;
