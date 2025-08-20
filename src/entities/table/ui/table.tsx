import { Table as AntTable, Space, type TableProps } from "antd";
import dayjs from "dayjs";

import { useGetTableData } from "../hooks/use-get-table-data";
import type { DataType } from "../types/types";
import styles from "./table.module.css";

interface Props {
  onEdit: (item: DataType) => void;
  onDelete: (item: DataType) => void;
}

export const Table: React.FC<Props> = ({ onEdit, onDelete }) => {
  const { data: items } = useGetTableData();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) =>
        dayjs(a.date, "DD.MM.YYYY").unix() - dayjs(b.date, "DD.MM.YYYY").unix(),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <a onClick={() => onEdit(record)}>Edit</a>
          <a onClick={() => onDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = items
    ? items.map(item => ({
        ...item,
        date: new Date(item.date).toLocaleDateString(),
        key: item.id,
      }))
    : [];

  return (
    <div className={styles.table}>
      <AntTable<DataType> columns={columns} dataSource={data} />
    </div>
  );
};
