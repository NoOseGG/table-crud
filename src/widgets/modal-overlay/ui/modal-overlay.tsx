import { DatePicker, Form, Input, InputNumber, Modal } from "antd";
import dayjs from "dayjs";

import { useEffect } from "react";

import type { DataType } from "../../../entities/table/types/types";

interface Props {
  open: boolean;
  item: DataType | null;
  onCancel: () => void;
  onSubmit: (values: DataType) => void;
}

export const ModalForm = ({ open, item, onCancel, onSubmit }: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (item) {
      form.setFieldsValue({
        ...item,
        date: item.date ? dayjs(item.date, "DD.MM.YYYY") : null,
      });
    } else {
      form.resetFields();
    }
  }, [item, form]);

  const handleOk = () => {
    form.validateFields().then(values => {
      const formattedValues: DataType = {
        ...values,
        date: values.date ? values.date.toISOString() : "",
        id: item?.id,
      };

      onSubmit(formattedValues);
      form.resetFields();
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={handleOk}
      title={item ? "Edit item" : "Add item"}
    >
      <Form form={form} layout='vertical'>
        <Form.Item name='name' label='Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name='date' label='Date' rules={[{ required: true }]}>
          <DatePicker style={{ width: "100%" }} format='DD.MM.YYYY' />
        </Form.Item>

        <Form.Item name='age' label='Age' rules={[{ required: true }]}>
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
