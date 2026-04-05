import "./App.css";
import { Button, Checkbox, Form, Input, Card, Typography } from "antd";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    setName(values.username);
    setDescription(values.description);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Typography.Title level={2}>Form using Ant Design</Typography.Title>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Card>
        <Typography.Title level={3}>Sent data</Typography.Title>
        <Typography.Title level={5}>Username: {name}</Typography.Title>
        <Typography.Title level={5}>
          Description: {description}
        </Typography.Title>
      </Card>
    </div>
  );
}

export default App;
