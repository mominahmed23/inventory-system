import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Typography, Card, Space } from "antd";
import { deleteCategoryAction } from "./../../redux/actions/categories/index";
import CreateCatModal from "./../Forms/CreateCatModal";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const [isCatModalVisible, setIsCatModalVisible] = useState(false);
  const [editCatVal, setEditCatVal] = useState(null);
  const { categories } = useSelector((state) => state);
  const delCat = (id) => {
    dispatch(deleteCategoryAction(id));
  };
  const editCat = (i) => {
    setEditCatVal(i);
    setIsCatModalVisible(true);
  };
  return (
    <div>
      <Typography.Title level={3}>Categories</Typography.Title>
      <Space wrap>
        {categories.map((i) => (
          <Card
            key={i.id}
            style={{ minWidth: 150 }}
            actions={[
              <DeleteOutlined onClick={() => delCat(i.id)} />,
              <EditOutlined onClick={() => editCat(i)} />,
            ]}
          > 
          <Typography.Title level={4}>{i.name}</Typography.Title>
          </Card>
        ))}
      </Space>
      <CreateCatModal
        visible={isCatModalVisible}
        data={editCatVal}
        onCancel={() => setIsCatModalVisible(false)}
        onCloseModel={setIsCatModalVisible}
      />
    </div>
  );
};

export default CategoriesList;
