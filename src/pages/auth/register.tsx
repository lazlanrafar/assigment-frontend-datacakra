import { Button, Form, Input, message } from "antd";
import LayoutAuth from "../../layouts/auth.layout";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../../api/auth";
import { useState } from "react";

export default function RegisterPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  type FieldType = {
    name?: string;
    email?: string;
    password?: string;
  };

  const onFinish = async (values: FieldType) => {
    setLoading(true);
    try {
      const response = await Register(values.name!, values.email!, values.password!);

      messageApi.open({
        type: "success",
        content: response.data.message,
      });

      setTimeout(() => {
        navigate("/login");
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: "Failed to register!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAuth>
      {contextHolder}
      <div id="form-section" className="mx-auto max-h-screen w-full max-w-[1080px] overflow-y-auto">
        <div className="h-full min-h-screen bg-white md:pl-[50px] md:pt-[44px]">
          <div className="flex justify-center">
            <div className="mb-8 mt-[50px] w-full max-w-[420px] px-5 leading-tight md:mt-[130px] md:px-0">
              <h1 className="w-full text-xl font-bold leading-[130%]">Register</h1>
              <div className="mt-2 text-xs leading-[130%] font-light text-gray-500 md:text-sm">
                Register to create an account
              </div>
              <div className="mt-6 rounded-xl">
                <Form layout="vertical" initialValues={{ remember: true }} onFinish={onFinish}>
                  <Form.Item<FieldType>
                    name="name"
                    label="Full Name"
                    rules={[{ required: true, message: "Please input your full name!" }]}
                  >
                    <Input size="large" placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: "Please input your email address!" }]}
                  >
                    <Input size="large" placeholder="Enter your email" />
                  </Form.Item>
                  <Form.Item<FieldType>
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                  >
                    <Input.Password size="large" placeholder="Enter your password" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      loading={loading}
                      htmlType="submit"
                      className="flex h-[44px] items-center justify-center opacity-90 hover:opacity-100 bg-[#6913D8] text-white hover:bg-[#F4F2FF] hover:text-[#6913D8] focus:bg-[#6913D8] focus:text-white rounded-full text-[16px] border-none mt-2 w-full !text-xs font-bold md:!h-[44px] md:!text-base"
                    >
                      Sign in
                    </Button>
                  </Form.Item>

                  <div className="mt-4 flex w-full items-center justify-center md:mt-6 md:justify-start">
                    <p className="flex items-center text-xs text-[#1a1a1a]">
                      Have an account?{" "}
                      <Link to={"/login"} className="ml-1 text-xs font-bold text-primary">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAuth>
  );
}
