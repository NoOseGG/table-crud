import { Modal } from "antd";

import { useState } from "react";

import { Table } from "../../../entities/table";
import { useAddItem } from "../../../entities/table/hooks/use-add-item";
import { useDeleteItem } from "../../../entities/table/hooks/use-delete-item";
import { useEditItem } from "../../../entities/table/hooks/use-edit-item";
import type { DataType } from "../../../entities/table/types/types";
import { CustomButton } from "../../../shared/ui";
import { ModalForm } from "../../modal-overlay/ui/modal-overlay";
import styles from "./crud-table.module.css";

export const CrudTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<DataType | null>(null);
  const { mutate: addItem } = useAddItem();
  const { mutate: deleteItem } = useDeleteItem();
  const { mutate: editItem } = useEditItem();

  const handleAdd = () => {
    setEditingItem(null);
    setIsOpen(true);
  };

  const handleEdit = (item: DataType) => {
    setEditingItem(item);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (item: DataType) => {
    if (editingItem) {
      editItem(item);
    } else {
      addItem(item);
    }
    setIsOpen(false);
  };

  const handleDelete = (item: DataType) => {
    Modal.confirm({
      title: "Are you sure you want to delete this item?",
      centered: true,
      okText: "Yes, delete",
      cancelText: "Cancel",
      onOk: () => {
        deleteItem(item);
      },
      onCancel: () => {},
    });
  };

  return (
    <div className={styles.crudTable}>
      <CustomButton text='Add item' onClick={handleAdd} />
      <Table onEdit={handleEdit} onDelete={handleDelete} />
      <ModalForm
        open={isOpen}
        item={editingItem}
        onCancel={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
