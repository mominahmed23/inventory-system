import { Button, Row, Col, InputNumber, message } from "antd";
import React, { useState } from "react";
import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { addItemBulkAction } from "../../redux/actions/items";
import { addCategoryBulkAction } from "../../redux/actions/categories";
import { taxSlabValues } from "../../utils/common";
import CreateCatModal from "../../components/Forms/CreateCatModal";
import CreateSlabModal from "../../components/Forms/CreateSlabModal";
import CreateItemModal from "../../components/Forms/CreateItemModal";
import CategoriesList from "../../components/Category/CategoriesList";
import TextslabList from "../../components/Textslab/TextslabList";
import { addTextslabBulkAction } from "../../redux/actions/textslab";
import ItemsTable from "../../components/Item/ItemsTable";

const Home = () => {
  const dispatch = useDispatch();
  const [isCatModalVisible, setIsCatModalVisible] = useState(false);
  const [isItemModalVisible, setIsItemModalVisible] = useState(false);
  const [isSlabModalVisible, setIsSlabModalVisible] = useState(false);
  const [itemNumber, setItemNumber] = useState(1);
  const [catNumber, setCatNumber] = useState(1);
  const [taxNumber, setTaxNumber] = useState(1);

  
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
      message.success('Category(s) Added Successfully');
    }
  };

  const loadTextslabFromFaker = () => {
    if (taxNumber) {
      const newtextslab = [];
      for (let i = 0; i < taxNumber; i++) {
        const singleTxt = {
          id: faker.datatype.uuid(),
          name: faker.company.companyName(),
          value: taxSlabValues[Math.floor(Math.random() * taxSlabValues.length)],
        };
        newtextslab.push(singleTxt);
      }
      dispatch(addTextslabBulkAction(newtextslab));
    }
  };

  const loadItemsFromFaker = () => {
    if (itemNumber) {
      const newitems = [];
      for (let i = 0; i < itemNumber; i++) {
        const singleItem = {
          id: faker.datatype.uuid(),
          categoryId:categories[Math.floor(Math.random() * categories.length)].id,
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
      message.success('Item(s) Added Successfully');
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

          <div className="d-flex mb-5">
            <InputNumber
              className="mr-2"
              min={1}
              value={taxNumber}
              onChange={(value) => setTaxNumber(value)}
            />
            <Button onClick={loadTextslabFromFaker}>
              Load TaxSlab faker
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
            <Button className="mr-2" onClick={() => setIsItemModalVisible(true)}>
              Add Item
            </Button>
            <Button onClick={() => setIsSlabModalVisible(true)}>
              Add TaxSlab
            </Button>
          </div>
        </Col>
        <Col lg={18} md={12} sm={24}>
          <CategoriesList />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col span={18}>
          <TextslabList />
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
      <CreateSlabModal
        visible={isSlabModalVisible}
        onCancel={() => setIsSlabModalVisible(false)}
        onCloseModel={setIsSlabModalVisible}
      />
    </div>
  );
};

export default Home;
