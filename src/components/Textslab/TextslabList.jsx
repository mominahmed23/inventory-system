import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Typography, Card, Space } from "antd";
import { deleteTextslabAction } from "./../../redux/actions/textslab/index";
import CreateSlabModal from "./../Forms/CreateSlabModal";

const TextslabList = () => {
  const dispatch = useDispatch();
  const [isSlabModalVisible, setIsSlabModalVisible] = useState(false);

  const { textslab } = useSelector((state) => state);
  const delTxt = (id) => {
    dispatch(deleteTextslabAction(id));
  };
  const editTxt = (id) => {
    console.log(id);
    setIsSlabModalVisible(true);
  };
  return (
    <div>
      <Typography.Title level={3}>TextSlab</Typography.Title>
      <Space wrap>
        {textslab.map((i) => (
          <Card
            key={i.id}
            style={{ width: 150 }}
            actions={[
              <DeleteOutlined onClick={() => delTxt(i.id)} />,
              <EditOutlined onClick={() => editTxt(i.id)} />,
            ]}
          >
            <Typography.Title level={4}>{i.name}</Typography.Title>
            <Typography.Title level={5}>{i.value}</Typography.Title>
          </Card>
        ))}
      </Space>
      <CreateSlabModal
        visible={isSlabModalVisible}
        onCancel={() => setIsSlabModalVisible(false)}
        onCloseModel={setIsSlabModalVisible}
      />
    </div>
  );
};

export default TextslabList;
