import { Button } from "antd";

export const ItemsColumns = (onDel, onEdit) => [
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Price",
    dataIndex: "salesPrice",
  },
  {
    title: "MRP",
    dataIndex: "mrp",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Actions",
    render: (value) => (
      <>
        <Button
          onClick={() => {
            onDel(value.id);
          }}
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            onEdit(value);
          }}
        >
          Edit
        </Button>
      </>
    ),
  },
];
