import { Modal } from "antd";
import { Form, Input, Button , InputNumber , Select } from "antd";
// import { Option } from "antd/lib/mentions";
import React from "react";
import faker from "faker";
import { useDispatch } from "react-redux";
import { addItemAction } from "./../../redux/actions/items/index";
const { Option } = Select;
const CreatItemModal = ({ visible, onCancel, closeModel }) => {
  const dispatch = useDispatch();
  const submitItem = (formValues) => {
    const singleCat = {
      id: faker.datatype.uuid(),
      product: formValues.product,
      quantity: formValues.quantity,
      itemCode: formValues.itemCode,
      hsn: formValues.hsn,
      salesPrice: formValues.salesPrice,
      purchasePrice: formValues.purchasePrice,
      mrp: formValues.mrp,
      comment:formValues.comment,
      taxslab:formValues.taxslab
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
        <Form.Item
          label="Quantity"
          name="quantity"
          rules={[
            {
              required: true,
              message: "Please input Quantity!",
            },
          ]}
        >
          <InputNumber style={{ width: 200 }} placeholder="Quantity" />
        </Form.Item>

        <Form.Item
          label="Item Code/ Bar Code"
          name="itemCode"
          rules={[
            {
              required: true,
              message: "Please input Item Code!",
            },
          ]}
        >
          <InputNumber style={{ width: 200 }} placeholder="ItemCode" />
        </Form.Item>

        <Form.Item
          label="HSN/SAC Code"
          name="hsn"
          rules={[
            {
              required: true,
              message: "Please input Hsn!",
            },
          ]}
        >
          <InputNumber style={{ width: 200 }} placeholder="Hsn" />
        </Form.Item>

        <Form.Item
          label="Sales Price"
          name="salesPrice"
          rules={[
            {
              required: true,
              message: "Please input SalesPrice!",
            },
          ]}
        >
          <InputNumber style={{ width: 200 }} placeholder="SalesPrice" />
        </Form.Item>

        <Form.Item
          label="Purchase Price"
          name="purchasePrice"
          rules={[
            {
              required: true,
              message: "Please input Purchase Price!",
            },
          ]}
        >
          <InputNumber style={{ width: 200 }} placeholder="Purchase Price" />
        </Form.Item>

        <Form.Item
          label="MRP"
          name="mrp"
          rules={[
            {
              required: true,
              message: "Please input MRP!",
            },
          ]}
        >
          <InputNumber style={{ width: 200 }} placeholder="MRP" />
        </Form.Item>

        <Form.Item
          label="Discount"
          name="discount"
          rules={[
            {
              required: true,
              message: "Please input Discount!",
            },
          ]}
        >
          <InputNumber style={{ width: 200 }} placeholder="Discount" />
        </Form.Item>

        <Form.Item
          label="Comment"
          name="comment"
          rules={[
            {
              required: true,
              message: "Please input Comment!",
            },
          ]}
        >
          <Input style={{ width: 200 }} placeholder="Comment" />
        </Form.Item>

        <Form.Item name="taxslab" label="Tax Slab" rules={[{ required: true }]}>
          <Select
            placeholder="Tax Slab"
            // onChange={this.onGenderChange}
            allowClear
          >
            <Option value="5">5</Option>
            <Option value="12">12</Option>
            <Option value="18">18</Option>
            <Option value="28">28</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreatItemModal;
