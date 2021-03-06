import { Modal } from "antd";
import { Form, Input, Button } from "antd";
import React from "react";
import faker from "faker";
import { addtextslabAction , editTaxAction } from "../../redux/actions/textslab/index";
import { useDispatch } from "react-redux";

const CreateSlabModal = ({ visible, onCancel, onCloseModel , data }) => {
  console.log(data)
  const dispatch = useDispatch();

  const submitText = (formValues) => {
    const singleTaxSlab = {
      id: faker.datatype.uuid(),
      name: formValues.name,
      value: formValues.value,
    };
    if (data) {
      dispatch(editTaxAction({id: data.id, ...formValues}));
    } else {
      dispatch(addtextslabAction(singleTaxSlab));
    }
    onCloseModel(false);
  };

  return (
    <Modal
      footer={null}
      destroyOnClose
      title="Add TaxSlab"
      visible={visible}
      onCancel={onCancel}
    >
      <Form initialValues={data} layout="vertical" name="TaxSlab" onFinish={submitText}>
        <Form.Item
          label="TaxSlab Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input TaxSlab Name!",
            },
          ]}
        >
          <Input placeholder="TaxSlab Name" />
        </Form.Item>
        <Form.Item
          label="TaxSlab Value"
          name="value"
          rules={[
            {
              required: true,
              message: "Please input TaxSlab Value!",
            },
          ]}
        >
          <Input placeholder="TaxSlab Value" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateSlabModal;
