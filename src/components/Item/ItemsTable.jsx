import { Table, Typography } from "antd";
import React, { useState } from "react";
import { ItemsColumns } from "./../../utils/ItemTableColumns";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemAction } from "./../../redux/actions/items/index";
import CreateItemModal from "./../Forms/CreateItemModal";

const ItemsTable = () => {
  const { items } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isItemModalVisible, setIsItemModalVisible] = useState(false);
  const [editItemVal, setItemCatVal] = useState(null);

  const delItem = (id) => {
    dispatch(deleteItemAction(id));
  };
  const editItem = (item) => {
    setItemCatVal(item);
    setIsItemModalVisible(true);
  };
  return (
    <div className="mb-5">
      <Typography.Title level={3}>Items</Typography.Title>
      <Table
        pagination={false}
        columns={ItemsColumns(delItem, editItem)}
        dataSource={items}
      />
      <CreateItemModal
        data={editItemVal}
        visible={isItemModalVisible}
        onCancel={() => setIsItemModalVisible(false)}
        onCloseModel={setIsItemModalVisible}
      />
    </div>
  );
};

export default ItemsTable;
