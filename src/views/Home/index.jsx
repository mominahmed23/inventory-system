import { Card, Space, Typography, Button, Row, Col, Table } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CreateCatModal from "../../components/Forms/CreateCatModal";
import CreateItemModal from "../../components/Forms/CreateItemModal";

const columns = [
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Price",
    dataIndex: "salesPrice",
  },
];

const Home = () => {
  const [isCatModalVisible, setIsCatModalVisible] = useState(false);
  const [isItemModalVisible, setIsItemModalVisible] = useState(false);

  const { categories, items } = useSelector((state) => state);
  return (
    <div className="py-5 px-8">
      <Typography.Title level={3}>Categories</Typography.Title>
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
      <Typography.Title level={3}>Items</Typography.Title>
      <div className="mb-5">
        <Table pagination={false} columns={columns} dataSource={items} />
      </div>

      <CreateCatModal
        visible={isCatModalVisible}
        onCancel={() => setIsCatModalVisible(false)}
        closeModel={setIsCatModalVisible}
      />
      <CreateItemModal
        visible={isItemModalVisible}
        onCancel={() => setIsItemModalVisible(false)}
        closeModel={setIsItemModalVisible}
      />
    </div>
  );
};

export default Home;
