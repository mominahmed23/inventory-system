import { Modal } from "antd";
import { Form, Input, Button } from "antd";
import React from "react";
import faker from "faker";
import { addCategoryAction } from "../../redux/actions/categories/index";
import { useDispatch } from "react-redux";

const CreateSlabModal = ({ visible, onCancel, onCloseModel }) => {
  const dispatch = useDispatch();

  const submitText = (formValues) => {
    const singleCat = {
      id: faker.datatype.uuid(),
      name: formValues.textName,
      value: formValues.textValue,
    };
    dispatch(addCategoryAction(singleCat));
    onCloseModel(false);
  };

  return (
    <Modal
      footer={null}
      destroyOnClose
      title="Add TextSlab"
      visible={visible}
      onCancel={onCancel}
    >
      <Form layout="vertical" name="TextSlab" onFinish={submitText}>
        <Form.Item
          label="TextSLab Name"
          name="textName"
          rules={[
            {
              required: true,
              message: "Please input TextSlab Name!",
            },
          ]}
        >
          <Input placeholder="TextSlab Name" />
        </Form.Item>
        <Form.Item
          label="TextSLab Value"
          name="textValue"
          rules={[
            {
              required: true,
              message: "Please input TextSLab Value!",
            },
          ]}
        >
          <Input placeholder="TextSLab Value" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateSlabModal;
