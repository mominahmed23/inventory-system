import { Modal } from "antd";
import { Form, Input, Button } from "antd";
import React from "react";
import faker from "faker";
import { useDispatch } from "react-redux";
import { addItemAction } from "./../../redux/actions/items/index";

const CreatItemModal = ({ visible, onCancel, closeModel }) => {
  const dispatch = useDispatch();
  const submitItem = (formValues) => {
    const singleCat = {
      id: faker.datatype.uuid(),
      product: formValues.product,
    };
    dispatch(addItemAction(singleCat));
    closeModel(false);
  };
  return (
    <Modal
      footer={null}
      destroyOnClose
      title="Add Item"
      visible={visible}
      onCancel={onCancel}
    >
      <Form layout="vertical" name="Item" onFinish={submitItem}>
        <Form.Item
          label="Product"
          name="product"
          rules={[
            {
              required: true,
              message: "Please input Product!",
            },
          ]}
        >
          <Input placeholder="Product" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreatItemModal;
