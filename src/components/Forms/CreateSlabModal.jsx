import { Modal } from "antd";
import { Form, Input, Button } from "antd";
import React from "react";
import faker from "faker";
import { addtextslabAction } from "../../redux/actions/textslab/index";
import { useDispatch } from "react-redux";

const CreateSlabModal = ({ visible, onCancel, onCloseModel }) => {
  const dispatch = useDispatch();

  const submitText = (formValues) => {
    const singletextslab = {
      id: faker.datatype.uuid(),
      name: formValues.textName,
      value: formValues.textValue,
    };
    dispatch(addtextslabAction(singletextslab));
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
          label="TextSlab Name"
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
          label="TextSlab Value"
          name="textValue"
          rules={[
            {
              required: true,
              message: "Please input TextSlab Value!",
            },
          ]}
        >
          <Input placeholder="TextSlab Value" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateSlabModal;
