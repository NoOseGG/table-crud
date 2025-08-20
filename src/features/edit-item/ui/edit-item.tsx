import { useState } from "react";

import type { DataType } from "../../../entities/table/types/types";
import { CustomButton } from "../../../shared/ui";
import { ModalForm } from "../../../widgets/modal-overlay/ui/modal-overlay";
import styles from "./edit-item.module.css";

export const EditItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<DataType | null>(null);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleSubmit = (item: DataType) => {
    console.log("edited item", item);
    setCurrentItem(item);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <CustomButton text='Add item' onClick={handleOpen} />
      <ModalForm
        open={isOpen}
        item={currentItem}
        onCancel={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
