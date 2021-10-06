import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Table, Button, Space, notification, Popconfirm, Form } from "antd";
import { source } from "./table-config";
import ModalForm from "./ModalForm";
import { useSelector, useDispatch } from "react-redux";
import Notif from "../shared/notification";
import { delTodo } from "../../redux/store/actions/todoActions";

const Dashboard = () => {
  const data = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    openForm: false,
    edit: false,
    getIndex: null,
    record: null,
  });
  const { openForm, edit, record } = state;
  const { push } = useRouter();
  const isLogged = useSelector((state) => state.UserReducer.auth.success);
  const [form] = Form.useForm();

  const addData = () => {
    setstate({
      ...state,
      edit: false,
      openForm: true,
    });
  };

  const editData = (recordEdit, index) => {
    form.setFieldsValue(recordEdit);
    setstate({
      ...state,
      getIndex: index,
      edit: !edit,
      openForm: !openForm,
    });
  };

  const deleteData = (record) => {
    dispatch(delTodo(record.key));
    Notif("success", "Data berhasil dihapus");
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
      render: (text, record, index) => (
        <Space size="middle">
          <Button type="primary" onClick={() => editData(record, index)}>
            Edit
          </Button>
          <Button danger>
            <Popconfirm title="Yakin mau dihapus?" onConfirm={() => deleteData(record)} danger>
              Delete
            </Popconfirm>
          </Button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    if (!isLogged) {
      push("/Login");
    }
  }, []);
  return (
    <>
      <Button className="my-5" onClick={addData}>
        Tambah Data
      </Button>
      <Table columns={column} dataSource={data} />
      <ModalForm {...state} data={data} setstate={setstate} form={form} />
    </>
  );
};

export default Dashboard;
