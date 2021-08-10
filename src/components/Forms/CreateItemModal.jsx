import { Col, Modal, Row, Typography } from "antd";
import { Form, Input, Button, InputNumber, Select } from "antd";
import React from "react";
import faker from "faker";
import { addItemAction } from "../../redux/actions/items/index";
import { useDispatch, useSelector } from "react-redux";
import { taxSlabValues } from "../../utils/common";

const CreateItemModal = ({ visible, onCancel, onCloseModel }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);

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
      discount: formValues.discount,
      taxslab: formValues.taxslab,
      comment: formValues.comment,
    };
    dispatch(addItemAction(singleCat));
    onCloseModel(false);
  };

  return (
    <Modal
      footer={null}
      destroyOnClose
      title="Add Item"
      visible={visible}
      onCancel={onCancel}
    >
      {categories.length ? (
        <Form layout="vertical" name="Item" onFinish={submitItem}>
          <Row gutter={[16, 8]}>
            <Col xs={24} md={12} sm={12}>
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
            </Col>
            <Col xs={24} md={12} sm={12}>
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
                <InputNumber className="w-100" placeholder="Quantity" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} sm={12}>
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
                <Input placeholder="Item code / Barcode" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} sm={12}>
              <Form.Item
                label="HSN / SAC Code"
                name="hsn"
                rules={[
                  {
                    required: true,
                    message: "Please input HSN!",
                  },
                ]}
              >
                <Input placeholder="HSN / SAC code" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12} sm={12}>
              <Form.Item
                label="Sales Price"
                name="salesPrice"
                rules={[
                  {
                    required: true,
                    message: "Please input Sales Price!",
                  },
                ]}
              >
                <InputNumber className="w-100" placeholder="Sales Price" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} sm={12}>
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
                <InputNumber className="w-100" placeholder="Purchase Price" />
              </Form.Item>
            </Col>

            <Col xs={24} md={12} sm={12}>
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
                <InputNumber className="w-100" placeholder="MRP" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12} sm={12}>
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
                <InputNumber className="w-100" placeholder="Discount" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="taxslab"
            label="Tax Slab"
            rules={[{ required: true, message: "Please input Tax Slab!" }]}
          >
            <Select placeholder="Tax Slab">
              {taxSlabValues.map((x) => (
                <Select.Option key={x} value={x}>
                  {x}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item name="categoryId" label="Category">
            <Select placeholder="Category">
              {categories.map((x) => (
                <Select.Option key={x.id} value={x.id}>
                  {x.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Comment" name="comment">
            <Input.TextArea placeholder="Comment" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      ) : (
        <Typography.Title level={4}>Add some Categories first</Typography.Title>
      )}
    </Modal>
  );
};

export default CreateItemModal;
