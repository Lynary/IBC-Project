import React from "react";
import { Modal, Form, Input, InputNumber, Button, notification } from "antd";

const ModalForm = ({ visible, open, data, setData, edit, record, form }) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const submitData = (values) => {
    if (!edit) {
      values.key = data[data.length - 1].key + 1;
      try {
        setData([...data, values]);
        notification.success({
          message: "Data berhasil ditambahkan",
          description: "",
        });
      } catch {
        notification.error({
          message: "Data gagal ditambahkan",
          description: "",
        });
      }
    } else {
      try {
        setData(
          data.map((item) => {
            if (item.title === record.title) {
              [item.title, item.price] = [values.title, values.price];
              return item;
            }
            return item;
          })
        );
        notification.success({
          message: "Data berhasil diedit",
          description: "",
        });
      } catch {
        notification.error({
          message: "Data gagal diedit",
          description: "",
        });
      }
    }
    form.resetFields();
    open(false);
  };
  return (
    <Modal
      title={edit ? "Edit Data" : "Tambah Data"}
      visible={visible}
      onCancel={() => open(false)}
      footer={null}
    >
      <Form {...layout} onFinish={submitData} form={form}>
        <Form.Item name="title" label="Barang">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Harga">
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
