import React from "react";
import { Modal, Form, Input, InputNumber, Button, notification } from "antd";

const ModalForm = ({ visible, open, data, setData, edit, record, form }) => {

import { Modal, Form, Input, InputNumber, Button } from "antd";
import Notif from "../shared/notification";
import { addTodo, editTodo } from "../../redux/store/actions/todoActions";
import { useDispatch } from "react-redux";

const ModalForm = ({ openForm, setstate,data, getIndex, edit, form }) => {
  const formRef = React.createRef();
  const dispatch = useDispatch();

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };

  const submitData = (values) => {
    if (!edit) {

      values.key = data.length + 1;

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

          message: "Data berhasil ditambahkan",

          description: "",
        });
      } catch {
        notification.error({

          message: "Data gagal ditambahkan",

          description: "",
        });
      }
    }
    form.resetFields();
    open(false);
    

    if (edit===false) {
      values.key = data.length + 1;
      try {
        dispatch(addTodo(values))
        Notif('success',"Data berhasil ditambahkan")
      } catch {
        Notif('error',"Data gagal ditambahkan")
      }
    } else {
      var EditData = data
      EditData[getIndex].title = values.title
      EditData[getIndex].price = values.price
      dispatch(editTodo(EditData))
      try {
        setstate(prevState=>({
          ...prevState,
          edit:false
        })
        );
        Notif('success',"Data berhasil diubah")
      } catch {
        Notif('error',"Data gagal diubah")
      }
    }
    form.resetFields();
    setstate(prevState=>({
      ...prevState,
      openForm:!openForm
    }));

  };
  return (
    <Modal
      title={edit ? "Edit Data" : "Tambah Data"}
      visible={visible}

      footer={null}
      onCancel={() => open(false)}
      visible={openForm}
      footer={null}
      onCancel={() => 
        setstate(prevState=>({...prevState,
      openForm:!openForm})
    )}
      forceRender

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
