import { Table as AntTable, Space, type TableProps } from "antd";

import { useGetTableData } from "../hooks/use-get-table-data";
import type { DataType } from "../types/types";
import styles from "./table.module.css";

export const Table = () => {
  const { data: items } = useGetTableData();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size='middle'>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = items
    ? items.map(item => ({
        key: item.id,
        name: item.name,
        date: new Date(item.date).toLocaleDateString(),
        price: item.price,
      }))
    : [];

  return (
    <div className={styles.table}>
      <AntTable<DataType> columns={columns} dataSource={data} />
    </div>
  );
};
