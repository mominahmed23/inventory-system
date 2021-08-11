import { message, Modal } from "antd";
import { Form, Input, Button } from "antd";
import React from "react";
import faker from "faker";
import {
  addCategoryAction,
  editCategoryAction,
} from "../../redux/actions/categories/index";
import { useDispatch } from "react-redux";

const CreateCatModal = ({ data, visible, onCancel, onCloseModel }) => {
  const dispatch = useDispatch();
 
  const submitCat = (formValues) => {
    const singleCat = {
      id: faker.datatype.uuid(),
      name: formValues.name,
    };
    if (data) {
      dispatch(editCategoryAction({ id: data.id, ...formValues }));
    } else {
      dispatch(addCategoryAction(singleCat));
      message.success('Category Added Successfully');
      
    }
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
      <Form
        initialValues={data}
        layout="vertical"
        name="Cat"
        onFinish={submitCat}
      >
        <Form.Item
          label="Category Name"
          name="name"
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
