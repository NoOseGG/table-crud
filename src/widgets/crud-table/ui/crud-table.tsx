import { Table } from "../../../entities/table";
import { AddItem } from "../../../features/add-item";
import styles from "./crud-table.module.css";

export const CrudTable = () => {
  return (
    <div className={styles.crudTable}>
      <AddItem />
      <Table />
    </div>
  );
};
