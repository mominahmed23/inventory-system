import { Modal } from "antd";
import { Form, Input, Button } from "antd";
import React from "react";
import faker from "faker";
import { addCategoryAction } from "../../redux/actions/categories/index";
import { useDispatch } from "react-redux";

const CreateCatModal = ({ visible, onCancel, onCloseModel }) => {
  const dispatch = useDispatch();

  const submitCat = (formValues) => {
    const singleCat = {
      id: faker.datatype.uuid(),
      name: formValues.catName,
    };
    dispatch(addCategoryAction(singleCat));
    onCloseModel(false);
  };

  return (
    <Modal
      footer={null}
      destroyOnClose
      title="Add Category"
      visible={visible}
      onCancel={onCancel}
    >
      <Form layout="vertical" name="Cat" onFinish={submitCat}>
        <Form.Item
          label="Category Name"
          name="catName"
          rules={[
            {
              required: true,
              message: "Please input Category Name!",
            },
          ]}
        >
          <Input placeholder="Category Name" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCatModal;
