import { Card, Space, Typography, Button, Row, Col } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreatCatModal from "./../../components/common/CreatCatModal";
import CreatItemModal from "./../../components/common/CreatItemModal";

const Home = () => {
  const [isCatModalVisible, setIsCatModalVisible] = useState(false);
  const [isItemModalVisible, setIsItemModalVisible] = useState(false);

  const { categories, items } = useSelector((state) => state);
  return (
    <div className="py-5 px-8">
      <Typography.Title>Categories</Typography.Title>
      <Row className="mb-5">
        <Col span={18}>
          <Space wrap>
            {categories.map((i) => (
              <Card>
                <p>{i.name}</p>
              </Card>
            ))}
          </Space>
        </Col>
        <Col span={6}>
          <div className="d-flex flex-column">
            <Button onClick={() => setIsCatModalVisible(true)}>
              Add Category
            </Button>
            <Button onClick={() => setIsItemModalVisible(true)}>
              Add Item
            </Button>
          </div>
        </Col>
      </Row>
      <Typography.Title>Items</Typography.Title>
      <Row className="mb-5">
        <Col span={18}>
          <Space wrap>
            {items.map((i) => (
              <Card>
                <p>{i.product}</p>
              </Card>
            ))}
          </Space>
        </Col>
      </Row>

      <CreatCatModal
        visible={isCatModalVisible}
        onCancel={() => setIsCatModalVisible(false)}
        closeModel={setIsCatModalVisible}
      />
      <CreatItemModal
        visible={isItemModalVisible}
        onCancel={() => setIsItemModalVisible(false)}
        closeModel={setIsItemModalVisible}
      />
    </div>
  );
};

export default Home;
