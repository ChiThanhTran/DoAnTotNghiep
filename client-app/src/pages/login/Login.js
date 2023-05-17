import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Modal,
  DatePicker,
  Radio,
  Checkbox,
} from "antd";
import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();
  const showback = () => {
    navigate('/home');
  };
  const [form] = Form.useForm();
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
      offset: 1
    },
  };


  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
    };
    axios({
      method: 'get',
      url: `https://localhost:5000/login?username=${values.Username}&password=${values.Password}`,
      // headers: { Authorization: `Bearer ${token}` }
    })

      .then(response => {
        if(response.data){
          Modal.success({
            title: 'SAVE SUCCESSFULLY',
            content: 'You have done this very well',
            onOk: () => { showback() }
          })
        }else{
          Modal.error({
            title: 'CHANGE FAILED',
            content: 'Loi roi'
          })
        }
      })
      .catch(e => {
        Modal.error({
          title: 'CHANGE FAILED',
          content: e
        })
      });



  };

  return (
    <Row>
      <div className="content">
        <Row style={{ marginBottom: "10px", color: "#cf2338" }} className="fontHeaderContent">
          Đăng nhập
        </Row>
        <Row
          style={{ marginTop: "10px", marginLeft: "5px", display: "block" }}
        >
          <Form name="complex-form" form={form} onFinish={onFinish} {...formItemLayout} labelAlign="left" >

            <Form.Item label="Tên đăng nhập" style={{ marginBottom: 20 }}
              name="Username"
              rules={[{ required: true }]}
            >
              <Input className="inputForm" />
            </Form.Item>

            <Form.Item label="Mật khẩu" style={{ marginBottom: 20 }}

              name="Password"
              rules={[{ required: true }]}

            >
              <Input.Password className="inputForm" />

            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item shouldUpdate>
              {() => (
                <Row>
                  <Col span={3} offset={6}>
                    <Button htmlType="submit" className="buttonSave" type="primary">
                      Đăng Nhập
                    </Button>
                  </Col>
                  <Col span={3} offset={6}>
                    <Button className="buttonCancle" onClick={showback}>Quay Lại</Button>
                  </Col>

                </Row>
              )}
            </Form.Item>
          </Form>
        </Row>
      </div>
    </Row>
  );
}

