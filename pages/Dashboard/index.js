import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Table, Button, Space, notification, Popconfirm, Form } from "antd";
import { source } from "../../component/Dashboard/table-config";
import ModalForm from "../../component/Dashboard/ModalForm";

const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState(source);
  const [edit, setEdit] = useState(false);
  const [record, setrecord] = useState();
  const [page, setPage] = useState(1);
  const [form] = Form.useForm();

  const addData = () => {
    setEdit(false);
    setOpenForm(true);
  };

  const editData = (record) => {
    form.setFieldsValue(record);
    setrecord(record);
    setEdit(true);
    setOpenForm(true);
  };

  const deleteData = (record) => {
    setData(data.filter((item) => item.title !== record.title));
    notification.warning({ message: "Data berhasil dihapus", description: "" });
  };

  const column = [
    {
      title: "No",
      key: "key",
      render: (value, item, index) => (page - 1) * 10 + index + 1,
    },
    {
      title: "Barang",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Harga",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => editData(record)}>
            Edit
          </Button>
          <Button danger>
            <Popconfirm
              title="Yakin mau dihapus?"
              onConfirm={() => deleteData(record)}
              danger
            >
              Delete
            </Popconfirm>
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Container>
      <Button onClick={addData}>Tambah Data</Button>
      <Table
        columns={column}
        dataSource={data}
        pagination={{
          onChange(current) {
            setPage(current);
          },
        }}
      />
      <ModalForm
        visible={openForm}
        open={setOpenForm}
        setData={setData}
        data={data}
        edit={edit}
        record={record}
        form={form}
      />
    </Container>
  );
};

export default Dashboard;
