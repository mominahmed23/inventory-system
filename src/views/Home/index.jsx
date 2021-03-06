import { Button, Row, Col, InputNumber, Input, message, Space } from "antd";
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

  const { categories, taxSlab } = useSelector((state) => state);

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
      message.success("Category(s) Added Successfully");
    }
  };

  const loadTextslabFromFaker = () => {
    if (taxNumber) {
      const newtextslab = [];
      for (let i = 0; i < taxNumber; i++) {
        const singleTxt = {
          id: faker.datatype.uuid(),
          name: faker.finance.transactionType(),
          value:
            taxSlabValues[Math.floor(Math.random() * taxSlabValues.length)],
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
          taxslab: [taxSlab[Math.floor(Math.random() * taxSlab.length)].value],
          comment: faker.lorem.sentence(),
        };
        newitems.push(singleItem);
      }
      dispatch(addItemBulkAction(newitems));
      message.success("Item(s) Added Successfully");
    }
  };

  return (
    <div className="py-5 px-8">
      <Row gutter={[24, 8]}>
        <Col lg={16} md={24} sm={24}>
          <div className="d-flex flex-wrap justify-space-between">
            <div>
              <InputNumber
                min={1}
                value={catNumber}
                onChange={(value) => setCatNumber(value)}
              />
              <Button onClick={loadCategoriesFromFaker}>
                Load Categories faker
              </Button>
            </div>

            <div>
              <InputNumber
                min={1}
                value={taxNumber}
                onChange={(value) => setTaxNumber(value)}
              />
              <Button onClick={loadTextslabFromFaker}>
                Load TaxSlab faker
              </Button>
            </div>

            {!!categories.length && (
              <div>
                <InputNumber
                  min={1}
                  value={itemNumber}
                  onChange={(value) => setItemNumber(value)}
                />
                <Button onClick={loadItemsFromFaker}>Load Items faker</Button>
              </div>
            )}
          </div>
        </Col>
        <Col lg={8} md={24} sm={24}>
          <div className="d-flex flex-wrap justify-space-between">
            <Button onClick={() => setIsCatModalVisible(true)}>
              Add Category
            </Button>
            <Button onClick={() => setIsItemModalVisible(true)}>
              Add Item
            </Button>
            <Button onClick={() => setIsSlabModalVisible(true)}>
              Add TaxSlab
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={12} sm={24}>
          <CategoriesList />
        </Col>
        <Col lg={12} md={12} sm={24}>
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
