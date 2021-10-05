
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Table, Button, Space, notification, Popconfirm, Form } from "antd";
import { source } from "./table-config";
import ModalForm from "./ModalForm";

const Dashboard = () => {
  const [openForm, setOpenForm] = useState(false);
  const [data, setData] = useState(source);
  const [edit, setEdit] = useState(false);
  const [record, setrecord] = useState();
  const [form] = Form.useForm();

import React from 'react'
import { useSelector } from 'react-redux'

import React, { useState,useEffect } from "react";
import { Table, Button} from "antd";
import Head from "next/head";
import Layout from '../../layouts/Layout'
import Dashboard from "../../component/Dashboard";


const DashboardIndex = () => {
  return (
    <>
    
    <Head>
            <title>Create Next App</title>
            <meta name="description" content="Kelompok 2 de bes ngab" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        <Layout>
          <Dashboard/>
        </Layout>
    </>
  );
};


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

      dataIndex: "key",
      key: "key",

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

      <Table columns={column} dataSource={data} />

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


export default DashboardIndex;


