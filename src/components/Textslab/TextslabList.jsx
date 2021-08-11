import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Typography, Card, Space } from "antd";
import { deleteTextslabAction } from "./../../redux/actions/textslab/index";
import CreateSlabModal from "./../Forms/CreateSlabModal";

const TextslabList = () => {
  const dispatch = useDispatch();
  const [isSlabModalVisible, setIsSlabModalVisible] = useState(false);
  const [editTaxVal, setEditTaxVal] = useState(null);
  const { taxSlab } = useSelector((state) => state);
  const delTxt = (id) => {
    dispatch(deleteTextslabAction(id));
  };
  const editTxt = (id) => {
    console.log(id);
    setEditTaxVal(id);
    setIsSlabModalVisible(true);
  };
  return (
    <div>
      <Typography.Title level={3}>TaxSlab</Typography.Title>
      <Space wrap>
        {taxSlab.map((i) => (
          <Card
            key={i.id}
            style={{ width: 150 }}
            actions={[
              <DeleteOutlined onClick={() => delTxt(i.id)} />,
              <EditOutlined onClick={() => editTxt(i)} />,
            ]}
          >
            <Typography.Title level={4}>{i.name}</Typography.Title>
            <Typography.Title level={5}>{i.value}</Typography.Title>
          </Card>
        ))}
      </Space>
      <CreateSlabModal
        visible={isSlabModalVisible}
        data={editTaxVal}
        onCancel={() => setIsSlabModalVisible(false)}
        onCloseModel={setIsSlabModalVisible}
      />
    </div>
  );
};

export default TextslabList;
