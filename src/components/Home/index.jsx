import { Card, Space, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { categories } = useSelector((state) => state);
  return (
    <div className="py-5 px-8">
      <Typography.Title>Categories</Typography.Title>
      <Space>
        {categories.map((i) => (
          <Card>
            <p>{i.name}</p>
          </Card>
        ))}
      </Space>
    </div>
  );
};

export default Home;
